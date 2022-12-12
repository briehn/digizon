json.review do
    json.extract! @review, :id, :user_id, :product_id, :body, :rating
end

json.user do
    json.extract! @review.user, :id, :name
end