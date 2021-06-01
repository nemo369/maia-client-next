import React from 'react';
import Popup from 'reactjs-popup';
import Question from '../../svg/Question';

const Tooltip = () => (
  <Popup
    trigger={(open) => (
      <button type="button">
        <Question />
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
