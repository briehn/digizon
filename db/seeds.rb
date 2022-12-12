# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require "open-uri"

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

    User.create!(
      name: 'Takato Matsuki',
      email: 'takato@digi.io',
      password: 'password'
    )

    User.create!(
      name: 'Takuya Kanbara',
      email: 'takuya@digi.io',
      password: 'password'
    )

    User.create!(
      name: 'Marcus Damon',
      email: 'marcus@digi.io',
      password: 'password'
    )

    puts "Creating test products..."

    PRODUCTS = [
      {
        name: "Taichi Digivice",
        description: "A basic Digivice created by the Agents, primarily to allow the user to digivolve their partners.",
        category: "Digivice",
        price: 13.37,
        file: "https://digizon-seeds.s3.amazonaws.com/digivice/taichi_digivice.png",
        fileName: "taichi_digivice.png",
      }, 
      {
        name: "D-3 Digivice",
        description: "The upgraded version to the basic Digivice, created by a group of divine Digimon.",
        category: "Digivice",
        price: 12.34,
        file: "https://digizon-seeds.s3.amazonaws.com/digivice/d3_digivice.png",
        fileName: "d3_digivice.png",
      }, 
      {
        name: "D-Power Digivice",
        description: "A portable and attachable digivice made for convenience. Comes with a blue card to swipe through the fun of this digivice!",
        category: "Digivice",
        price: 17.38,
        file: "https://digizon-seeds.s3.amazonaws.com/digivice/d-power_digivice.png",
        fileName: "d-power_digivice.png",
      },
      {
        name: "D-Tector",
        description: "A heavy digivice built for mountability. Attach it to your mobile device to transform it into your very own mobile digivice.",
        category: "Digivice",
        price: 50.00,
        file: "https://digizon-seeds.s3.amazonaws.com/digivice/d-tector_digivice.png",
        fileName: "d-tector_digivice.png",
      },
      {
        name: "Data Link Digivice",
        description: "The most technologically advanced Digivice to date! Become a member of DATS with these slick modern digivices today!",
        category: "Digivice",
        price: 99.99,
        file: "https://digizon-seeds.s3.amazonaws.com/digivice/data-link_digivice.png",
        fileName: "data-link_digivice.png",
      },
      {
        name: "Digitag",
        description: "A small device that pairs well with a Digicrest.",
        category:  "Accessories",
        price: 14.99,
        file: "https://digizon-seeds.s3.amazonaws.com/accessories/digitag.png",
        fileName: "digitag.png",
      },
      {
        name: "Crest of Courage",
        description: "A sleek, thin, sheet of metal with a stylized sun embedded in the center as it's emblem.",
        category: "Crests",
        price: 23.99,
        file: "https://digizon-seeds.s3.amazonaws.com/crests/crest_courage.png",
        fileName: "crest_courage.png",
      },
      {
        name: "Crest of Friendship",
        description: "A sleek, thin, sheet of metal with a yin-yang enclosed in a stylized eye embedded in the center as it's emblem.",
        category: "Crests",
        price: 23.99,
        file: "https://digizon-seeds.s3.amazonaws.com/crests/crest_friendship.png",
        fileName: "crest_friendship.png",
      },
      {
        name: "Crest of Love",
        description: "A sleek, thin, sheet of metal with a stylized heart embedded in the center as it's emblem.",
        category: "Crests",
        price: 23.99,
        file: "https://digizon-seeds.s3.amazonaws.com/crests/crest_love.png",
        fileName: "crest_love.png",
      },
      {
        name: "Crest of Sincerity",
        description: "A sleek, thin, sheet of metal with a cross interspersed with four small trilaterals embedded in the center as it's emblem.",
        category: "Crests",
        price: 23.99,
        file: "https://digizon-seeds.s3.amazonaws.com/crests/crest_sincerity.png",
        fileName: "crest_sincerity.png",
      },
      {
        name: "Crest of Knowledge",
        description: "A sleek, thin, sheet of metal with a stylized pair of spectacles embedded in the center as it's emblem.",
        category: "Crests",
        price: 23.99,
        file: "https://digizon-seeds.s3.amazonaws.com/crests/crest_knowledge.png",
        fileName: "crest_knowledge.png",
      },
      {
        name: "Crest of Reliability",
        description: "A sleek, thin, sheet of metal with a a stylized teardrop embedded in the center as it's emblem.",
        category: "Crests",
        price: 23.99,
        file: "https://digizon-seeds.s3.amazonaws.com/crests/crest_reliability.png",
        fileName: "crest_reliability.png",
      },
      {
        name: "Crest of Hope",
        description: "A sleek, thin, sheet of metal with a shooting star embedded in the center as it's emblem.",
        category: "Crests",
        price: 23.99,
        file: "https://digizon-seeds.s3.amazonaws.com/crests/crest_hope.png",
        fileName: "crest_hope.png",
      },
      {
        name: "Crest of Light",
        description: "A sleek, thin, sheet of metal with a stylized star embedded in the center as it's emblem.",
        category: "Crests",
        price: 23.99,
        file: "https://digizon-seeds.s3.amazonaws.com/crests/crest_light.png",
        fileName: "crest_light.png",
      },
      {
        name: "Crest of Kindness",
        description: "A sleek, thin, sheet of metal with a stylized rose bud embedded in the center as it's emblem.",
        category: "Crests",
        price: 23.99,
        file: "https://digizon-seeds.s3.amazonaws.com/crests/crest_kindness.png",
        fileName: "crest_kindness.png",
      },
      {
        name: "Crest of Miracles",
        description: "An exclusive sleek, thin, sheet of metal with a unique shape embedded in the center as it's emblem.",
        category: "Crests",
        price: 29.99,
        file: "https://digizon-seeds.s3.amazonaws.com/crests/crest_miracles.png",
        fileName: "crest_miracles.png",
      },
      {
        name: "Crest of Destiny",
        description: "An exclusive sleek, thin, sheet of metal with a unique shape embedded in the center as it's emblem.",
        category: "Crests",
        price: 29.99,
        file: "https://digizon-seeds.s3.amazonaws.com/crests/crest_destiny.png",
        fileName: "crest_destiny.png",
      },
      {
        name: "Random Digitama",
        description: "Here's your chance to obtain a Digmon with our Random Digitama. Our Digitama come in a variety of colors, shapes and sizes!",
        category: "Digitama",
        price: 56.49,
        file: "https://digizon-seeds.s3.amazonaws.com/digitama/random_digitama.png",
        fileName: "random_digitama.png",
      },
      {
        name: "Digimental of Courage",
        description: "A special type of Digitama that dates back to the ancient Digital World. Used specifically for Armor Evolution.",
        category: "Digitama",
        price: 78.99,
        file: "https://digizon-seeds.s3.amazonaws.com/digitama/Digimental_courage.png",
        fileName: "Digimental_courage.png",
      },
      {
        name: "Digimental of Friendship",
        description: "A special type of Digitama that dates back to the ancient Digital World. Used specifically for Armor Evolution.",
        category: "Digitama",
        price: 78.99,
        file: "https://digizon-seeds.s3.amazonaws.com/digitama/Digimental_friendship.png",
        fileName: "Digimental_friendship.png",
      },
      {
        name: "Digimental of Love",
        description: "A special type of Digitama that dates back to the ancient Digital World. Used specifically for Armor Evolution.",
        category: "Digitama",
        price: 78.99,
        file: "https://digizon-seeds.s3.amazonaws.com/digitama/Digimental_love.png",
        fileName: "Digimental_love.png",
      },
      {
        name: "Digimental of Purity",
        description: "A special type of Digitama that dates back to the ancient Digital World. Used specifically for Armor Evolution.",
        category: "Digitama",
        price: 78.99,
        file: "https://digizon-seeds.s3.amazonaws.com/digitama/Digimental_purity.png",
        fileName: "Digimental_purity.png",
      },
      {
        name: "Digimental of Knowledge",
        description: "A special type of Digitama that dates back to the ancient Digital World. Used specifically for Armor Evolution.",
        category: "Digitama",
        price: 78.99,
        file: "https://digizon-seeds.s3.amazonaws.com/digitama/Digimental_knowledge.png",
        fileName: "Digimental_knowledge.png",
      },
      {
        name: "Digimental of Sincerity",
        description: "A special type of Digitama that dates back to the ancient Digital World. Used specifically for Armor Evolution.",
        category: "Digitama",
        price: 78.99,
        file: "https://digizon-seeds.s3.amazonaws.com/digitama/Digimental_sincerity.png",
        fileName: "Digimental_sincerity.png",
      },
      {
        name: "Digimental of Hope",
        description: "A special type of Digitama that dates back to the ancient Digital World. Used specifically for Armor Evolution.",
        category: "Digitama",
        price: 78.99,
        file: "https://digizon-seeds.s3.amazonaws.com/digitama/Digimental_hope.png",
        fileName: "Digimental_hope.png",
      },
      {
        name: "Digimental of Light",
        description: "A special type of Digitama that dates back to the ancient Digital World. Used specifically for Armor Evolution.",
        category: "Digitama",
        price: 78.99,
        file: "https://digizon-seeds.s3.amazonaws.com/digitama/Digimental_light.png",
        fileName: "Digimental_light.png",
      },
      {
        name: "Digimental of Kindness",
        description: "A special type of Digitama that dates back to the ancient Digital World. Used specifically for Armor Evolution.",
        category: "Digitama",
        price: 78.99,
        file: "https://digizon-seeds.s3.amazonaws.com/digitama/Digimental_kindness.png",
        fileName: "Digimental_kindness.png",
      },
      {
        name: "Digimental of Miracles",
        description: "A special type of Digitama that dates back to the ancient Digital World. Used specifically for Armor Evolution.",
        category: "Digitama",
        price: 78.99,
        file: "https://digizon-seeds.s3.amazonaws.com/digitama/Digimental_miracles.png",
        fileName: "Digimental_miracles.png",
      },
      {
        name: "Digimental of Fate",
        description: "A special type of Digitama that dates back to the ancient Digital World. Used specifically for Armor Evolution.",
        category: "Digitama",
        price: 78.99,
        file: "https://digizon-seeds.s3.amazonaws.com/digitama/Digimental_fate.png",
        fileName: "Digimental_fate.png",
      },
    ]

    PRODUCTS.each do |product|
      keys = {
        name: product[:name],
        description: product[:description],
        category: product[:category],
        price: product[:price]
      }
      obj = Product.create(keys)
      # file = URI.open(product[:file])
      # obj.photo.attach(io: file, filename: product[:fileName])
    end

    puts "Creating reviews"

    Review.create!(
      user_id: 1,
      product_id: 1,
      body: "Hey, this is mine!",
      rating: 5
      )

    Review.create!(
      user_id: 2,
      product_id: 1,
      body: "What is this?",
      rating: 2
    )

    Review.create!(
      user_id: 4,
      product_id: 1,
      body: "This is a knockoff data link device!",
      rating: 1
    )
  
    puts "Done!"
  end