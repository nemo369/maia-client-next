import LoginCmp from '../../components/profile/LoginCmp';

const Login = () => (
  <>
    <section className="login__wrapper flex justify-center items-center h-screen overflow-hidden">
      <div className="md:flex login text-white w-full">
        <div className="login__form bg-green-500 rounded px-14 py-11">
          <LoginCmp />
        </div>
        <div className="login__image flex-grow">
          <img
            width="1374"
            height="837"
            src="/images/login-image.svg"
            alt="התחברות למאי״ה"
            className="object-contain  block max-w-none"
          />
        </div>
      </div>
    </section>
  </>
);

export default Login;
