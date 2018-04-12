class CoachesController < ApiController
  before_action :require_login, except: [:create, :profile, :schoolprofile]

  def create
  coach = Coach.create!(coach_params)
  render json: { token: coach.auth_token }
end

  def profile
    coach = Coach.find_by_auth_token!(request.headers[:token])
    coach_coach_logs = coach.coach_logs
    coach_intervisitation_logs = coach.intervisitation_logs
    coach_schools = coach.schools
    render json: { coach: { username: coach.username, email: coach.email, name: coach.name }, coach_logs: coach_coach_logs, schools: coach_schools }
  end

  def schoolprofile
    coach_log = CoachLog.where(params[:school_id => 181])
    render json: { coach_log: coach_log }
  end

private
  def coach_params
    params.require(:coach).permit(:username, :password, :email, :name)
  end

end
