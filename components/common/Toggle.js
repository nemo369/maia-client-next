import React from 'react';

export default function Toggle({ isChecked, onChange }) {
  return (
    <input className="switch-toggle" type="checkbox" checked={isChecked} onChange={onChange} />
  );
}
