import React from 'react';
import StepZilla from 'react-stepzilla';
import Step1 from './Intervisitation/Step1';
import Step2 from './Intervisitation/Step2';
import Step3 from './Intervisitation/Step3';

class IntervisitationOuestionnaire extends React.Component{
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
      next_step_notes: ''
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
      next_step_notes: '  '
    };
  }

  componentDidMount(){
  }


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
      {name: 'Step3', component: <Step3 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />}
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

export default IntervisitationOuestionnaire;
