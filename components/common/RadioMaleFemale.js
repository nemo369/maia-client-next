import React from 'react';

export default function RadioMaleFemale({ className, value, onChange }) {
  return (
    <div className={`${className} flex`}>
      <div className="flex">
        <input
          type="radio"
          value={value}
          name="gender"
          id="male"
          onChange={onChange}
          checked={'m' === value}
        />
        <label className="radio-label ml-3" htmlFor="male">
          זכר
        </label>
      </div>
      <div className="flex">
        <input
          type="radio"
          value={value}
          name="gender"
          id="female"
          checked={'f' === value}
          onChange={onChange}
        />
        <label className="radio-label ml-3" htmlFor="female">
          נקבה
        </label>
      </div>
    </div>
  );
}
