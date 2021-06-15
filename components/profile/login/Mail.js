import React, { useState } from 'react';
import LoginWithMail from './LoginWithMail';
import MailVerification from './MailVerification';

const Mail = () => {
  const [open, setOpen] = useState(true);

  return <div>{!open ? <LoginWithMail setOpen={setOpen} /> : <MailVerification />}</div>;
};

export default Mail;
