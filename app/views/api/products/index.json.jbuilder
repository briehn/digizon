@products.each do |product|
    json.set! product.id do
        json.extract! product, :id, :name, :description, :category, :price
    end
end