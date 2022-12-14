json.cart @user.cart_items do |product|
    cart = product.carts.select { |item| item.product_id == product.id}
    json.quantity cart[0].quantity
    json.extract! product, :id, :name, :category, :price
    # json.photoURL product.photo.url
end  