class Api::CartsController < ApplicationController
    def show
        @user = current_user
        @cart = Cart.select(:user_id, :product_id, :quantity).where(user_id: @user.id)
        render :show
    end

    def create
        @user = current_user
        @cart = Cart.find_by(user_id: @user.id, product_id: cart_params[:product_id])
        # @cart = Cart.new(cart_params)
        if @cart
            @cart = @cart.update(quantity: cart_params[:quantity].to_i + @cart.quantity)
        else
            @cart = Cart.new(user_id: @user.id, product_id: cart_params[:product_id], quantity: cart_params[:quantity])
            @cart.save
        end
        render :show
    end

    def update_count
        @user = current_user
        @cart = Cart.find_by(user_id: @user.id, product_id: cart_params[:product_id])
        if @cart
            @cart = @cart.update(quantity: cart_params[:quantity])
        end
        render :show
    end

    def destroy
        @user = current_user
        @cart = Cart.find_by(user_id: @user.id, product_id: params[:product_id])

        @cart.destroy
        render :show
    end

    def clear_cart
        @user = current_user
        @cart = Cart.where(user_id: @user.id).destroy_all

        render :show
    end

    private
    def cart_params
        params.require(:cart).permit(:user_id, :product_id, :quantity)
    end
end