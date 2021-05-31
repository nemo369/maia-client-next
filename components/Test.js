import React from 'react';
import Button from './common/Button';
import ToggleSchoolJobs from './common/ToggleSchoolJobs';
import CheckboxGroup from './common/CheckboxGroup';
import RadioMaleFemale from './common/RadioMaleFemale';
import Check from './common/Check';
import Inputs from './common/Inputs';
import NumInputs from './common/NumInputs';
import Toggle from './common/Toggle';

export default function Test() {
  return (
    <div>
      <h1>Buttons</h1>
      <Button type="button" status="main" name="ראשי" className="h-[50px] w-[250px]" />
      <Button
        type="button"
        status="main"
        name="ראשי מושבת"
        className="h-[50px] w-[250px]"
        disabled
      />
      <Button type="button" status="secondary" name="משני" className="h-[50px] w-[250px]" />
      <Button
        type="button"
        status="secondary"
        name="משני מושבת"
        disabled
        className="h-[50px] w-[250px]"
      />
      <Button type="button" status="gradient" name="אחר" className="h-16 w-40" />
      <Button type="button" status="gradient" name="אחר מושבת" disabled className="h-16 w-40" />
      <div>------------------------</div>
      <h1>Toggle</h1>
      <div className="h-3 w-3 my-3">====</div>
      <ToggleSchoolJobs />
      <div className="h-3 w-3 my-3">====</div>
      <Toggle />
      <div className="h-3 w-3 my-3">====</div>
      <div>------------------------</div>
      <h1>Checkbox Group</h1>
      <CheckboxGroup />
      <div>------------------------</div>
      <h1>Check</h1>
      <Check className="m-3" />
      <div>------------------------</div>
      <h1>Inputs</h1>
      <div className="bg-white-active">
        <Inputs placeholder="רגיל הרשמה" className="h-[50px] w-[300px]" status="main" />
        <div h-3 w-3 mt-3>
          ====
        </div>
        <Inputs
          placeholder="משני הרשמה התחברות"
          className="h-[50px] w-[300px]"
          status="secondary"
        />
        <div h-3 w-3 mt-3>
          ====
        </div>
        <Inputs placeholder="שגיאה" className="h-[50px] w-[300px]" status="error" />
      </div>
      <div className="h-3 w-3 my-3">====</div>
      <div>------------------------</div>
      <h1>NumInputs</h1>
      <NumInputs status="main" />
      <div h-3 w-3 mt-3>
        ====
      </div>
      <NumInputs status="success" />
      <div h-3 w-3 mt-3>
        ====
      </div>
      <NumInputs status="error" />
      <div>------------------------</div>
      <h1>RadioMaleFemale</h1>
      <RadioMaleFemale />
      <div>------------------------</div>
    </div>
  );
}
