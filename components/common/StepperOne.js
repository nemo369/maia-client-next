import React from 'react';

export default function StepperOne({ step, className }) {
  let one = '';
  let two = '';
  let three = '';
  let dot = '';
  let dis = '';
  switch (step) {
    case 'one':
      one += 'one bg-orange';
      two += 'one bg-white';
      three += 'one bg-white';
      dot += 'bg-[#DFDFDF]';
      dis += 'dis_first';
      break;
    case 'two':
      one += 'bg-orange';
      two += 'bg-orange';
      three += 'bg-white';
      dis += 'dis_second';
      break;
    case 'three':
      one += 'bg-orange';
      two += 'bg-orange';
      three += 'bg-orange';
      dot += 'bg-white';
      break;
    default:
      break;
  }
  return (
    <div className={`stepper-one Stepper ${className} ${dis}`}>
      <div className="Stepper__step">
        <div className="Stepper__indicator">
          {'one' === step ? (
            <span className={`${one} Stepper__info shadow-active bottom-[10px]`}>1</span>
          ) : (
            <span className={`Stepper__info ${one}`}>
              <span className="Stepper__empty bg-[#ffffff]" />
            </span>
          )}
        </div>
        <div className={`Stepper__label ${'one' === step && 'font-bold'}`}>
          <span>
            מה עשיתי
            <br />
            עד כה
          </span>
        </div>
        <div className="Stepper__panel">
          <div className="Content" />
        </div>
      </div>
      <div className="Stepper__step">
        <div className="Stepper__indicator">
          {'two' === step ? (
            <span className={`${two} Stepper__info shadow-active bottom-[10px]`}>2</span>
          ) : (
            <span className={`Stepper__info ${two}`}>
              <span className={`Stepper__empty ${dot}`} />
            </span>
          )}
        </div>
        <div className={`Stepper__label ${'two' === step && 'font-bold'}`}>
          <span>
            מה מעניין
            <br />
            אותי
          </span>
        </div>
        <div className="Stepper__panel">
          <div className="Content" />
        </div>
      </div>
      <div className="Stepper__step">
        <div className="Stepper__indicator">
          {'three' === step ? (
            <span className={`${three} Stepper__info shadow-active bottom-[10px]`}>3</span>
          ) : (
            <span className={`Stepper__info ${three}`}>
              <span className="Stepper__empty bg-[#DFDFDF]" />
            </span>
          )}
        </div>
        <div className={`Stepper__label ${'three' === step && 'font-bold'}`}>
          <span>
            היכולות שלי +
            <br />
            מה מתאים לי
          </span>
        </div>
        <div className="Stepper__panel">
          <div className="Content" />
        </div>
      </div>
    </div>
  );
}
