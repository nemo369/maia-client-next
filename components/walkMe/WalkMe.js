import { useState } from 'react';
import Popup from 'reactjs-popup';
import { IS_WALKME } from '../../src/utils/consts';
import { getLs, setLs } from '../../src/utils/localStorge';
import { Case, Switch } from '../common/Switch';
import WMStepOne from './WMStepOne';
import WMStepThree from './WMStepThree';
import WMStepTwo from './WMStepTwo';

const overlayStyle = { background: 'rgba(130,139,149,0.97)' };

const WalkMe = () => {
  const isServer = 'undefined' === typeof window;
  const [isPopUp, setisPopUp] = useState(getLs(IS_WALKME));
  // const [isPopUp, setisPopUp] = useState(true);
  const [step, setStep] = useState(1);

  const [open, setOpen] = useState(!isServer);
  const closeModal = () => {
    setOpen(false);
    setLs(IS_WALKME, false);
    setisPopUp(false);
  };

  const nextStep = () => {
    const next = step + 1;
    setStep(next);
    if (4 <= step) {
      closeModal();
    }
  };

  if (isServer || !isPopUp) {
    return null;
  }
  return (
    <>
      <Popup position="center" modal open={open} overlayStyle={overlayStyle}>
        <div>
          <div>
            <Switch test={step}>
              <Case value={1}>
                <WMStepOne nextStep={nextStep} closeModal={closeModal} />
              </Case>
              <Case value={2}>
                <WMStepTwo nextStep={nextStep} closeModal={closeModal} />
              </Case>
              <Case value={3}>
                <WMStepThree nextStep={nextStep} closeModal={closeModal} />
              </Case>
            </Switch>
            <button id="close-modal-hack" type="button" onClick={closeModal} hidden>
              &times;
            </button>
          </div>
        </div>
      </Popup>
    </>
  );
};
export default WalkMe;
