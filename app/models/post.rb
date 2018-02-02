# == Schema Information
#
# Table name: posts
#
#  id           :integer          not null, primary key
#  title        :string           not null
#  user_id      :integer          not null
#  description  :string
#  image_url    :string
#  likes        :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  content      :string
#  content_type :string           not null
#

class Post < ApplicationRecord
  validates :user_id, :title, :content_type, presence: true
  validates :title, length: { maximum: 75 }
  validates :description, length: { maximum: 255 }
  validates :content_type, inclusion: { in: ["Text", "Photo",
     "Video", "Audio", "GIF", "Link", 'Quote']}

  # after_initialize :assign_user_id

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  def assign_user_id
    @user = User.find_by(session_token: session[:session_token])
    self.user_id = @user.id
  end

end
