import React from 'react';
import Button from './common/Button';
import Toggle from './common/Toggle';
import CheckboxGroup from './common/CheckboxGroup';
import Inputs from './common/Inputs';

export default function Test() {
  return (
    <div>
      <div>------------------------</div>
      <h1>Buttons</h1>
      <div>------------------------</div>
      <Button type="main" name="ראשי" className="h-50 w-250" />
      <Button type="main" name="ראשי מושבת" className="h-50 w-250" disabled />
      <Button type="secondary" name="משני" className="h-50 w-250" />
      <Button type="secondary" name="משני מושבת" disabled className="h-50 w-250" />
      <Button type="gradient" name="אחר" className="h-16 w-40" />
      <Button type="gradient" name="אחר מושבת" disabled className="h-16 w-40" />
      <div>------------------------</div>
      <h1>Toggle</h1>
      <div>------------------------</div>
      <Toggle />
      <div>------------------------</div>
      <h1>Checkbox</h1>
      <div>------------------------</div>
      <CheckboxGroup />
      <div>------------------------</div>
      <h1>Inputs</h1>
      <div>------------------------</div>
      <div className="bg-white-active">
        <Inputs placeholder="רגיל הרשמה" className="h-50 w-300" type="main" />
        <div h-3 w-3 mt-3>
          ====
        </div>
        <Inputs placeholder="משני הרשמה התחברות" className="h-50 w-300" type="secondary" />
        <div h-3 w-3 mt-3>
          ====
        </div>
        <Inputs placeholder="שגיאה" className="h-50 w-300" type="error" />
      </div>
    </div>
  );
}
