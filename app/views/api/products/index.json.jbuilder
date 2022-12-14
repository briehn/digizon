@products.each do |product|
    json.set! product.id do
        json.extract! product, :id, :name, :description, :category, :price
        sum = 0
        product.reviews.each do |review|
            sum = sum + review.rating
        end
        if sum == 0
            ratings = 0
        else
            ratings = sum / product.reviews.length unless sum == 0
        end
        # json.photoUrl product.photo.url
        json.ratings ratings
        json.reviewCount product.reviews.length
    end
end