'use client';

import getJoke from '@/api/jokeData';
import { useState } from 'react';

export default function Home() {
  const [joke, setJoke] = useState('');
  const [jokeText, setJokeText] = useState('');
  const [jokeButton, setJokeButton] = useState('Get a Joke');

  const handleClick = () => {
    if (jokeButton === 'Get a Joke' || jokeButton === 'Get Another Joke') {
      getJoke().then((data) => {
        setJoke(data);
        setJokeText(data.setup);
        setJokeButton('Get Punchline');
      });
    } else if (jokeButton === 'Get Punchline') {
      setJokeText(
        <>
          {joke.setup} {joke.delivery}
        </>,
      );
      setJokeButton('Get Another Joke');
    }
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      Welcome to Joke Generator Lab!
      <button type="button" onClick={handleClick}>
        {jokeButton}
      </button>
      <div>{jokeText}</div>
    </div>
  );
}
