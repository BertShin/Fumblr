Post.create!([
  {title: "The person that said winning isn’t everything", user_id: 1, description: "Mia Hamm", image_url: nil, likes: nil, content: "never won anything", content_type: "Quote"},
  {title: "Still one of the best dunks of all time!", user_id: 2, description: "By KB The GOAT", image_url: "https://media.giphy.com/media/VvZSI1pH1b2Ra/giphy.gif", likes: nil, content: nil, content_type: "Text"},
  {title: "LETS GO!!!", user_id: 1, description: "Who's ready for the Super Bowl??", image_url: "https://media.giphy.com/media/l4pT5DCioJzFw10oo/giphy.gif", likes: nil, content: nil, content_type: "Text"},
  {title: "Steph a fool LOL", user_id: 3, description: nil, image_url: "https://media.giphy.com/media/3oEjHIPW937PZ7zzLq/giphy.gif", likes: nil, content: nil, content_type: "Text"},
  {title: "Check this sick MJ gif!", user_id: 2, description: "Who did dis", image_url: "https://media.giphy.com/media/zAYZOtH5OMhuU/giphy.gif", likes: nil, content: nil, content_type: "Text"},
  {title: "Funniest thing I've seen all day LOL", user_id: 2, description: nil, image_url: "https://media.giphy.com/media/xT9IguGd9sn4dIbaiQ/giphy.gif", likes: nil, content: nil, content_type: "Text"},
  {title: "Me when I'm on a roll at work", user_id: 2, description: nil, image_url: "https://media.giphy.com/media/3otPorZ08nPuaZfoeA/giphy.gif", likes: nil, content: nil, content_type: "Text"},
  {title: "I don't want to be Michael Jordan...", user_id: 2, description: nil, image_url: nil, likes: nil, content: "I don't want to be Michael Jordan, I want to be Kobe Bryant", content_type: "Quote"},
  {title: "Seriously what debate is there?", user_id: 2, description: nil, image_url: nil, likes: nil, content: "Why is there such a debate between who's the GOAT? Kobe is obviously the goat.. #PplgottaRecognize #5>6 #24>23", content_type: "Text"},
  {title: "This is a test quote", user_id: 1, description: "", image_url: nil, likes: nil, content: "What a great quote", content_type: "Quote"},
  {title: "Ya'll know who's bouta win the Dunk Contest", user_id: 1, description: "", image_url: "https://media.giphy.com/media/12ZV3oW1llVG0M/giphy.gif", likes: nil, content: "", content_type: "Text"},
  {title: "I hated every minute of training", user_id: 1, description: "Muhammed Ali", image_url: nil, likes: nil, content: " but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion.", content_type: "Quote"},
  {title: "I’ve missed more than 9000 shots in my career", user_id: 1, description: "Michael Jordan", image_url: nil, likes: nil, content: "I’ve lost almost 300 games. 26 times, I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.”", content_type: "Quote"},
  {title: "When your friend says they have food for you.. but they ate it", user_id: 1, description: "", image_url: "https://media.giphy.com/media/11H9nN7VS1bhkI/giphy.gif", likes: nil, content: "", content_type: "Text"},
  {title: "TFW your serve doesn't fly", user_id: 4, description: "sad life", image_url: "https://media.giphy.com/media/26xBJXRsehokyUSME/giphy.gif", likes: nil, content: "", content_type: "Text"},
  {title: "I've had to learn to fight my whole life", user_id: 4, description: "Serena Williams AKA myself", image_url: nil, likes: nil, content: "got to learn to keep smiling. If you smile, things will work out", content_type: "Quote"},
  {title: "Hittin 3's @ the 24 like", user_id: 3, description: "bang bang", image_url: "https://media.giphy.com/media/3ohs4xFl0wj0FehtfO/giphy.gif", likes: nil, content: "", content_type: "Text"},
  {title: "GOAT", user_id: 3, description: "", image_url: "https://media.giphy.com/media/L5ohDduqx0dwY/giphy.gif", likes: nil, content: "", content_type: "Text"}
])
User.create!([
  {username: "SerenaWilliams", email: "serenawilliams@gmail.com", session_token: "D2BHwQ7_S-8J0Aq6sQB5zXE", password_digest: "$2a$10$e6RKTKsKpwESh75no1Ie2u0UZpMQUwtDu3w7KU3Pmf2sdA3ae5GYq", image_url: "https://specials-images.forbesimg.com/imageserve/575706a4a7ea43396db27353/416x416.jpg?background=000000&cropX1=138&cropX2=676&cropY1=126&cropY2=664"},
  {username: "Alberto", email: "albert@gmail.com", session_token: "UvApUzYg-X1QTSKq78O2Zm0", password_digest: "$2a$10$3Q9E5yvCJw0JydGJA3qlg.hH5eP6l6/uJTfqBDKyAj6dWJJh0nNrq", image_url: "https://usatftw.files.wordpress.com/2017/07/kobe-champion.jpg"},
  {username: "BertShin", email: "bertshin@gmail.com", session_token: "sP_i6ZymyjRt1kMBxnmb_Ac", password_digest: "$2a$10$WzH3D5ftUJUtRyi4K.KJZONGOYfEtYaM976M1amxE/QKa6I8e93zu", image_url: "https://pbs.twimg.com/profile_images/950664597366714369/M4PmYTBN.jpg"},
  {username: "HelloGuest", email: "bestguest@gmail.com", session_token: "ORLaqlQqvxmNnpWiuSLFYBI", password_digest: "$2a$10$q6Y5qAyRSBnEXyaYRfousu6vNzC9Ag6wyieqEOgZ9GlFyN/lkuzTK", image_url: "https://www.limestone.edu/sites/default/files/user.png"}
])
