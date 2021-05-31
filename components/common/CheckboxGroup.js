import React from 'react';

export default function CheckboxGroup() {
  return (
    <div className="button-group">
      <div className="button-sec">
        <label className="button-label" htmlFor="r1">
          <span className="sr-only">הכל</span>
          <input type="radio" id="r1" name="r-group" />
        </label>
      </div>
      <div className="button-sec">
        <label className="button-label" htmlFor="r2">
          <input type="radio" id="r2" name="r-group" />
          <span className="sr-only">הכי מתאים</span>
        </label>
      </div>
      <div className="button-sec">
        <label className="button-label" htmlFor="r3">
          <input type="radio" id="r3" name="r-group" />
          <span className="sr-only">הכי חדש</span>
        </label>
      </div>
    </div>
  );
}
