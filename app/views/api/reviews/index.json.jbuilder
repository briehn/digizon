json.reviews do
    if @reviews.length
        @reviews.each do |review|
            json.set! review.id do
                json.extract! review, :id, :user_id, :product_id, :headline, :body, :rating
                json.user do
                    json.extract! review.user, :name
                end
            end
        end
    else 
        json.extract! @reviews, :id, :user_id, :product_id, :headline, :body, :rating
        json.user do
            json.extract! review.user, :id, :name
        end
    end
end

