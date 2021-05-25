import React from 'react';
import Button from './common/Button';

export default function Test() {
  return (
    <div>
      <Button style="main" name="ראשי" className="h-50 w-250" />
      <Button style="main" name="ראשי מושבת" className="h-50 w-250" disabled />
      <Button style="secondary" name="משני" className="h-50 w-250" />
      <Button style="secondary" name="משני מושבת" disabled className="h-50 w-250" />
      <Button style="gradient" name="אחר" className="h-16 w-40" />
      <Button style="gradient" name="אחר מושבת" disabled className="h-16 w-40" />
    </div>
  );
}
