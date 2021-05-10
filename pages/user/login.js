import Head from 'next/head';
import React from 'react';

import CustomLink from '../../components/common/CustomLink';
import LoginForm from '../../components/profile/LoginForm';

const Login = () => (
	<>
		<section>
			<h1>Sign in</h1>
			<LoginForm />
		</section>
	</>
);

export default Login;
