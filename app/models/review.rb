class Review < ApplicationRecord
  validates :body, :rating, presence: true
  validates :rating, numericality: {in: 0..5, message: "something went wrong with your rating review"}

  belongs_to :user
  belongs_to :product
end
