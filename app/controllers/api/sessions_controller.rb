class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render json: "Successful logout!"
    else
      render json: ["No User to Log Out"]
    end
  end

end
