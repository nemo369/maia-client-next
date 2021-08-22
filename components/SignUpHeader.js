import Link from 'next/link';
import Button from './common/Button';
import StageResults from './common/stage1results/StageResults';
import Logo from './svg/Logo';
import WHeelChair from './svg/WheelChair';
import StagesPopSide from './common/StagesPopSide';

const SignUpHeader = function () {
  return (
    <div className="grid grid-cols-2 relative mb-14 mt-9 mq-sign">
      <Logo />
      <div className="justify-self-end absolute bottom-2/3 top-[20px] ">
        <div className="ml-4 inline-block">
          <p className="inline-block text-lg">יש לך שם משתמש? </p>
          <span> </span>
          <Link href="/user/login">
            <a className="inline-block text-orange-mainOr text-lg">
              <u> התחבר עכשיו </u>
            </a>
          </Link>
          <StagesPopSide
            trigger={
              <Button type="button" status="secondary" name="תוצאות השלב" className="h-12 w-full" />
            }
          >
            <StageResults />
          </StagesPopSide>
        </div>
        <WHeelChair />
      </div>
    </div>
  );
};

export default SignUpHeader;
