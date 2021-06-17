import React, { useState } from 'react';
// import MailVerification from './VerificationPhone';
import LoginWithPhone from './LoginWithPhone';
import VerificationPhone from './VerificationPhone';

const PhoneLog = (props) => {
  const { changeLoginType } = props;
  const [cell, setCell] = useState(false);

  return (
    <div>
      {!cell ? (
        <LoginWithPhone changeLoginType={changeLoginType} setCell={setCell} />
      ) : (
        <VerificationPhone cell={cell} />
      )}
    </div>
  );
};

export default PhoneLog;
