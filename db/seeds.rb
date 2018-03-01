# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
data = ActiveSupport::JSON.decode(File.read(Rails.root.join('lib', 'seeds', 'MasterlistData.json')))
data = data[0]
data.each do |key, value|
  Ca4ASchool.create!(
    DBN: value[0],
    location_name: value[1],
    cohort: value[2],
    coach: value[3],
    location_type_description: value[4],
    building_code: value[5],
    lcgms_name: value[6],
    first_name: value[7],
    last_name: value[8],
    principal_email: value[9],
    principal_phone_number: value[10],
    address: value[11],
    superintendent: value[12],
    session: value[13],
    year_attended: value[14],
    attendance_flag: value[15],
    sixteen_seventeen_allocation: value[16],
    fsf_proj_enroll_2017_2018: value[17],
    seventeen_eighteen_allocation: value[18],
    note: value[19],
    principal_name_LCGMS: value[20],
    column1: value[21],
    column2: value[22],
    dbn2: value[23]
  )
end
