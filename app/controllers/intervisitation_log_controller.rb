class IntervisitationLogController < ApiController
    before_action :require_login, except: [:index, :show]

    def index
      intervisitation_logs = IntervisitationLog.all.includes(:coach)
      render json: { intervisitation_logs: intervisitation_logs }
    end

    def show
      intervisitation_log = IntervisitationLog.find(params[:id])
      intervisitation_log_coach = intervisitation_log.coach
      render json: { intervisitation_log: intervisitation_log, coach: intervisitation_log_coach.username }
    end

    def create
      intervisitation_log = IntervisitationLog.new(intervisitation_log_params)
      intervisitation_log.coach = current_coach

      if intervisitation_log.save
        render json: {
          message: 'ok',
          intervisitation_log: intervisitation_log,
        }
      else
        render json: { message: 'Could not create monster' }
    end
  end

  # permit more params for questions below, video is around 51:30ish, does not have DBN
    private
    def intervisitation_log_params
      params.require(:intervisitation_log).permit(:date_visit,
            :visit_type,
            :coach_visited,
            :school,
            :feedback,
            :hoping_to_learn,
            :areas_of_strength,
            :areas_for_growth,
            :thinking_about,
            :plan_to_tryout,
            :share_with_team,
            :coach_name
      )
    end
  end
end
