import React from 'react';

const WalkMeStepper = ({ step }) => {
  let one = '';
  let two = '';
  let three = '';
  let dot = '';
  switch (step) {
    case 1:
      one += 'one bg-orange';
      two += 'one bg-white';
      three += 'one bg-white';
      dot += 'bg-[#DFDFDF]';
      break;
    case 2:
      one += 'bg-orange';
      two += 'bg-orange';
      three += 'bg-white';
      break;
    case 3:
      one += 'bg-orange';
      two += 'bg-orange';
      three += 'bg-orange';
      dot += 'bg-white';
      break;
    default:
      break;
  }
  return (
    <section className="flex relative z-10 justify-between w-2/6 ml-6">
      <div
        className={`absolute z-0 w-[98%] right-0 left-0 mx-auto h-2  transform translate-y-3 ${
          1 === step ? 'bg-white' : ''
        } ${2 === step ? 'half-white-half-orange' : ''} ${3 === step ? 'bg-orange' : ''}`}
      />
      <div className="stepper__step flex flex-col ">
        <div className="stepper__indicator">
          {1 === step ? (
            <span className={`${one} stepper__info shadow-active`}>1</span>
          ) : (
            <span className={`stepper__info ${one}`}>
              <span className="stepper__empty bg-[#ffffff]" />
            </span>
          )}
        </div>
        <div
          className={`stepper__label text-center transform translate-x-5 ${
            'one' === step ? 'font-bold' : ''
          }`}
        >
          מה עשיתי
          <br />
          עד כה
        </div>
      </div>
      <div className="stepper__step flex flex-col items-center">
        <div className="stepper__indicator">
          {2 === step ? (
            <span className={`${two} stepper__info shadow-active`}>2</span>
          ) : (
            <span className={`stepper__info ${two}`}>
              <span className={`stepper__empty ${dot}`} />
            </span>
          )}
        </div>
        <div className={`stepper__label  text-center ${3 === step ? 'font-bold' : ''}`}>
          מה מעניין
          <br />
          אותי
        </div>
      </div>
      <div className="stepper__step flex flex-col items-end">
        <div className="stepper__indicator">
          {'three' === step ? (
            <span className={`${three} stepper__info shadow-active `}>3</span>
          ) : (
            <span className={`stepper__info ${three}`}>
              <span className="stepper__empty bg-[#DFDFDF]" />
            </span>
          )}
        </div>
        <div
          className={`stepper__label text-center transform -translate-x-5 ${
            'three' === step ? 'font-bold' : ''
          }`}
        >
          היכולות שלי +
          <br />
          מה מתאים לי
        </div>
      </div>
    </section>
  );
};

export default WalkMeStepper;
