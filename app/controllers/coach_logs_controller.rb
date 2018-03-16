class CoachLogsController < ApiController
  before_action :require_login, except: [:index, :show]

  def index
    coach_logs = CoachLog.all.includes(:coach)
    render json: { coach_logs: coach_logs }
  end

  def show
    coach_log = CoachLog.find(params[:id])
    coach_log_coach = coach_log.coach
    render json: { coach_log: coach_log, coach: coach_log_coach.username }
  end

  def create
    coach_log = CoachLog.new(coach_log_params)
    coach_log.coach = current_coach

    if coach_log.save
      render json: {
        message: 'ok',
        coach_log: coach_log,
      }
    else
      render json: { message: 'Could not create monster' }
  end
end

# permit more params for questions below, video is around 51:30ish, does not have DBN
  private
  def coach_log_params
    params.require(:coach_log).permit(:cancelled,
      :date_of_visit,
      :length_of_visit,
      :objectives_of_visit,
      :interact_in_these_ways,
      :interact_other_explained,
      :interact_teachers,
      :interact_guidance_counselors,
      :interact_college_couselors,
      :interact_assistant_principals,
      :interact_principals,
      :interact_other,
      :next_step_notes,
      :college_career_readiness_domains,
      :learning_trajectory_discussion,
      :activity_inquiry_institute,
      :activity_research,
      :activity_design,
      :activity_pdsa,
      :activity_synthesize,
      :activity_scale,
      :forward_work,
      :goals_met,
      :rate_learning_trajectory,
      :rate_learning_trajectory_explained,
      :learning_trajectory_success_challenge,
      :in_between_steps,
      :learning_trajectory_next_meeting,
      :supervision_lab_to_bring,
      :highlight_planning,
      :highlight_planning_explained,
      :coach_name,
      :school_visited
    )
  end
end
