class Api::ProductsController < ApplicationController
    def index
        @products = Product.all
        if params[:category] == nil && params[:search] == nil
            @products = Product.all
        elsif params[:search] && params[:category] == nil && Product.where("lower(name) LIKE ?", "%" + params[:search].downcase + "%").length == 0
            @products = Product.all
        elsif params[:search] && params[:category] == nil
            @products = Product.select(:id, :name, :description, :price, :category).where("lower(name) LIKE ?", "%" + params[:search].downcase + "%")

        elsif params[:category] && params[:search] == nil
            @products = Product.select(:id, :name, :description, :price, :category).where(category: params[:category])
        end
        render :index
    end

    def show
        @product = Product.find(params[:id])
        render :show
    end
end