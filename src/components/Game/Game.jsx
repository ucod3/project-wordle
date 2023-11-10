import React from 'react';

import { sample } from '../../utilities/utils';
import { WORDS } from '../../utilities/data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../utilities/constants';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';

// Pick a random word on every pageload.
function generateAnswer() {
  const newAnswer = sample(WORDS);
  console.info({ newAnswer });
  return newAnswer;
}
// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gamesStatus, setGamesStatus] = React.useState('playing');
  const [answer, setAnswer] = React.useState(generateAnswer);

  function handleSubmitGuess(tentativeGuess) {
    const tentativeGuesses = [...guesses, tentativeGuess];
    setGuesses(tentativeGuesses);

    if (tentativeGuess.toUpperCase() === answer) {
      setGamesStatus('won');
    } else if (NUM_OF_GUESSES_ALLOWED === tentativeGuesses.length) {
      setGamesStatus('lost');
    }
  }

  function handleRestartGame() {
    setGuesses([]);
    setGamesStatus('playing');
    setAnswer(generateAnswer());
  }

  return (
    <>
      {gamesStatus === 'won' && (
        <WonBanner
          guessesCount={guesses.length}
          handleResetGame={handleRestartGame}
        />
      )}
      {gamesStatus === 'lost' && (
        <LostBanner answer={answer} handleResetGame={handleRestartGame} />
      )}
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gamesStatus={gamesStatus}
      />
    </>
  );
}

export default Game;
