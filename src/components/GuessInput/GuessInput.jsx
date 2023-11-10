import React from 'react';
import PropTypes from 'prop-types';

function GuessInput({ handleSubmitGuess, gamesStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ tentativeGuess });
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess('');
  };

  const handleChange = (event) => {
    const nextGuess = event.target.value.toUpperCase();
    setTentativeGuess(nextGuess);
  };
  return (
    <>
      <form className='guess-input-wrapper' onSubmit={handleSubmit}>
        <label htmlFor='guess-input'>Enter guess:</label>
        <input
          id='guess-input'
          disabled={gamesStatus !== 'playing'}
          type='text'
          value={tentativeGuess}
          onChange={handleChange}
          pattern='(?=.*[A-Z]).{5,5}'
          title='Must enter 5 Alphabetic characters'
          maxLength={5}
        />
      </form>
    </>
  );
}

GuessInput.propTypes = {
  handleSubmitGuess: PropTypes.func.isRequired,
  gamesStatus: PropTypes.string.isRequired,
};

export default GuessInput;
