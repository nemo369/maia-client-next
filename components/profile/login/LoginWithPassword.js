import Router from 'next/router';
import { useState } from 'react';
import useForm from '../../../src/hooks/useForm';
import UserAPI from '../../../src/services/user.service';
import DisplayError from '../../common/error/DisplayError';
import Loader from '../../common/Loader';

const LoginWithPassword = () => {
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
    const { data, status } = await UserAPI.login(inputs);
    if (200 !== status) {
      setError(data);
    }

    if (data?.token) {
      // TODO: Set cookie with nookies
      console.log(data);
      resetForm();
      // Router.push('/'); // TODO: go to last page user visited
    }

    setLoading(false);
  };

  return (
    <>
      <form method="POST" onSubmit={handleSubmit}>
        <h2 className="font-black	mb-2">התחברות</h2>
        <p className="mb-11">
          כדי שנוכל לשמור על פרטיותך ולהגן על הנתונים שלך נשלח לך באמצעות SMS סיסמה חד פעמית
        </p>
        <DisplayError error={error} />

        <fieldset disabled={loading}>
          <label htmlFor="email" className="block text-gray-800">
            <div className="sr-only">מייל</div>
            <input
              type="email"
              name="username"
              placeholder="מייל"
              autoComplete="email"
              value={inputs.username}
              onChange={handleChange}
              className={`${error ? 'input-error shake' : ''}`}
            />
          </label>
          <label htmlFor="password" className="block mt-4 text-gray-800">
            <div className="sr-only">סיסמא</div>
            <input
              type="password"
              name="password"
              placeholder="סיסמא"
              autoComplete="password"
              value={inputs.password}
              onChange={handleChange}
              className={`${error ? 'input-error shake' : ''}`}
            />
          </label>
          <button
            type="submit"
            className="mt-16 bg-mainOrange w-full text-center rounded py-4 hover:bg-opacity-90"
          >
            התחברות
          </button>
        </fieldset>
        <Loader loading={loading} />
      </form>
    </>
  );
};

export default LoginWithPassword;
