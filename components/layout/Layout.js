import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import NavBar from '../navbar/NavBar';

const Layout = function ({ children }) {
  const { pathname } = useRouter();
  const witihoutnav = ['/user/Register', '/user/login'];
  return (
    <section className="min-h-screen overflow-hidden md:flex  bg-lightgreybackground wrapper">
      {!witihoutnav.includes(pathname) ? <NavBar /> : ''}
      <main className="main dashboard flex-grow pt-9 md: mx-auto">{children}</main>
    </section>
  );
};

Layout.prototype = {
  children: PropTypes.any,
};
export default Layout;
