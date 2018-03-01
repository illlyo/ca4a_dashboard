class CreateCa4ASchools < ActiveRecord::Migration[5.1]
  def change
    create_table :ca4_a_schools do |t|
      t.string :DBN
      t.string :location_name
      t.string :cohort
      t.string :coach
      t.string :location_type_description
      t.string :building_code
      t.string :lcgms_name
      t.string :first_name
      t.string :last_name
      t.string :principal_email
      t.string :principal_phone_number
      t.string :address
      t.string :superintendent
      t.string :session
      t.integer :year_attended
      t.string :attendance_flag
      t.string :sixteen_seventeen_allocation
      t.integer :fsf_proj_enroll_2017_2018
      t.string :seventeen_eighteen_allocation
      t.string :note
      t.string :principal_name_LCGMS
      t.string :column1
      t.string :column2
      t.string :dbn2

      t.timestamps
    end
  end
end
