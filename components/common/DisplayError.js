import React from 'react';

const DisplayError = ({ error }) => {
  if (!error || !error.message) {
    return null;
  }
  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map((errorMsg, i) => (
      <div key={i}>
        <p data-test="graphql-error">
          <strong>Shoot!</strong>
          {errorMsg.message}
        </p>
      </div>
    ));
  }
  return (
    <div>
      <p data-test="graphql-error">
        <strong>Error: </strong>
        {error.message}
      </p>
    </div>
  );
};
DisplayError.defaultProps = {
  error: {},
};

DisplayError.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  error: PropTypes.object,
};
export default DisplayError;
