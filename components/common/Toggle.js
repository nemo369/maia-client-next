import React from 'react';

export default function Toggle() {
  return (
    <>
      <div className="switches-container">
        <input
          type="radio"
          id="switchMonthly"
          name="switchPlan"
          value="Monthly"
          checked="checked"
        />
        <input type="radio" id="switchYearly" name="switchPlan" value="Yearly" />
        <label htmlFor="switchMonthly">לימודים</label>
        <label htmlFor="switchYearly">משרות</label>
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
