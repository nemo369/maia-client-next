/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export default function ToggleSchoolJobs() {
  return (
    <>
      <div className="switches-container">
        <input type="radio" id="school" name="switchPlan" value="schoolValue" checked="checked" />
        <input type="radio" id="jobs" name="switchPlan" value="jobsValue" />
        <label htmlFor="school">לימודים</label>
        <label htmlFor="jobs">משרות</label>
        <div className="switch-wrapper">
          <div className="switch">
            <div>לימודים</div>
            <div>משרות</div>
          </div>
        </div>
      </div>
    </>
  );
}
