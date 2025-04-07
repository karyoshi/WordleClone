"use client";

import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { words } from "./utils/words";

export default function Home() {
  const [currentWord, setCurrentWord] = useState<string>("");
  const [guess, setGuess] = useState<number>(5);

  useEffect(() => {
    const getRandomWord = () => {
      const randomIndex = Math.floor(Math.random() * words.length);
      setCurrentWord(words[randomIndex]);
    };
    getRandomWord();
  }, []);

  for (let i = 1; i < currentWord.length; i++) {
    let newName = currentWord;
    words.push(newName);
    return <div className={styles.box}></div>;
  }

  console.log(currentWord);

  return (
    <div className={styles.page}>
      <h1>Wordle</h1>
      <div>
        <p>{currentWord}</p>
      </div>
    </div>
  );
}
