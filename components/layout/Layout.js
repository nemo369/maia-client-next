import { useRouter } from 'next/router';
import PropTypes from 'prop-types'; // ES6
import NavBar from '../navbar/NavBar';

const Layout = function ({ children }) {
  const { pathname } = useRouter();
  const witihoutnav = ['/user/Register', '/user/login'];
  return (
    <section className="min-h-screen md:flex main">
      {!witihoutnav.includes(pathname) ? <NavBar /> : ''}
      <main className="dashboard flex-grow">{children}</main>
    </section>
  );
};

Layout.prototype = {
  children: PropTypes.any,
};
export default Layout;
