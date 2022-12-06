class Product < ApplicationRecord
    validates :name, :description, :category, :price, presence: true
end
