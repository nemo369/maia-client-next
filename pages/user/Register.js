import RegisterForm from '../../components/profile/RegisterForm';
import SignUpHeader from '../../components/SignUpHeader';

const Register = function () {
  return (
    <div
      className="bg-lightgreybackground w-full min-h-screen
    "
    >
      <SignUpHeader />
      <RegisterForm />
    </div>
  );
};

export default Register;
