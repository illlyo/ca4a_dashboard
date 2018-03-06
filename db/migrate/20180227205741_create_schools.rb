class CreateSchools < ActiveRecord::Migration[5.1]
  def change
    create_table :schools do |t|
      t.string :DBN
      t.string :location_code
      t.string :location_name
      t.bigint :beds_number
      t.string :managed_by_name
      t.string :location_type_description
      t.string :location_category_description
      t.string :grades
      t.string :grades_final
      t.datetime :open_date
      t.string :status_description
      t.string :building_code
      t.string :address
      t.string :city
      t.string :state_code
      t.integer :zip
      t.bigint :borough_block_lot
      t.integer :census_tract
      t.integer :community_district
      t.integer :council_district
      t.string :nta
      t.string :nta_name
      t.string :principal_name
      t.string :principal_title
      t.string :principal_phone_number
      t.string :fax_number
      t.integer :geographical_district_code
      t.integer :administrative_district_code
      t.string :administrative_district_location_code
      t.string :administrative_district_name
      t.string :superintendent
      t.string :superintendent_location_code
      t.string :community_school_sup_name
      t.string :bfsc_location_code
      t.string :bfsc_director_name
      t.string :bfsc_director_title
      t.string :bfsc_director_phone
      t.string :hs_network_location_code
      t.string :hs_network_name
      t.string :hs_network_superintendent
      t.string :cohort
      t.string :coach
      t.string :principal_email
      t.string :allocation_2016_17
      t.string :session
      t.string :attendance_flag
      t.integer :fsf_proj_enroll_2017_2018
      t.string :allocation_2017_18
      t.timestamps
    end
  end
end
