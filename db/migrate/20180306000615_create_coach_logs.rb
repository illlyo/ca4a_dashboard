class CreateCoachLogs < ActiveRecord::Migration[5.1]
  def change
    create_table :coach_logs do |t|
      t.string :cancelled
      t.date :date_of_visit
      t.string :length_of_visit
      t.string :objectives_of_visit
      t.string :interact_in_these_ways

      t.string :interact_other_explained

      t.integer :interact_teachers
      t.integer :interact_guidance_counselors
      t.integer :interact_college_couselors
      t.integer :interact_assistant_principals
      t.integer :interact_principals
      t.integer :interact_other
      t.string :next_step_notes
      t.string :college_career_readiness_domains
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
      t.string :learning_trajectory_next_meeting
      t.string :supervision_lab_to_bring
      t.boolean :highlight_planning
      t.string :highlight_planning_explained
      t.string :coach_name
      t.string :school_visited
      t.belongs_to :coach, index: true


      t.timestamps
    end
  end
end
