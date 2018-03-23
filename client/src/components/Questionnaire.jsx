import React from 'react';
import StepZilla from 'react-stepzilla';
import Step1 from './FormQuestions/Step1';
import Step2 from './FormQuestions/Step2';
import Step3 from './FormQuestions/Step3';
import Step4 from './FormQuestions/Step4';
import Step5 from './FormQuestions/Step5';
import Step6 from './FormQuestions/Step6';
import Step7 from './FormQuestions/Step7';
import Step8 from './FormQuestions/Step8';
import Step9 from './FormQuestions/Step9';
import Step10 from './FormQuestions/Step10';
import Step11 from './FormQuestions/Step11';
import Step12 from './FormQuestions/Step12';
import Step13 from './FormQuestions/Step13';
import Step14 from './FormQuestions/Step14';

class Questionnaire extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      cancelled: '',
      date_of_visit: '',
      length_of_visit: '',
      objectives_of_visit: '',
      interact_meeting_with_team: 0,
      interact_observed_practice: 0,
      interact_with_leadership: 0,
      interact_with_team_lead: 0,
      interact_with_pd: 0,
      interact_with_other: 0,
      interact_other_explained: '',
      interact_teachers: 0,
      interact_guidance_counselors: 0,
      interact_college_couselors: 0,
      interact_assistant_principals: 0,
      interact_principals: 0,
      interact_other: 0,
      next_step_notes: '',

      academic_skills: 0,
      academic_personal_behavior: 0,
      academic_programming: 0,
      college_career_access: 0,
      college_career_readiness_domains: '',
      learning_trajectory_discussion: false,
      activity_inquiry_institute: '',
      activity_research: '',
      activity_design: '',
      activity_pdsa: '',
      activity_synthesize: '',
      activity_scale: '',
      forward_work: '',
      goals_met: '',
      rate_learning_trajectory: '',
      rate_learning_trajectory_explained: '',
      learning_trajectory_success_challenge: '',
      in_between_steps: '',
      inquiry_institute: 0,
      research: 0,
      design: 0,
      pdsa: 0,
      synthesize: 0,
      scale: 0,
      learning_trajectory_next_meeting: '',
      supervision_lab_to_bring: '',
      highlight_planning: null,
      highlight_planning_explained: '',
      coach_name: '',
      school_visited: '',
    };

    this.sampleStore = {
      cancelled: '',
      date_of_visit: '',
      length_of_visit: '',
      objectives_of_visit: '',
      interact_meeting_with_team: 0,
      interact_observed_practice: 0,
      interact_with_leadership: 0,
      interact_with_team_lead: 0,
      interact_with_pd: 0,
      interact_with_other: 0,
      interact_other_explained: '   ',
      interact_teachers: 0,
      interact_guidance_counselors: 0,
      interact_college_couselors: 0,
      interact_assistant_principals: 0,
      interact_principals: 0,
      interact_other: 0,
      next_step_notes: '  ',
      academic_skills: 0,
      academic_personal_behavior: 0,
      academic_programming: 0,
      college_career_access: 0,
      college_career_readiness_domains: '',
      learning_trajectory_discussion: false,
      activity_inquiry_institute: '',
      activity_research: '',
      activity_design: '',
      activity_pdsa: '',
      activity_synthesize: '',
      activity_scale: '',
      forward_work: '',
      goals_met: '',
      rate_learning_trajectory: '',
      rate_learning_trajectory_explained: '',
      learning_trajectory_success_challenge: '',
      in_between_steps: '',
      inquiry_institute: 0,
      research: 0,
      design: 0,
      pdsa: 0,
      synthesize: 0,
      scale: 0,
      learning_trajectory_next_meeting: '',
      supervision_lab_to_bring: '',
      highlight_planning: null,
      highlight_planning_explained: '',
      coach_name: '',
      school_visited: '',
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  getStore() {
    return this.sampleStore;
    console.log(this.sampleStore);
  }

  updateStore(update) {
    this.sampleStore = {
      ...this.sampleStore,
      ...update,
    }
    console.log(this.sampleStore)
  }

  render() {
    const steps =
    [
      {name: 'Step1', component: <Step1 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
      {name: 'Step2', component: <Step2 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
      {name: 'Step3', component: <Step3 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
      {name: 'Step4', component: <Step4 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
      {name: 'Step5', component: <Step5 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
      {name: 'Step6', component: <Step6 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
      {name: 'Step7', component: <Step7 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
      {name: 'Step8', component: <Step8 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
      {name: 'Step9', component: <Step9 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
      {name: 'Step10', component: <Step10 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
      {name: 'Step11', component: <Step11 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
      {name: 'Step12', component: <Step12 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
      {name: 'Step13', component: <Step13 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />}
      // {name: 'Step14', component: <Step14 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />}
    ]

    return (
      <div className='example'>
        <div className='step-progress'>
          <StepZilla
            steps={steps}
            preventEnterSubmission={true}
            nextTextOnFinalActionStep={"Save"}
            hocValidationAppliedTo={[]}
            startAtStep={window.sessionStorage.getItem('step') ? parseFloat(window.sessionStorage.getItem('step')) : 0}
            onStepChange={(step) => window.sessionStorage.setItem('step', step)}
           />
        </div>
      </div>
    )
  }
}

export default Questionnaire;
