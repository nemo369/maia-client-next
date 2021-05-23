import PropTypes from 'prop-types';

function Loader({ loading }) {
  if (!loading) {
    return null;
  }
  return <div className="loader">Loading...</div>;
}

Loader.prototype = {
  loading: PropTypes.bool,
};
export default Loader;
