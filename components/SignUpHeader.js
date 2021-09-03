import Link from 'next/link';
import Logo from './svg/Logo';
import WHeelChair from './svg/WheelChair';

const SignUpHeader = function () {
  return (
    <div className="flex md:flex-row flex-col-reverse items-center relative mb-14 mt-9 mq-sign">
      <Logo />
      <div className=" mr-auto">
        <div className="ml-4 inline-block">
          <p className="inline-block text-lg">יש לך שם משתמש? </p>
          <span> </span>
          <Link href="/user/login">
            <a className="inline-block text-orange-mainOr text-lg">
              <u> התחבר עכשיו </u>
            </a>
          </Link>
        </div>
        <WHeelChair />
      </div>
    </div>
  );
};

export default SignUpHeader;
