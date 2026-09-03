import React, { useState, useEffect } from 'react';

const Typewriter = ({ strings, delay = 100, deleteDelay = 50, pauseDelay = 2000 }: { strings: string[], delay?: number, deleteDelay?: number, pauseDelay?: number }) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentStringIndex((prev) => (prev + 1) % strings.length);
        timeout = setTimeout(() => {}, delay); // small pause before typing next
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, deleteDelay);
      }
    } else {
      if (currentText === strings[currentStringIndex]) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDelay);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(strings[currentStringIndex].slice(0, currentText.length + 1));
        }, delay);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentStringIndex, strings, delay, deleteDelay, pauseDelay]);

  return (
    <span className="inline-block relative">
      {currentText}
      <span className="animate-pulse absolute -right-3 top-0 bottom-0 border-r-2 border-detect"></span>
    </span>
  );
};

export default Typewriter;
