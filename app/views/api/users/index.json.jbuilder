@users.each do |user|
  json.set! user.id do
    json.id user.id
    json.username user.username
    json.email user.email
    json.image_url user.image_url
  end
end
