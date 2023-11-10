import PropTypes from 'prop-types';
import { range } from '../../utilities/utils';
import { checkGuess } from '../../utilities/game-helpers';

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : 'cell';
  return <span className={className}>{letter || ''}</span>;
}

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);

  return (
    <>
      <p className='guess'>
        {range(5).map((num) => (
          <Cell
            key={num}
            letter={result ? result[num].letter : undefined}
            status={result ? result[num].status : undefined}
          />
        ))}
      </p>
    </>
  );
}

export default Guess;

Guess.propTypes = {
  value: PropTypes.string,
  answer: PropTypes.string,
};

Cell.propTypes = {
  letter: PropTypes.string,
  status: PropTypes.string,
};
