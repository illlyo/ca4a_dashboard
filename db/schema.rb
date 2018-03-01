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
    t.string "location_name"
    t.string "cohort"
    t.string "coach"
    t.string "location_type_description"
    t.string "building_code"
    t.string "lcgms_name"
    t.string "first_name"
    t.string "last_name"
    t.string "principal_email"
    t.string "principal_phone_number"
    t.string "address"
    t.string "superintendent"
    t.string "session"
    t.integer "year_attended"
    t.string "attendance_flag"
    t.string "sixteen_seventeen_allocation"
    t.integer "fsf_proj_enroll_2017_2018"
    t.string "seventeen_eighteen_allocation"
    t.string "note"
    t.string "principal_name_LCGMS"
    t.string "column1"
    t.string "column2"
    t.string "dbn2"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "schools", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
