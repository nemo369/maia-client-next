import { useRouter } from 'next/router';
import PropTypes from 'prop-types'; // ES6
import NavBar from '../navbar/NavBar';

const Layout = function ({ children }) {
  const { pathname } = useRouter();
  const witihoutnav = ['/user/Register'];
  return (
    <main className="h-screen md:flex main">
      <article className="dashboard flex-grow">{children}</article>
      {!witihoutnav.includes(pathname) ? <NavBar /> : ''}
    </main>
  );
};

Layout.prototype = {
  children: PropTypes.any,
};
export default Layout;
