import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import NavBar from '../navbar/NavBar';

const Layout = function ({ children }) {
  const { pathname } = useRouter();
  const witihoutnav = ['/user/Register', '/user/login'];
  return (
    <section className="min-h-screen md:flex  bg-lightgreybackground">
      {!witihoutnav.includes(pathname) ? <NavBar /> : ''}
      <main className="main dashboard flex-grow pt-9 md:pl-16 mx-auto">{children}</main>
    </section>
  );
};

Layout.prototype = {
  children: PropTypes.any,
};
export default Layout;
