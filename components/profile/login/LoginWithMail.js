import React, { useState } from 'react';
import MailLog from './MailLog';
import MailVerification from './MailVerification';

const LoginWithMail = ({ changeLoginType }) => {
  const [email, setTheEmail] = useState(null);

  return (
    <>
      {email ? (
        <MailVerification email={email} redirectToTest={false} />
      ) : (
        <MailLog setTheEmail={setTheEmail} changeLoginType={changeLoginType} />
      )}
    </>
  );
};

export default LoginWithMail;
