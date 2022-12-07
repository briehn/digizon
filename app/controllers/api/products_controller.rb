class Api::ProductsController < ApplicationController
    def index
        @products = Product.all
        if params[:category] == nil
            @products = Product.all
        else
            @products = Product.select(:id, :name, :description, :price, :category).where(category: params[:category])
        end
        render :index
    end

    def show
        @product = Product.find(params[:id])
        render :show
    end
end