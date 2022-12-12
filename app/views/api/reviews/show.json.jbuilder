json.review do
    json.extract! @review, :id, :user_id, :product_id, :body, :rating
    json.user do
        json.extract! @review.user, :id, :name
    end
end
