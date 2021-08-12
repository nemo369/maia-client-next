import React from 'react';

export default function RadioMaleFemale({ className, value, onChange }) {
  return (
    <div className={`${className} flex`}>
      <label className="flex">
        <input
          type="radio"
          value="m"
          name="gender"
          id="male"
          onChange={onChange}
          checked={'m' === value}
        />
        <span className="radio-label ml-3" htmlFor="male">
          זכר
        </span>
      </label>
      <label className="flex">
        <input
          type="radio"
          value="f"
          name="gender"
          id="female"
          checked={'f' === value}
          onChange={onChange}
        />
        <span className="radio-label ml-3" htmlFor="female">
          נקבה
        </span>
      </label>
    </div>
  );
}
