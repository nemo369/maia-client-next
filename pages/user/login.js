import LoginCmp from '../../components/profile/LoginCmp';

const Login = () => (
  <>
    <section className="login__wrapper flex justify-center items-center h-screen">
      <div className="md:flex login">
        <div className="login_form bg-green-500 rounded px-14 py-11">
          <LoginCmp />
        </div>
        <div className="login__image">
          <img
            src="/images/login.png"
            alt="התחברות למאי״ה"
            className="object-cover w-full h-full block"
          />
        </div>
      </div>
    </section>
  </>
);

export default Login;
