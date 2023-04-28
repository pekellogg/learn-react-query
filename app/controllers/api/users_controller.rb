class Api::UsersController < ApplicationController
  # skip_before_action :authorize, only: :create
  def index
    @users = User.all
    render json: @users
  end

  def show
    if @user = User.find(params[:id])
      render json: @user
    end
  end

  def create
    if @user = User.create(user_params)
      render json: @user
    # else
    #   begin
    #   rescue ActiveRecord::RecordInvalid => invalid
    #     render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    #   end
    end
  end

  def update
    if @user = User.find(params[:id])
      if @user.update(user_params)
        render json: @user
      end
    end
  end

  def destroy
    if @user = User.find(params[:id])
      @user.destroy
    end
  end

  private

  def user_params
    params.require(:user).permit(:id, :first_name, :last_name, :email, :password_digest)
  end
end
