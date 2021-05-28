class Api::SessionsController < ApplicationController
  before_action :require_login, only: :destroy
  before_action :require_logout, only: :create

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      login(@user)
      render '/api/users/show'
    else
      render json: ['Incorrect Email or Password'], status: 422
    end
  end

  def destroy
    user = current_user
    if user
      logout
      render json: {}
    else
      render json: ['Not currently logged in'], status: 404
    end
  end

end
