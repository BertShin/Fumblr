json.set! post.id do
  json.post_id post.id
  json.title post.title
  json.content post.content
  json.content_type post.content_type
  json.user_id post.user_id
  json.description post.description
  json.image_url post.image_url
  json.likes post.likes
  json.user_image post.user.image_url
end
