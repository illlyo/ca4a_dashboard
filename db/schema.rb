# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180227205741) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "ca4_a_schools", force: :cascade do |t|
    t.string "DBN"
    t.string "location_code"
    t.string "location_name"
    t.bigint "beds_number"
    t.string "managed_by_name"
    t.string "location_type_description"
    t.string "location_category_description"
    t.string "grades"
    t.string "grades_final"
    t.datetime "open_date"
    t.string "status_description"
    t.string "building_code"
    t.string "address"
    t.string "city"
    t.string "state_code"
    t.integer "zip"
    t.bigint "borough_block_lot"
    t.integer "census_tract"
    t.integer "community_district"
    t.integer "council_district"
    t.string "nta"
    t.string "nta_name"
    t.string "principal_name"
    t.string "principal_title"
    t.string "principal_phone_number"
    t.string "fax_number"
    t.integer "geographical_district_code"
    t.integer "administrative_district_code"
    t.string "administrative_district_location_code"
    t.string "administrative_district_name"
    t.string "superintendent"
    t.string "superintendent_location_code"
    t.string "community_school_sup_name"
    t.string "bfsc_location_code"
    t.string "bfsc_director_name"
    t.string "bfsc_director_title"
    t.string "bfsc_director_phone"
    t.string "hs_network_location_code"
    t.string "hs_network_name"
    t.string "hs_network_superintendent"
    t.string "cohort"
    t.string "coach"
    t.string "principal_email"
    t.string "sixteen_seventeen_allocation"
    t.integer "fsf_proj_enroll_2017_2018"
    t.string "seventeen_eighteen_allocation"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "schools", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
