import React, { useState } from 'react';
import LoginWithPhone from './LoginWithPhone';
import VerificationPhone from './VerificationPhone';

const PhoneLog = (props) => {
  const { changeLoginType } = props;
  const [cell, setCell] = useState('');

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
