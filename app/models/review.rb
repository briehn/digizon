class Review < ApplicationRecord
  validates :headline, :body, :rating, presence: true
  validates :rating, numericality: {in: 0..5, message: "something went wrong with your rating review"}
  validates :headline, length: {in: 1..100}

  belongs_to :user
  belongs_to :product
end
