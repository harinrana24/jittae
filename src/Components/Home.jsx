import React, { useState, useEffect } from 'react';

const Home = () => {
  const words = ['Hacker', 'Developer', 'CTF Player', 'Cyber Security Enthusiast'];
  const [displayedWord, setDisplayedWord] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [erasing, setErasing] = useState(false);

  useEffect(() => {
    let timeout;

    const updateWord = () => {
      if (!erasing) {
        const currentWord = words[wordIndex];
        const nextLetter = currentWord.charAt(letterIndex);
        setDisplayedWord(prevWord => prevWord + nextLetter);

        if (letterIndex === currentWord.length - 1) {
          setErasing(true);
        } else {
          setLetterIndex(prevIndex => prevIndex + 1);
        }
      } else {
        setDisplayedWord(prevWord => prevWord.slice(0, -1));

        if (displayedWord === '') {
          setWordIndex(prevIndex => (prevIndex + 1) % words.length);
          setErasing(false);
          setLetterIndex(0);
        }
      }
    };

    timeout = setTimeout(updateWord, 200);

    return () => clearTimeout(timeout);
  }, [wordIndex, letterIndex, displayedWord, erasing, words]);

  return (
    <section id="home" className="home">
      <div className="main-sec">
        <h1>Jitesh Kumar</h1>
        <p>I am a <span style={{ color: 'green' }}>{displayedWord}|</span></p>
      </div>
    </section>
  );
};

export default Home;
