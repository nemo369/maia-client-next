/* eslint-disable jsx-a11y/click-events-have-key-events */
// ITS OK TO DISABLE SINCE WE HAVE A BUTTON ALSO UNDER
import { useState } from 'react';
import Popup from 'reactjs-popup';

const PopUp = ({ children, trigger }) => {
  const [open, setOpen] = useState(false);
  const closeModal = () => {
    setOpen(false);
  };
  const openModal = () => {
    if (open) {
      setOpen(false);
      // THIS HACK BECUSE OF ESC CLICK BUG
      setTimeout(() => {
        setOpen(true);
      }, 0);
      return;
    }
    setOpen(true);
  };
  return (
    <>
      <div onClick={openModal} className={trigger.props.className} role="button" tabIndex={0}>
        {trigger}
      </div>
      <Popup position="center" modal open={open}>
        <div className="bg-white rounded-2xl py-7 px-4 h-[460px] overflow-y-auto">
          {children}
          <button
            id="close-modal-hack"
            type="button"
            onClick={closeModal}
            hidden
            className="hidden"
          >
            &times;
          </button>
        </div>
      </Popup>
    </>
  );
};
export default PopUp;
