import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import NavBar from '../navbar/NavBar';

const Layout = function ({ children }) {
  const { pathname } = useRouter();
  const witihoutnav = ['/user/signup', '/user/login', '/404', '/user/not-valid', '/user/validate'];
  return (
    <section className="min-h-screen overflow-hidden md:flex  bg-lightgreybackground wrapper ">
      {!witihoutnav.includes(pathname) ? <NavBar /> : ''}
      <main className="main flex-grow md: mx-auto main-layout">{children}</main>
    </section>
  );
};

Layout.prototype = {
  children: PropTypes.any,
};
export default Layout;
