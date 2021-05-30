import Logo from './svg/Logo';
import WHeelChair from './svg/WheelChair';

const SignUpHeader = function () {
  return (
    <div className="grid grid-cols-2">
      <Logo />
      <div className="justify-self-end p-12">
        <div className="ml-4 inline-block">
          <p className="inline-block">יש לך משתמש?</p>
          <p className="inline-block"> התחבר עכשיו</p>
        </div>
        <WHeelChair />
      </div>
    </div>
  );
};

export default SignUpHeader;
