import React from 'react';
import Button from './common/Button';
import ToggleSchoolJobs from './common/ToggleSchoolJobs';
import CheckboxGroup from './common/CheckboxGroup';
import Inputs from './common/Inputs';
import NumInputs from './common/NumInputs';
import Toggle from './common/Toggle';

export default function Test() {
  return (
    <div>
      <div className="h-3 w-3 my-9">====</div>
      <h1>Buttons</h1>
      <div className="h-3 w-3 my-9">====</div>
      <Button type="main" name="ראשי" />
      <div className="h-3 w-3 my-9">====</div>
      <Button type="main" name="ראשי מושבת" disabled />
      <div className="h-3 w-3 my-9">====</div>
      <Button type="secondary" name="משני" />
      <div className="h-3 w-3 my-9">====</div>
      <Button type="secondary" name="משני מושבת" disabled />
      <div className="h-3 w-3 my-9">====</div>
      <Button type="gradient" name="אחר" className="h-16" />
      <div className="h-3 w-3 my-9">====</div>
      <Button type="gradient" name="אחר מושבת" disabled className="h-16" />
      <div className="h-3 w-3 my-9">====</div>
      <h1>Toggle</h1>
      <div className="h-3 w-3 my-9">====</div>
      <ToggleSchoolJobs />
      <div className="h-3 w-3 my-9">====</div>
      <Toggle />
      <div className="h-3 w-3 my-9">====</div>
      <h1>Checkbox</h1>
      <div className="h-3 w-3 my-9">====</div>
      <CheckboxGroup />
      <div className="h-3 w-3 my-9">====</div>
      <h1>Inputs</h1>
      <div className="h-3 w-3 my-9">====</div>
      <div className="bg-white-active">
        <Inputs placeholder="רגיל הרשמה" className="h-[50px] w-300" type="main" />
        <div className="h-3 w-3 my-9">====</div>
        <Inputs placeholder="משני הרשמה התחברות" className="h-[50px] w-300" type="secondary" />
        <div className="h-3 w-3 my-9">====</div>
        <Inputs placeholder="שגיאה" className="h-[50px] w-300" type="error" />
      </div>
      <div className="h-3 w-3 my-9">====</div>
      <h1>NumInputs</h1>
      <div className="h-3 w-3 my-9">====</div>
      <NumInputs type="main" />
      <div className="h-3 w-3 my-9">====</div>
      <NumInputs type="success" />
      <div className="h-3 w-3 my-9">====</div>
      <NumInputs type="error" />
    </div>
  );
}
