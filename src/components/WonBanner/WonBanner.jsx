import PropTypes from 'prop-types';
import Banner from '../Banner/';

function WonBanner({ guessesCount, handleResetGame }) {
  return (
    <>
      <Banner status='happy'>
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>
            {guessesCount === 1 ? '1 guess' : `${guessesCount} guesses`}{' '}
          </strong>
          .
        </p>
        <br />
        <button className='button' onClick={handleResetGame}>
          Play Again?
        </button>
        {console.clear()}
      </Banner>
    </>
  );
}

export default WonBanner;

WonBanner.propTypes = {
  handleResetGame: PropTypes.func.isRequired,
  guessesCount: PropTypes.number.isRequired,
};
