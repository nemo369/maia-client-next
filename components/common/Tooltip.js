import React from 'react';
import Popup from 'reactjs-popup';

export default function Tooltip({ trigger, children, position }) {
  return (
    <>
      <Popup
        trigger={trigger}
        position={position || 'bottom left'}
        on={['hover', 'focus']}
        arrow={'center center' !== position}
      >
        <div className="text-[14px] text-gray-mid border-[1px] border-[rgba(151,151,151,0.11)] rounded-[2px] bg-white shadow-sm p-[10px]">
          {children}
        </div>
      </Popup>
    </>
  );
}
