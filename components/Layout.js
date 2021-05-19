import PropTypes from 'prop-types'; // ES6
import NavBar from './NavBar';

const Layout = ({ children }) => (
  <main className="min-h-screen md:flex main">
    <article className="dashboard flex-grow">{children}</article>
    <NavBar />
  </main>
);

Layout.prototype = {
  children: PropTypes.any,
};
export default Layout;
