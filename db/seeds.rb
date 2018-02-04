Post.create!([
  {title: "Still one of the best dunks of all time!", user_id: 2, description: "By KB The GOAT", image_url: "https://media.giphy.com/media/VvZSI1pH1b2Ra/giphy.gif", likes: nil, content: nil, content_type: "Text"},
  {title: "LETS GO!!!", user_id: 1, description: "Who's ready for the Super Bowl??", image_url: "https://media.giphy.com/media/l4pT5DCioJzFw10oo/giphy.gif", likes: nil, content: nil, content_type: "Text"},
  {title: "Steph a fool LOL", user_id: 3, description: nil, image_url: "https://media.giphy.com/media/3oEjHIPW937PZ7zzLq/giphy.gif", likes: nil, content: nil, content_type: "Text"},
  {title: "Check this sick MJ gif!", user_id: 2, description: "Who did dis", image_url: "https://media.giphy.com/media/zAYZOtH5OMhuU/giphy.gif", likes: nil, content: nil, content_type: "Text"},
  {title: "Funniest thing I've seen all day LOL", user_id: 2, description: nil, image_url: "https://media.giphy.com/media/xT9IguGd9sn4dIbaiQ/giphy.gif", likes: nil, content: nil, content_type: "Text"},
  {title: "Me when I'm on a roll at work", user_id: 2, description: nil, image_url: "https://media.giphy.com/media/3otPorZ08nPuaZfoeA/giphy.gif", likes: nil, content: nil, content_type: "Text"},
  {title: "I don't want to be Michael Jordan...", user_id: 2, description: nil, image_url: nil, likes: nil, content: "I don't want to be Michael Jordan, I want to be Kobe Bryant", content_type: "Quote"},
  {title: "That feelin when its friday~", user_id: 3, description: nil, image_url: "https://media.giphy.com/media/iBdKJ6iIubtRK/giphy.gif", likes: nil, content: nil, content_type: "Text"},
  {title: "Seriously what debate is there?", user_id: 2, description: nil, image_url: nil, likes: nil, content: "Why is there such a debate between who's the GOAT? Kobe is obviously the goat.. #PplgottaRecognize #5>6 #24>23", content_type: "Text"}
])
User.create!([
  {username: "Alberto", email: "albert@gmail.com", session_token: "D1l3ovvTlza_xOoxgsBHj0c", password_digest: "$2a$10$3Q9E5yvCJw0JydGJA3qlg.hH5eP6l6/uJTfqBDKyAj6dWJJh0nNrq", image_url: nil},
  {username: "BertShin", email: "bertshin@gmail.com", session_token: "FMivvxSJfkvkH5i55HyKkXk", password_digest: "$2a$10$WzH3D5ftUJUtRyi4K.KJZONGOYfEtYaM976M1amxE/QKa6I8e93zu", image_url: nil},
  {username: "HelloGuest", email: "bestguest@gmail.com", session_token: "D-X5lI3KLAmEkxvWQSXClUk", password_digest: "$2a$10$q6Y5qAyRSBnEXyaYRfousu6vNzC9Ag6wyieqEOgZ9GlFyN/lkuzTK", image_url: nil}
])
