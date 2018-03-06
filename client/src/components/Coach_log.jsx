import React from 'react';

class CoachLog extends React.Component{
  render(){
    return(
      <form>
        <h1>Coach's Log:</h1>
          <label>
          Select your name
          <input type="text" />
          </label>
          <label>
          Date of visit
          <input type="date" />
          </label>
          <label>
          Time visit began
          <input type="text" />
          </label>
          <label>
          Time visit ended
          <input type="text" />
          </label>
          <label>
          Coach *insert name here*, select the school you visited
          <input type="text" />
          </label>
          <h1>
          1st Activity
          </h1>
          <label>
          Briefly describe what happened in activity #1.
          <input type="text" />
          </label>
          <label>
          How much time was spent on activity #1?
          <input type="text" />
          </label>
          <label>
          Who participated in activity #1?  (Other Than You)
          <input type="text" />
          </label>
          <label>
          How many of each role participated in this activity #1? [Teachers]
          <input type="text" />
          </label>
          <label>
          How many of each role participated in this activity #1? [Guidance Counselors]
          <input type="text" />
          </label>
          <label>
          How many of each role participated in this activity #1? [College Counselors]
          <input type="text" />
          </label>
          <label>
          How many of each role participated in this activity #1? [Assistant Principals]
          <input type="text" />
          </label>
          <label>
          How many of each role participated in this activity #1? [Principals]
          <input type="text" />
          </label>
          <label>
          How many of each role participated in this activity #1? [Other]
          <input type="text" />
          </label>
          <label>
          Do you have another activity to document other than Activity #1?
          <input type="text" />
          </label>
          <h1>
          2nd Activity
          </h1>
          <label>
          Briefly describe what happened in activity #2.
          <input type="text" />
          </label>
          <label>
          How much time was spent on activity #2?
          <input type="text" />
          </label>
          <label>
          Who participated in activity #2?  (Other Than You)
          <input type="text" />
          </label>
          <label>
          How many of each role participated in this activity #2? [Teachers]
          <input type="text" />
          </label>
          <label>
          How many of each role participated in this activity #2? [Guidance Counselors]
          <input type="text" />
          </label>
          <label>
          How many of each role participated in this activity #2? [College Counselors]
          <input type="text" />
          </label>
          <label>
          How many of each role participated in this activity #2? [Assistant Principals]
          <input type="text" />
          </label>
          <label>
          How many of each role participated in this activity #2? [Principals]
          <input type="text" />
          </label>
          <label>
          How many of each role participated in this activity #2? [Other]
          <input type="text" />
          </label>
          <h1>
          3rd Activity
          </h1>
          <label>
          Briefly describe what happened in activity #3.
          <input type="text" />
          </label>
          <label>
          How much time was spent on activity #3?
          <input type="text" />
          </label>
          <label>
          Who participated in activity #3?  (Other Than You)
          <input type="text" />
          </label>
          <label>
          How many of each role participated in this activity #3? [Teachers]
          <input type="text" />
          </label>
          <label>
          How many of each role participated in this activity #3? [Guidance Counselors]
          <input type="text" />
          </label>
          <label>
          How many of each role participated in this activity #3? [College Counselors]
          <input type="text" />
          </label>
          <label>
          How many of each role participated in this activity #3? [Assistant Principals]
          <input type="text" />
          </label>
          <label>
          How many of each role participated in this activity #3? [Principals]
          <input type="text" />
          </label>
          <label>
          How many of each role participated in this activity #3? [Other]
          <input type="text" />
          </label>
          <label>
          Do you have another activity to document other than Activity #3?
          <input type="text" />
          </label>
          <label>
          In general, under which knowledge domain did today’s visit fall?
          <input type="text" />
          </label>
          <label>
          In general, which action phase would you say the school is in?
          <input type="text" />
          </label>
          <label>
          What were the goals of today’s visit?	Were the goal(s) for today’s visit met?
          <input type="text" />
          </label>
          <label>
          Please explain why you chose N/A related to today's goals.
          <input type="text" />
          </label>
          <label>
          Today’s visit included a review of student or school data?
          <input type="text" />
          </label>
          <label>
          If yes, what data was examined?
          <input type="text" />
          </label>
          <label>
          How much time did you take to plan for this meeting?
          <input type="text" />
          </label>
          <label>
          How prepared did you feel for today’s visit?  (SU)
          <input type="text" />
          </label>
          <label>
          What's one thing that would have made you feel more prepared?
          <input type="text" />
          </label>
          <label>
          What did you do to prepare for this meeting?
          <input type="text" />
          </label>
          <label>
          Rate this school’s overall progress on their action plan since your last visit.
          <input type="text" />
          </label>
          <label>
          Explain why you choose N/A above
          <input type="text" />
          </label>
          <label>
          Explain your answer to the progress question above.
          <input type="text" />
          </label>
          <label>
          What are the most important next steps to support this school to move the work forward?
          <input type="text" />
          </label>
          <label>
          What were the key developments from today's meeting?
          <input type="text" />
          </label>
          <label>
          When is the next meeting date for this school (if known)?
          <input type="text" />
          </label>
          <label>
          What's something you would like to bring to supervision or lab?
          <input type="text" />
          </label>
          <label>
          How long did it take you to fill out the form?
          <input type="text" />
          </label>
          <label>
          What suggestions or feedback do you have for improving this Coach log?
          <input type="text" />
          </label>
          <label>
          Did someone visit you this week?
          <input type="text" />
          </label>
          <label>
          What were some of your key takeaways from the visit?
          <input type="text" />
          </label>
          <label>
          Please document one actionable next step or learning from the visit.
          <input type="text" />
          </label>
          <label>
          Coach's Email
          <input type="text" />
          <button type="submit">Submit</button>
          </label>
      </form>
    )
  }
}

export default CoachLog;
