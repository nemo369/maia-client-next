/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export default function RadioMaleFemale({ onChangeGender }) {
  return (
    <div className="flex" onChange={onChangeGender}>
      <div className="flex">
        <input type="radio" value="MALE" name="gender" id="male" />
        <label className="radio-label" htmlFor="male">
          זכר
        </label>
      </div>
      <div className="flex">
        <input type="radio" value="FEMALE" name="gender" id="female" />
        <label className="radio-label" htmlFor="female">
          נקבה
        </label>
      </div>
    </div>
  );
}
