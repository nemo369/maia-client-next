import RegisterForm from '../../components/profile/RegisterForm';
import SignUpHeader from '../../components/SignUpHeader';

const Register = function () {
  return (
    <div className="bg-lightgreybackground ">
      <SignUpHeader />
      <section>
        <RegisterForm />
      </section>
    </div>
  );
};

export default Register;
