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

require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
