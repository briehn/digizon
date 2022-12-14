class Api::ReviewsController < ApplicationController
    wrap_parameters include: Review.attribute_names + [:userId, :productId]

    def create
        @user = current_user
        @review = Review.new(review_params)
        if @review.save
            render :show
        else
            render json: { errors: @review.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def show
        @user = current_user
        @review = Review.find_by(user_id: params[:id])
        if @review
            render :show
        else
            render json: { errors: ['The review requested does not exist.'] }, status: :unprocessable_entity
        end
    end

    def index
        @reviews = Review.where(product_id: params[:product_id])
        if @reviews
            render :index
        else
            render json: { errors: ['The reviews requested do not exist'] }, status: :unprocessable_entity
        end
    end

    def update
        @user = current_user
        @review = Review.find_by(id: params[:id])
        if @review
            @review.update(headline: review_params[:headline], body: review_params[:body], rating: review_params[:rating])
        end
        render :show
    end

    def destroy
        @review = current_user.reviews.find_by(id: params[:id])
        unless @review
          render json: { message: 'Unauthorized' }, status: :unauthorized
          return
        end
        @review.destroy
        render :show
    end

    private
    def review_params
        params.require(:review).permit(:user_id, :product_id, :headline, :body, :rating)
    end
end