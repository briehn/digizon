# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
  
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      name: 'Tai Kamiya', 
      email: 'tai@digi.io', 
      password: 'password'
    )

    puts "Creating test products..."

    PRODUCTS = [
      {
      name: "Taichi Digivice",
      description: "A basic Digivice created by the Agents, primarily to allow the user to digivolve their partners.",
      category: "Digivice",
      price: 24.99,
      }, 
      {
      name: "D-3 Digivice",
      description: "The upgraded version to the basic Digivice, created by a group of divine Digimon.",
      category: "Digivice",
      price: 34.99,
      }, 
      {
      name: "Random Digitama",
      description: "Here's your chance to obtain a Digmon with our Random Digitama. Our Digitama come in a variety of colors, shapes and sizes!",
      category: "Digitama",
      price: 56.49,
      }
    ]
    PRODUCTS.each do |product|
      Product.create!(product)
    end
  
    puts "Done!"
  end