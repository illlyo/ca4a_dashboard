class CreateIntervisitationLogs < ActiveRecord::Migration[5.1]
  def change
    create_table :intervisitation_logs do |t|
      t.date :date_of_visit
      t.string :visit_coach
      t.string :school_visited
      t.string :feedback_instructed_from_coach
      t.string :hoping_to_learn
      t.string :areas_of_strength
      t.string :areas_of_growth
      t.string :thinking_about
      t.string :plan_to_try
      t.string :share_with_team
      t.belongs_to :coach, index: true

      t.timestamps
    end
  end
end
