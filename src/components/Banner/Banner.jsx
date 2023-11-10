import PropTypes from 'prop-types';

function Banner({ status, children }) {
  return (
    <>
      <div className={`${status} banner`}>{children}</div>
    </>
  );
}

export default Banner;

Banner.propTypes = {
  status: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
