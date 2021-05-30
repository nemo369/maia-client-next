import React from 'react';

export default function ToggleSchoolJobs() {
  return (
    <>
      <div className="switches-container">
        <label htmlFor="school">
          <span className="sr-only">לימודים</span>
          <input type="radio" id="school" name="switchPlan" value="schoolValue" checked="checked" />
        </label>
        <label htmlFor="jobs">
          <span className="sr-only">משרות</span>
          <input type="radio" id="jobs" name="switchPlan" value="jobsValue" />
        </label>
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
