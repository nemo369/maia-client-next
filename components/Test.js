import React from 'react';
import Button from './common/Button';
import Tabs from './common/Tabs';

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
      <h1>Tabs</h1>
      <div>------------------------</div>
      <Tabs firstTab="הצג תוצאות" secondTab="לשלב הבא" type="two" />
      <Tabs firstTab="תוצאות דוח מסכם" secondTab="לשלב הבא" type="one" />
    </div>
  );
}
