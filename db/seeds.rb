# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'csv'

csv_text = File.read(Rails.root.join('lib', 'seeds', 'MasterlistData.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = ca4_a_school.new
  t.dbn = row['DBN']
  t.location_name = row['Location Name']
  t.cohort = row['Cohort']
  t.coach = row['CA4A Coach']
  t.location_type_description = row['Location Type Description']
  t.building_code = row['Building Code']
  t.lcgms_name = row['LCGMS Name']
  t.first_name = row['First Name']
  t.last_name = row['Last Name']
  t.principal_email = row['Principal Email']
  t.principal_phone_number = row['Principal Phone Number']
  t.address = row['Address']
  t.superintendent = row['Superintendent']
  t.session = row['Session']
  t.year_attended = row['Year Attended']
  t.attendance_flag = row['Attendance Flag']
  t.sixteen_seventeen_allocation = row[' 2016-17 Allocation ']
  t.fsf_proj_enroll_2017_2018 = row['FSF Proj Enroll 2017-18']
  t.seventeen_eighteen_allocation = row['2017-18 Allocation']
  t.note = row['Note']
  t.principal_name_LCGMS = row['Principal Name (LCGMS)']
  t.column1 = row['Column1']
  t.column2 = row['Column2']
  t.dbn2 = row['DBN 2']
  t.save
  puts "#{t.location_name} saved"
end

puts "There are now #{ca4_a_school.count} rows in the table"
