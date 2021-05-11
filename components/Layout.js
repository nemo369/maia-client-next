import PropTypes from 'prop-types'; // ES6
import NavBar from './NavBar';
// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => (
  <div className="layout">
    <NavBar />
    {children}
  </div>
);

Layout.prototype = {
  children: PropTypes.any,
};
export default Layout;
