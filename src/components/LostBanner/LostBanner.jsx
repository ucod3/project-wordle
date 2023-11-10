import PropTypes from 'prop-types';
import Banner from '../Banner/';
import './LostBanner.css';

function LostBanner({ answer, handleResetGame }) {
  return (
    <>
      <Banner status='sad'>
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
        <br />
        <button className='button' onClick={handleResetGame}>
          Restart Game
        </button>
        {console.clear()}
      </Banner>
    </>
  );
}

export default LostBanner;

LostBanner.propTypes = {
  handleResetGame: PropTypes.func.isRequired,
  answer: PropTypes.string.isRequired,
};
