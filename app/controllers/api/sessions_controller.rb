class Api::SessionsController < ApplicationController
  def show
    if current_user
      @user = current_user
      render 'api/users/show'
    else
      render json: { user: nil }
    end
  end

  def create
    @user = User.find_by_credentials(params[:email], params[:password])

    if @user
      login!(@user)
      render 'api/users/show'
    elsif !User.find_by(email: params[:email])
      render json: {errors: ['Email cannot be found']}, status: :unauthorized
    elsif !@user
      render json: {errors: ['Password is invalid.']}, status: :unauthorized
    end
  end

  def destroy
    logout!
    render json: { message: 'success' }
  end
end
