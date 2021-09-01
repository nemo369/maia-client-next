/* eslint-disable jsx-a11y/click-events-have-key-events */
// ITS OK TO DISABLE SINCE WE HAVE A BUTTON ALSO UNDER
import { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';

const PopSide = ({ children, trigger }) => {
  const [open, setOpen] = useState(false);
  const [isServer, setisServer] = useState(true);
  const closeModal = () => {
    setOpen(false);
  };
  useEffect(() => {
    setisServer(false);
  }, []);
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
      {!isServer && (
        <Popup position="center" modal open={open} className="popside w-full">
          <div className="bg-white  py-7 px-4 lg:h-screen overflow-y-auto h-[70vh]  lg:w-screen lg:max-w-[812px] w-full">
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
      )}
    </>
  );
};
export default PopSide;
