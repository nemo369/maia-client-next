import React from 'react';

export default function RadioMaleFemale({ className, initialValue }) {
  const handleSelectCahnge = ({ value }) => value.value;
  return (
    <div className={`${className} flex`}>
      <div className="flex">
        <input
          type="radio"
          value="m"
          name="gender"
          id="male"
          onChange={(e) => handleSelectCahnge({ value: e.target })}
          required
          defaultChecked={'m' === initialValue}
        />
        <label className="radio-label ml-3" htmlFor="male">
          זכר
        </label>
      </div>
      <div className="flex">
        <input
          type="radio"
          value="f"
          name="gender"
          id="female"
          required
          onChange={(e) => handleSelectCahnge({ value: e.target })}
          defaultChecked={'f' === initialValue}
        />
        <label className="radio-label ml-3" htmlFor="female">
          נקבה
        </label>
      </div>
    </div>
  );
}
