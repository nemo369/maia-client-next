import Router from 'next/router';
import UserAPI from '../../src/ services /user.service';
import useForm from '../../src/hooks/useForm';

const LoginForm = () => {
	const { inputs, handleChange, resetForm } = useForm( {
		email: '',
		password: '',
	} );

	const handleSubmit = async ( e ) => {
		e.preventDefault();
		try {
			const { data, status } = await UserAPI.login( email, password );
			if ( 200 !== status ) {
				console.error( data.errors );
			}

			if ( data?.user ) {
				// window.localStorage.setItem( 'user', JSON.stringify( data.user ) );
				Router.push( '/' ); // TODO: go to last page
			}
		} catch ( error ) {
			console.error( error );
		} finally {
			// setLoading( false );
		}
	};

	return (
		<>
			<form method="POST" onSubmit={handleSubmit}>
				<h2>Sign Into Your Account</h2>
				<fieldset>
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
