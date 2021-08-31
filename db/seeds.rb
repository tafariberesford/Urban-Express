# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Review.destroy_all
Song.destroy_all
User.destroy_all

@user1 = User.create!(username: 'Liz', email: 'liz123@gmail.com', password: 'liz12345')

puts "#{User.count} user created"


@song1 = Song.create!(title: "Wants and Needs", artist: "Drake", image_url: "https://i1.sndcdn.com/artworks-7igI9cWrpvt7-0-t500x500.jpg", user: @user1)
@song2 = Song.create!(title: "Seeing Green", artist: "Nicki Minaj", image_url: "https://i.scdn.co/image/ab67616d0000b2736d8b9f3e7337f6bff76ceff6", user: @user1)
@song3 = Song.create!(title: "Up", artist: "Cardi B", image_url: "https://i1.sndcdn.com/artworks-sdNygCXd2zbGK1Yp-8tV2LA-t500x500.jpg", user: @user1)
@song4 = Song.create!(title: "Crocodile Teeth (Remix)", artist: "Nicki Minaj", image_url: "https://dancehallarena.com/wp-content/uploads/2021/05/NICKI-MINAJ-SKILLIBENG-CROCODILE-TEETH-REMIX.jpg", user: @user1)
@song5 = Song.create!(title: "Ski", artist: "Young Thug", image_url: "https://i1.sndcdn.com/artworks-mDsLDbWWUf9BuTEp-zCRoKQ-t500x500.jpg", user: @user1)
@song6 = Song.create!(title: "Industry Baby", artist: "Lil Nas X ft. Jack Harlow", image_url: "https://m.media-amazon.com/images/I/81Uj3NtUuhL._SS500_.jpg", user: @user1)
@song7 = Song.create!(title: "Jail", artist: "Kanye West", image_url: "https://hipradar.net/wp-content/uploads/2021/07/Kanye-West-DONDA-Album.jpg", user: @user1)
@song8 = Song.create!(title: "Whole Lotta Money (Remix)", artist: "Bia ft. Nicki Minaj", image_url: "https://i.scdn.co/image/ab67616d0000b273ad89f82d9243ed88a6d68787", user: @user1)
@song9 = Song.create!(title: "Rapstar", artist: "Polo G", image_url: "https://i1.sndcdn.com/artworks-jLajqkRdbRJKAsfC-RxRFVA-t500x500.jpg", user: @user1)
@song10 = Song.create!(title: "Sorry Not Sorry", artist: "DJ Khaled", image_url: "https://images.genius.com/08e089999a0472c90a21c4e637019440.1000x1000x1.png", user: @user1)

puts "#{Song.count} songs created"

@review1 = Review.create!(title: "Drake is the goat", description: "This has to be one of Drake's best releases. Loved it!", user: @user1, song: @song1)

@review2 = Review.create!(title: "Seeing Green", description: "This is so good!", user: @user1, song: @song2)

puts "#{Review.count} reviews were created"