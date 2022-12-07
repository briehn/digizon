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
        price: 13.37,
      }, 
      {
        name: "D-3 Digivice",
        description: "The upgraded version to the basic Digivice, created by a group of divine Digimon.",
        category: "Digivice",
        price: 12.34,
      }, 
      {
        name: "D-Power Digivice",
        description: "A portable and attachable digivice made for convenience. Comes with a blue card to swipe through the fun of this digivice!",
        category: "Digivice",
        price: 17.38
      },
      {
        name: "D-Tector",
        description: "A heavy digivice built for mountability. Attach it to your mobile device to transform it into your very own mobile digivice.",
        category: "Digivice",
        price: 50.00
      },
      {
        name: "Data Link Digivice",
        description: "The most technologically advanced Digivice to date! Become a member of DATS with these slick modern digivices today!",
        category: "Digivice",
        price: 99.99
      },
      {
        name: "Digitag",
        description: "A small device that pairs well with a Digicrest.",
        category:  "Accessories",
        price: 14.99
      },
      {
        name: "Crest of Courage",
        description: "A sleek, thin, sheet of metal with a stylized sun embedded in the center as it's emblem.",
        category: "Crests",
        price: 23.99
      },
      {
        name: "Crest of Friendship",
        description: "A sleek, thin, sheet of metal with a yin-yang enclosed in a stylized eye embedded in the center as it's emblem.",
        category: "Crests",
        price: 23.99
      },
      {
        name: "Crest of Love",
        description: "A sleek, thin, sheet of metal with a stylized heart embedded in the center as it's emblem.",
        category: "Crests",
        price: 23.99
      },
      {
        name: "Crest of Sincerity",
        description: "A sleek, thin, sheet of metal with a stylized teardrop embedded in the center as it's emblem.",
        category: "Crests",
        price: 23.99
      },
      {
        name: "Crest of Knowledge",
        description: "A sleek, thin, sheet of metal with a stylized pair of spectacles embedded in the center as it's emblem.",
        category: "Crests",
        price: 23.99
      },
      {
        name: "Crest of Reliability",
        description: "A sleek, thin, sheet of metal with a cross interspersed with four small trilaterals embedded in the center as it's emblem.",
        category: "Crests",
        price: 23.99
      },
      {
        name: "Crest of Hope",
        description: "A sleek, thin, sheet of metal with a shooting star embedded in the center as it's emblem.",
        category: "Crests",
        price: 23.99
      },
      {
        name: "Crest of Light",
        description: "A sleek, thin, sheet of metal with a stylized star embedded in the center as it's emblem.",
        category: "Crests",
        price: 23.99
      },
      {
        name: "Crest of Kindness",
        description: "A sleek, thin, sheet of metal with a stylized rose bud embedded in the center as it's emblem.",
        category: "Crests",
        price: 23.99
      },
      {
        name: "Crest of Miracles",
        description: "An exclusive sleek, thin, sheet of metal with a unique shape embedded in the center as it's emblem.",
        category: "Crests",
        price: 29.99
      },
      {
        name: "Crest of Destiny",
        description: "An exclusive sleek, thin, sheet of metal with a unique shape embedded in the center as it's emblem.",
        category: "Crests",
        price: 29.99
      },
      {
        name: "Random Digitama",
        description: "Here's your chance to obtain a Digmon with our Random Digitama. Our Digitama come in a variety of colors, shapes and sizes!",
        category: "Digitama",
        price: 56.49,
      },
      {
        name: "Digimental of Courage",
        description: "A special type of Digitama that dates back to the ancient Digital World. Used specifically for Armor Evolution.",
        category: "Digitama",
        price: 78.99,
      },
      {
        name: "Digimental of Friendship",
        description: "A special type of Digitama that dates back to the ancient Digital World. Used specifically for Armor Evolution.",
        category: "Digitama",
        price: 78.99,
      },
      {
        name: "Digimental of Love",
        description: "A special type of Digitama that dates back to the ancient Digital World. Used specifically for Armor Evolution.",
        category: "Digitama",
        price: 78.99,
      },
      {
        name: "Digimental of Purity",
        description: "A special type of Digitama that dates back to the ancient Digital World. Used specifically for Armor Evolution.",
        category: "Digitama",
        price: 78.99,
      },
      {
        name: "Digimental of Knowledge",
        description: "A special type of Digitama that dates back to the ancient Digital World. Used specifically for Armor Evolution.",
        category: "Digitama",
        price: 78.99,
      },
      {
        name: "Digimental of Sincerity",
        description: "A special type of Digitama that dates back to the ancient Digital World. Used specifically for Armor Evolution.",
        category: "Digitama",
        price: 78.99,
      },
      {
        name: "Digimental of Hope",
        description: "A special type of Digitama that dates back to the ancient Digital World. Used specifically for Armor Evolution.",
        category: "Digitama",
        price: 78.99,
      },
      {
        name: "Digimental of Light",
        description: "A special type of Digitama that dates back to the ancient Digital World. Used specifically for Armor Evolution.",
        category: "Digitama",
        price: 78.99,
      },
      {
        name: "Digimental of Kindness",
        description: "A special type of Digitama that dates back to the ancient Digital World. Used specifically for Armor Evolution.",
        category: "Digitama",
        price: 78.99,
      },
      {
        name: "Digimental of Miracles",
        description: "A special type of Digitama that dates back to the ancient Digital World. Used specifically for Armor Evolution.",
        category: "Digitama",
        price: 78.99,
      },
      {
        name: "Digimental of Fate",
        description: "A special type of Digitama that dates back to the ancient Digital World. Used specifically for Armor Evolution.",
        category: "Digitama",
        price: 78.99,
      },
    ]
    PRODUCTS.each do |product|
      Product.create!(product)
    end
  
    puts "Done!"
  end