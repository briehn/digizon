class Review < ApplicationRecord
  validates :body, length: {in: 1..20000}
  validates :rating, numericality: {in: 1..5, message: "must be between 1 to 5"}
  validates :headline, length: {in: 1..100}

  belongs_to :user
  belongs_to :product
end
