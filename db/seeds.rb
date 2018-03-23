# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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

coaches = ActiveSupport::JSON.decode(File.read(Rails.root.join('lib', 'seeds', 'coaches.json')))
coaches.each do |key|
    Coach.create!(
      username: key['login'],
      password: key['Password'],
      email: key['Email'],
      name: key['Name']
    )
end

previouslogs = ActiveSupport::JSON.decode(File.read(Rails.root.join('lib', 'seeds', 'recentcoachlog.json')))
previouslogs.each do |key|
  CoachLog.create!(
    cancelled: key['Was your meeting cancelled today?'],
    date_of_visit: key['Date of visit'],
    length_of_visit: key['How long was your visit? (ex. 1 hour 30 mins)'],
    objectives_of_visit: key["What were the objectives of today's visit?"],
    interact_meeting_with_team: key["Facilitated Meeting With Team"],
    interact_observed_practice: key["Observed Practice"],
    interact_with_leadership: key["Checked In With Leadership"],
    interact_with_team_lead: key["Checked In With Team Lead"],
    interact_with_pd: key["Facilitated A PD"],
    interact_with_other: key["Other"],
    interact_in_these_ways: key["During today's visit I interacted with my school in the following ways (select all that apply)"],
    interact_teachers: key["Thinking about today's visit, how many of each role did you interact with? [Teachers]"],
    interact_guidance_counselors: key["Thinking about today's visit, how many of each role did you interact with? [Guidance Counselors]"],
    interact_college_couselors: key["Thinking about today's visit, how many of each role did you interact with? [College Counselors]"],
    interact_assistant_principals: key["Thinking about today's visit, how many of each role did you interact with? [Assistant Principals]"],
    interact_principals: key["Thinking about today's visit, how many of each role did you interact with? [Principals]"],
    interact_other: key["Thinking about today's visit, how many of each role did you interact with? [Other]"],
    next_step_notes: key['(For your notes) - Feel free to include any next steps or notes from this visit'],
    academic_skills: key["Academic Skills"],
    academic_personal_behavior: key["Academic and Personal Behaviors"],
    academic_programming: key["Academic Programming"],
    college_career_access: key["College and Career Access"],
    college_career_readiness: key["College and Career Readiness"],
    college_career_readiness_domains: key['In general, under which College and Career Readiness Domain(s) did todayÕs visit fall?'],
    learning_trajectory_discussion: key['Did this school discuss their Learning Trajectory in this meeting?'],
    activity_inquiry_institute: key['To what extent has this school engaged in the following activities?  [Inquiry Institute - (Develop a learning trajectory and change idea)]'],
    activity_research: key['To what extent has this school engaged in the following activities?  [Research - (Gather internal and external research)]'],
    activity_design: key['To what extent has this school engaged in the following activities?  [Design - (Design something small to try)]'],
    activity_pdsa: key['To what extent has this school engaged in the following activities?  [PDSA - (Engage in PDSA cycles)]'],
    activity_synthesize: key['To what extent has this school engaged in the following activities?  [Synthesize - (Document and synthesize team learning)]'],
    activity_scale: key['To what extent has this school engaged in the following activities?  [Scale - (Share innovation with wider group)]'],
    forward_work: key["What particular tools, protocols, readings, data etc. did you use to help move this team's work forward?"],
    goals_met: key['Were the goal(s) for todayÕs visit met?'],
    rate_learning_trajectory: key['Rate this schoolÕs overall progress on their Learning Trajectory since your last visit.'],
    rate_learning_trajectory_explained: key['Explain your answer to the progress question above.'],
    learning_trajectory_success_challenge: key['What successes/challenges are you experiencing in moving this team through their Learning Trajectory?'],
    in_between_steps: key["What are the \"in-between\" steps you can take before your next meeting to move this team's work forward?"],
    inquiry_institute: key["Inquiry Institute"],
    research: key["Research"],
    design: key["Design"],
    pdsa: key["PDSA"],
    synthesize: key["Synthesize"],
    scale: key["Scale"],
    learning_trajectory_next_meeting: key["Where do you see the team going in their Learning Trajectory in your next meeting?"],
    supervision_lab_to_bring: key["What's something you would like to bring to supervision or lab?"],
    highlight_planning: key['Would you like to highlight any work this school is doing around the College and Career Planning Calendar this month?'],
    highlight_planning_explained: key["What would you like to highlight related to the College and Career Planning Calendar and this school's work?"],
    coach_id: key["coach"],
    coach_name: key["Select your name"],
    school_visited: key["School Visited"]
  )
end
