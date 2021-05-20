import Router from 'next/router';
import { useState } from 'react';
import useForm from '../../src/hooks/useForm';
import UserAPI from '../../src/services/user.service';
import DisplayError from '../common/error/DisplayError';

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { inputs, handleChange, resetForm } = useForm({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });
  const handleSubmit = async (e) => {
    setError(null);
    setLoading(true);
    e.preventDefault();
    try {
      const { data, status } = await UserAPI.register(inputs);
      // console.log(data, status);
      if (200 !== status) {
        setError(status);
      }

      if (data?.user) {
        // TODO: Set cookie with nookies
        resetForm();
        Router.push('/'); // TODO: go to last page user visited
      }
    } catch (err) {
      setError(err);
      setTimeout(() => {
        setError(null);
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="registerPage_container">
      <div className="registerPage_header">header</div>
      <div className="registerPage_form_container">
        <h1>העתיד שלך מתחיל כאן</h1>
        <p>הרשמה למערכת מאיה</p>
        <form className="registerPage_form" method="POST" onSubmit={handleSubmit}>
          <DisplayError error={error} />
          <fieldset disabled={loading}>
            <label htmlFor="username">
              User Name
              <input
                type="text"
                name="username"
                placeholder="User Name"
                autoComplete="username"
                value={inputs.username}
                onChange={handleChange}
              />
            </label>
            <br />
            <label htmlFor="email">
              Email
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                autoComplete="email"
                value={inputs.email}
                onChange={handleChange}
              />
            </label>
            <br />
            <label htmlFor="password">
              Password
              <input
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="password"
                value={inputs.password}
                onChange={handleChange}
              />
            </label>
            <br />
            <label htmlFor="passwordConfirmation">
              Confirm Password
              <input
                type="password"
                name="passwordConfirmation"
                placeholder="Password"
                autoComplete="password"
                value={inputs.passwordConfirmation}
                onChange={handleChange}
              />
            </label>
            <br />
            <button type="submit">Sign In!</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
