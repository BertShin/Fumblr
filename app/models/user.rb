# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  image_url       :string
#

class User < ApplicationRecord
  validates :username, :email, :session_token, :password_digest,
            presence: true, uniqueness: true
  validates :password, length: { minimum: 5, allow_nil: true }
  attr_reader :password
  after_initialize :ensure_session_token

  has_many :posts,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Post

  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username)
    if @user && @user.is_password?(password)
      return @user
    else
      return nil
    end
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(17)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
    self.image_url ||= "https://www.limestone.edu/sites/default/files/user.png"
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end


end
