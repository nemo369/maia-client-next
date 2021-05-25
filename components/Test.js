import React from 'react';
import Button from './common/Button';

export default function Test() {
  return (
    <div>
      <Button type="main" name="ראשי" className="h-50 w-250" />
      <Button type="main" name="ראשי מושבת" className="h-50 w-250" disabled />
      <Button type="secondary" name="משני" className="h-50 w-250" />
      <Button type="secondary" name="משני מושבת" disabled className="h-50 w-250" />
      <Button type="gradient" name="אחר" className="h-16 w-40" />
      <Button type="gradient" name="אחר מושבת" disabled className="h-16 w-40" />
    </div>
  );
}
