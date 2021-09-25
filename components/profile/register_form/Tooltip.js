import React from 'react';
import Popup from 'reactjs-popup';

const Tooltip = () => (
  <Popup
    trigger={() => (
      <button type="button">
        <div />
      </button>
    )}
    position="left top"
    closeOnDocumentClick
  >
    <span> Popup content </span>
  </Popup>
  //   <Popup
  //     trigger={
  //       <button className="button">
  //         <Question />{' '}
  //       </button>
  //     }
  //     position="left top"
  //     nested
  //   >
  //     <div>
  //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolor nulla animi, natus
  //       velit assumenda deserunt molestias
  //     </div>
  //   </Popup>
);
export default Tooltip;
