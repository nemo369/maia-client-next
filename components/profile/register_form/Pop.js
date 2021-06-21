/* eslint-disable react/no-danger */
import { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';

const Pop = ({ termsText }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const wrapper = document.querySelector('#__next');
    const blur = open ? 2 : 0;
    wrapper.style.filter = `blur(${blur}px)`;
  }, [open]);
  return (
    <Popup
      onClose={() => {
        setOpen(!open);
      }}
      trigger={
        <button type="button" className="button">
          <u
            onKeyDown={() => {
              setOpen(!open);
            }}
            onClick={() => {
              setOpen(!open);
            }}
            role="button"
            tabIndex={0}
          >
            תנאי התקנון
          </u>
        </button>
      }
      modal
      nested
    >
      {(close) => (
        <div className="modal bg-white text-xl leading-5 text-gray-active overflow-hidden rounded-lg    max-h-96">
          <button
            type="button"
            className="close"
            onClick={() => {
              close();
            }}
          >
            x
          </button>
          <div className="header font-black text-3xl leading-8 text-gray-mid text-center my-4">
            תנאי תקנון:
          </div>
          <div className="uu w-[98%] max-w-5xl max-h-72 overflow-auto scrollbar-thin  scrollbar-thumb-gray-light ">
            <div className="content px-8" dangerouslySetInnerHTML={{ __html: termsText }} />
          </div>
          <div className="actions">
            <button
              type="button"
              className="button"
              onClick={() => {
                close();
              }}
            >
              סגור
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};
export default Pop;
