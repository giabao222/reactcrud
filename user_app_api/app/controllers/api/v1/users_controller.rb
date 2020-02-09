module Api::V1
class UsersController <ApplicationController
  def index
        @users = User.order("created_at DESC")
        render json: @users
end
def create
    @user =User.create(user_params)
    if @user.save
    render json: @user
    else
        render json: @user
end
end
def update
    @user = User.find(params[:id])
    @user.update_attributes(user_params)
    render json: @user
end
def destroy
    @user = User.find(params[:id])
    @user.destroy
    head :no_content
end
def show
      @user = User.find(params[:id])
     render json: @user
end
private
def user_params
    params.require(:user).permit(:name, :email, :phone , :address )
end
end
end
