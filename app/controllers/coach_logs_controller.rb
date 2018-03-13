class CoachLogsController < ApiController
  before_action :require_login, except: [:index, :show]

  def index
    coach_logs = CoachLog.all
    render json: { coach_logs: coach_logs }
  end

  def show
    coach_log = CoachLog.find(params[id])
    render json: { coach_log: coach_log }
  end

  def create
    coach_log = CoachLog.new(coach_log_params)
    coach_log.coach = current_coach

    if coach_log.save
      render json: {
        message: 'ok',
        coach_log: coach_log
      }
    else
      render json: { message: 'Could not create monster' }
  end
end

# permit more params for questions below, video is around 51:30ish, does not have DBN
  private
  def coach_log_params
    params.require(:coach_log).permit(:cancelled)
  end
end
