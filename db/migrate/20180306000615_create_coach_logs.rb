class CreateCoachLogs < ActiveRecord::Migration[5.1]
  def change
    create_table :coach_logs do |t|
      t.string :cancelled
      t.date :date_of_visit
      t.string :length_of_visit
      t.string :objectives_of_visit
      t.boolean :interact_facilitated_meeting, :null => false
      t.boolean :interact_observed_practice, :null => false
      t.boolean :interact_checked_leadership, :null => false
      t.boolean :interact_checked_team_lead, :null => false
      t.boolean :interact_facilitated_pd, :null => false
      t.boolean :interact_other, :null => false
      t.string :interact_other_explained
      t.integer :interact_teachers
      t.integer :interact_guidance_counselors
      t.integer :interact_college_couselors
      t.integer :interact_assistant_principals
      t.integer :interact_principals
      t.integer :interact_other
      t.string :next_step_notes
      t.boolean :academic_skills, :null => false
      t.boolean :academic_personal_behavior, :null => false
      t.boolean :academic_programming, :null => false
      t.boolean :college_career_access, :null => false
      t.boolean :learning_trajectory_discussion
      t.string :activity_inquiry_institute
      t.string :activity_research
      t.string :activity_design
      t.string :activity_pdsa
      t.string :activity_synthesize
      t.string :activity_scale
      t.string :forward_work
      t.string :goals_met
      t.string :rate_learning_trajectory
      t.string :rate_learning_trajectory_explained
      t.string :learning_trajectory_success_challenge
      t.string :in_between_steps
      t.boolean :learning_trajectory_inquiry_institute, :null => false
      t.boolean :learning_trajectory_research, :null => false
      t.boolean :learning_trajectory_design, :null => false
      t.boolean :learning_trajectory_pdsa, :null => false
      t.boolean :learning_trajectory_synthesize, :null => false
      t.boolean :learning_trajectory_scale, :null => false
      t.string :supervision_lab_to_bring
      t.boolean :highlight_planning
      t.string :highlight_planning_explained




      t.timestamps
    end
  end
end
