@products.each do |product|
    json.set! product.id do
        json.extract! product, :id, :name, :description, :category, :price
        # json.photoUrl product.photo.url
    end
end