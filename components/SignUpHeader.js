import Link from 'next/link';
import Logo from './svg/Logo';

const SignUpHeader = function () {
  return (
    <div className="flex md:flex-row flex-col-reverse items-center relative mb-2 mq-sign max-w-[95vw] mx-auto 2xl:absolute w-full top-10 right-0 left-0">
      <Logo />
      <div className="flex  mr-auto items-center">
        <div className="flex gap-x-1 ml-4  text-lg">
          <p className=" text-gray">יש לך שם משתמש? </p>
          <Link href="/user/login">
            <a className=" text-orange-mainOr text-lg font-bold hover:text-opacity-80">
              <u> התחברו עכשיו </u>
            </a>
          </Link>
        </div>
        {/* <WHeelChair /> */}
      </div>
    </div>
  );
};

export default SignUpHeader;
