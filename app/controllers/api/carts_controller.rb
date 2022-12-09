def show
    @cart = Cart.select(:user_id, :product_id, :quantity).where(:user_id(id: params[:id]))
    render :show
end

def create
    @user = current_user
    @cart = Cart.new(cart_params)
    if @cart.save
        render :show
    else
        render json: {errors: @cart.errors.full_messages, status: :unprocessable_entity}
    end
end

def destroy
    @user = current_user
    @cart = Cart.find_by(user_id: params[:user_id], product_id: params[:product_id])

    @cart.destroy
    render :show
end

def update
    @user = current_user
    @cart = Cart.find_by(user_id: params[:user_id]);
    if @cart
        @cart.update(@cart.id, quantity: cart_params[:quantity].to_i + @cart.quantity)
    else
        render json: {errors: @cart.errors.full_messages, status: :unprocessable_entity}
    end
    render :show
end

private
def cart_params
    params.require(:cart).permit(:user_id, :product_id, :quantity)
end