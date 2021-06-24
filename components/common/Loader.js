import PropTypes from 'prop-types';

const Loader = ({ loading, className = '' }) => {
  if (!loading) {
    return null;
  }
  // return <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" />;
  return <div className={`loader ${className}`}>Loading...</div>;
};

Loader.prototype = {
  loading: PropTypes.bool,
};
export default Loader;
