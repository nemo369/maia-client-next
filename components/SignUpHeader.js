import Link from 'next/link';
import Logo from './svg/Logo';
import WHeelChair from './svg/WheelChair';

const SignUpHeader = function () {
  return (
    <div className="grid grid-cols-2 relative mb-14 mt-9">
      <Logo />
      <div className="justify-self-end absolute bottom-2/3 top-[1%] ">
        <div className="ml-4 inline-block">
          <p className="inline-block text-lg">יש לך שם משתמש? </p>
          <span> </span>
          <Link href="http://localhost:3000/login">
            <p className="inline-block text-orange-mainOr text-lg">
              <u> התחבר עכשיו </u>
            </p>
          </Link>
        </div>
        <WHeelChair />
      </div>
    </div>
  );
};

export default SignUpHeader;
