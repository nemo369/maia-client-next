import React from 'react';

export default function stepperOne({ step }) {
  let one = '';
  let two = '';
  let three = '';
  let dot = '';
  switch (step) {
    case 'one':
      one += 'one bg-orange';
      two += 'one bg-white';
      three += 'one bg-white';
      dot += 'bg-[#DFDFDF]';
      break;
    case 'two':
      one += 'bg-orange';
      two += 'bg-orange';
      three += 'bg-white';
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
    <div>
      <div className="stepper__step">
        <div className="stepper__indicator">
          {'one' === step ? (
            <span className={`${one} stepper__info shadow-active bottom-[10px]`}>1</span>
          ) : (
            <span className={`stepper__info ${one}`}>
              <span className="stepper__empty bg-[#ffffff]" />
            </span>
          )}
        </div>
        <div className={`stepper__label ${'one' === step && 'font-bold'}`}>
          <span>
            מה עשיתי
            <br />
            עד כה
          </span>
        </div>
      </div>
      <div className="stepper__step">
        <div className="stepper__indicator">
          {'two' === step ? (
            <span className={`${two} stepper__info shadow-active bottom-[10px]`}>2</span>
          ) : (
            <span className={`stepper__info ${two}`}>
              <span className={`stepper__empty ${dot}`} />
            </span>
          )}
        </div>
        <div className={`stepper__label ${'two' === step && 'font-bold'}`}>
          <span>
            מה מעניין
            <br />
            אותי
          </span>
        </div>
      </div>
      <div className="stepper__step">
        <div className="stepper__indicator">
          {'three' === step ? (
            <span className={`${three} stepper__info shadow-active bottom-[10px]`}>3</span>
          ) : (
            <span className={`stepper__info ${three}`}>
              <span className="stepper__empty bg-[#DFDFDF]" />
            </span>
          )}
        </div>
        <div className={`stepper__label ${'three' === step && 'font-bold'}`}>
          <span>
            היכולות שלי +
            <br />
            מה מתאים לי
          </span>
        </div>
      </div>
    </div>
  );
}
