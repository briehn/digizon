class Product < ApplicationRecord
    validates :name, :description, :category, :price, presence: true

    has_one_attached :photo
    has_many :reviews, dependent: :destroy
    has_many :carts, dependent: :destroy
end
