import PropTypes from 'prop-types'; // ES6
import NavBar from '../navbar/NavBar';

const Layout = ({ children }) => (
  <main className="min-h-screen md:flex main">
    <NavBar />
    <article className="dashboard flex-grow">{children}</article>
  </main>
);

Layout.prototype = {
  children: PropTypes.any,
};
export default Layout;
