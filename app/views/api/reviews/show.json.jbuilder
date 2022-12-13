json.review do
    json.extract! @review, :id, :user_id, :product_id, :headline, :body, :rating, :created_at
    json.user do
        json.extract! @review.user, :id, :name
    end
end
