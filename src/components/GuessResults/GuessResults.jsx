import PropTypes from 'prop-types';
import Guess from '../Guess/Guess';
import { range } from '../../utilities/utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../utilities/constants';

function GuessResults({ guesses, answer }) {
  return (
    <>
      <div className='guess-results'>
        {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
          <Guess key={num} value={guesses[num]} answer={answer} />
        ))}
      </div>
    </>
  );
}

GuessResults.propTypes = {
  guesses: PropTypes.array,
  answer: PropTypes.string,
};

export default GuessResults;
