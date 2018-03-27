class SchoolsController < ApplicationController

  def index
    schools = School.all
    render json: { schools: schools }
  end

  def show
    school = School.find(params[:id])
    render json: { school: school }
  end

  def coachlogadmin
    coachlogadmin = CoachLog.all
    render json: { coachlogs: coachlogadmin }
  end

end
