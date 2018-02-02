class Api::PostsController < ApplicationController
  before_action :require_logged_in


  def new

  end

  def create
    @post = Post.create(post_params)
    # if @post.user_id == current_user.id && @post.save
    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 401
    end
  end

  def index
    # @posts = Posts.includes(:user).all
    @posts = Post.all
  end

  def show
    @post = Post.find_by(id: params[:id])
  end

  def destroy
    @post = Post.find(params[:id])
    # if @post.user_id == current_user.id && @post
    if @post
      @post.destroy!
    else
      render json: ["Cannot Delete Such Post"]
    end
  end

  private

  def post_params
    params.require(:post).permit(:id, :title, :content_type, :type,
      :description, :user_id, :image_url, :likes)
  end

end
