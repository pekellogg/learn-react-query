class Api::UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def show
    if @user = User.find(params[:id])
      render json: @user
    else
      # server error if not found
      render json: { status: 500 }
    end
  end
end
