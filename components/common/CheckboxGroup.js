/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export default function CheckboxGroup({ checkOne, checkTwo, checkThree }) {
  return (
    <div className="button-group">
      <div className="button-sec">
        <input type="radio" id="r1" name="r-group" className="cursor-pointer" />
        <label className="button-label cursor-pointer" htmlFor="r1">
          {checkOne}
        </label>
      </div>
      <div className="button-sec">
        <input type="radio" id="r2" name="r-group" className="cursor-pointer" />
        <label className="button-label cursor-pointer" htmlFor="r2">
          {checkTwo}
        </label>
      </div>
      <div className="button-sec">
        <input type="radio" id="r3" name="r-group" className="cursor-pointer" />
        <label className="button-label cursor-pointer" htmlFor="r3">
          {checkThree}
        </label>
      </div>
    </div>
  );
}
