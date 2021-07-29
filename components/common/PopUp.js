/* eslint-disable jsx-a11y/click-events-have-key-events */
// ITS OK TO DISABLE SINCE WE HAVE A BUTTON ALSO UNDER
import { useState } from 'react';
import Popup from 'reactjs-popup';

const PopUp = ({ children, trigger, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
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
      {trigger && (
        <div onClick={openModal} className={trigger.props.className} role="button" tabIndex={0}>
          {trigger}
        </div>
      )}
      <Popup position="center" modal open={open}>
        <div>
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
          <div className="bg-white w-[52px] h-[52px] rounded-full absolute bottom-[-20px] right-[-80px]" />
          <div className="bg-white opacity-50 w-[22px] h-[22px] rounded-full absolute top-[490px] right-[-35px]" />
          <div className="bg-white opacity-80 w-[10px] h-[10px] rounded-full absolute top-[490px] right-[25px]" />
        </div>
      </Popup>
    </>
  );
};
export default PopUp;
