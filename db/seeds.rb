# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

billy = Coach.create!(username: 'billy', password: 'billy', email: 'billy@test.com', name: 'Billy')

allschools = ActiveSupport::JSON.decode(File.read(Rails.root.join('lib', 'seeds', 'nycschools.json')))
allschools.each do |key|
  School.create!(
    DBN: key['DBN'],
    location_code: key['Location Code'],
    location_name: key['Location Name'],
    beds_number: key['BEDS Number'],
    managed_by_name: key['Managed By Name'],
    location_type_description: key['Location Type Description'],
    location_category_description: key['Location Category Description'],
    grades: key['Grades'],
    grades_final: key['Grades Final'],
    open_date: key['Open Date'],
    status_description: key['Status Description'],
    building_code: key['Building Code'],
    address: key['Primary Address'],
    city: key['City'],
    state_code: key['State Code'],
    zip: key['Zip'],
    borough_block_lot: key['Borough Block Lot'],
    census_tract: key['Census Tract'],
    community_district: key['Community District'],
    council_district: key['Council District'],
    nta: key['NTA'],
    nta_name: key['NTA_Name'],
    principal_name: key['Principal Name'],
    principal_title: key['Principal Title'],
    principal_phone_number: key['Principal Phone Number'],
    fax_number: key['Fax Number'],
    geographical_district_code: key['Geographical District Code'],
    administrative_district_code: key['Administrative District Code'],
    administrative_district_location_code: key['Administrative District Location Code'],
    administrative_district_name: key['Administrative District Name'],
    superintendent: key['Superintendent'],
    superintendent_location_code: key['Superintendent Location Code'],
    community_school_sup_name: key['Community School Sup Name'],
    bfsc_location_code: key['BFSC Location Code'],
    bfsc_director_name: key['BFSC Director Name'],
    bfsc_director_title: key['BFSC Director Title'],
    bfsc_director_phone: key['BFSC Director Phone'],
    hs_network_location_code: key['HighSchool Network Location Code'],
    hs_network_name: key['HighSchool Network Name'],
    hs_network_superintendent: key['HighSchool Network Superintendent']
  )
end
