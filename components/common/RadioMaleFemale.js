/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export default function RadioMaleFemale({ onChangeGender, className }) {
  return (
    <div className={`${className} flex inline-block`} onChange={onChangeGender}>
      <div className="flex">
        <input type="radio" value="MALE" name="gender" id="male" required />
        <label className="radio-label ml-3" htmlFor="male">
          זכר
        </label>
      </div>
      <div className="flex">
        <input type="radio" value="FEMALE" name="gender" id="female" defaultChecked required />
        <label className="radio-label ml-3" htmlFor="female">
          נקבה
        </label>
      </div>
      <div className="flex">
        <input type="radio" value="OTHER" name="gender" id="other" defaultChecked required />
        <label className="radio-label ml-3" htmlFor="other">
          אחר
        </label>
      </div>
    </div>
  );
}
