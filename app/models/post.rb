# == Schema Information
#
# Table name: posts
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  content     :string           not null
#  type        :string           not null
#  user_id     :integer          not null
#  description :string
#  image_url   :string
#  likes       :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Post < ApplicationRecord
  validates :user_id, :title, :content, :type, presence: true
  validates :title, length: { maximum: 75 }
  validates :description, length: { maximum: 255 }
  validates



end
