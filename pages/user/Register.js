import RegisterForm from '../../components/profile/RegisterForm';
import SignUpHeader from '../../components/SignUpHeader';

const Register = function () {
  return (
    <div className="bg-lightgreybackground h-bbc w-full">
      <SignUpHeader />
      <RegisterForm />
    </div>
  );
};

export default Register;
