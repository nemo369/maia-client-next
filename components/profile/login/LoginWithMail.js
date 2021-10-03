import React, { useState } from 'react';
import MailLog from './MailLog';
import MailVerification from './MailVerification';

const LoginWithMail = () => {
  const [email, setTheEmail] = useState(null);

  return <>{email ? <MailVerification email={email} /> : <MailLog setTheEmail={setTheEmail} />}</>;
};

export default LoginWithMail;
