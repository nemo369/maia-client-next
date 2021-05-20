import Router from 'next/router';
import { useState } from 'react';
import useForm from '../../src/hooks/useForm';
import UserAPI from '../../src/services/user.service';
import DisplayError from '../common/error/DisplayError';

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { inputs, handleChange, resetForm } = useForm({
    username: '',
    password: '',
  });
  const handleSubmit = async (e) => {
    setError(null);
    setLoading(true);
    e.preventDefault();
    try {
      const { data, status } = await UserAPI.login(inputs);
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
    <>
      <form method="POST" onSubmit={handleSubmit}>
        <DisplayError error={error} />
        <fieldset disabled={loading}>
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="username"
              placeholder="Your Email Address"
              autoComplete="email"
              value={inputs.username}
              onChange={handleChange}
            />
          </label>
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
          <button type="submit">Sign In!</button>
        </fieldset>
      </form>
    </>
  );
};

export default LoginForm;
