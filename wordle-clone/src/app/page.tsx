"use client";

import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { words } from "./utils/words";

export default function Home() {
  const [currentWord, setCurrentWord] = useState<string>("");
  const [guesses, setGuesses] = useState<string[]>(Array(6).fill(""));

  useEffect(() => {
    const getRandomWord = () => {
      const randomIndex = Math.floor(Math.random() * words.length);
      setCurrentWord(words[randomIndex]);
    };
    getRandomWord();
  }, []);

  const boxes = () => {
    return (
      <div className={styles.grid}>
        {guesses.map((guess, i) => (
          <div key={i} className={styles.row}>
            {Array(5)
              .fill(0)
              .map((_, j) => (
                <div key={`${i}-${j}`} className={styles.box}>
                  {guess[j] || ""}
                </div>
              ))}
          </div>
        ))}
      </div>
    );
  };

  console.log(currentWord);

  return (
    <div className={styles.page}>
      <h1>Wordle</h1>
      {boxes()}
    </div>
  );
}
