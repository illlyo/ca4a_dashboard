class CoachesController < ApiController
  before_action :require_login, except: [:create]

  def create
  coach = Coach.create!(coach_params)
  render json: { token: coach.auth_token }
end

def profile
  coach = Coach.find_by_auth_token!(request.headers[:token])
  # user_pets = user.pets
  render json: { coach: { username: coach.username, email: coach.email, name: coach.name } }
end

private
def coach_params
  params.require(:coach).permit(:username, :password, :email, :name)
end

  # def create
  #   user = Coach.create!(coach_params)
  #   render json: { token: coach.auth_token }
  # end
  #
  # def profile
  #   coach = Coach.find_by_auth_token!(request.headers[:token])
  #   render json: {
  #     coach: { username: coach.username, email: coach.email, name: coach.name }
  #    }
  # end
  #
  # private
  #
  # def coach_params
  #   params.require(:coach).permit(:username, :password, :email, :name)
  # end

end
