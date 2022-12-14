class Product < ApplicationRecord
    validates :name, :description, :category, :price, presence: true

    # has_one_attached :photo
    has_many :reviews
    has_many :carts
end
