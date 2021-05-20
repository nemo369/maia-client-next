import PropTypes from 'prop-types'; // ES6
import NavBar from '../navbar/NavBar';

const Layout = ({ children }) => (
  <section className="min-h-screen md:flex main">
    <NavBar />
    <main className="dashboard flex-grow">{children}</main>
  </section>
);

Layout.prototype = {
  children: PropTypes.any,
};
export default Layout;
