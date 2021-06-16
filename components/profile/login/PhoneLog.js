import React, { useState } from 'react';
// import MailVerification from './VerificationPhone';
import LoginWithPhone from './LoginWithPhone';
import VerificationPhone from './VerificationPhone';

const PhoneLog = () => {
  // const [open, setOpen] = useState(true);
  const [cell, setCell] = useState(false);

  return (
    <div>{!cell ? <LoginWithPhone setCell={setCell} /> : <VerificationPhone cell={cell} />}</div>
  );
};

export default PhoneLog;
