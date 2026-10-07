"use client";

import { useState } from "react";
import styles from "./counter.module.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  const messages = {
    10: "Keep going!",
    20: "Surely a very practical use of your time.",
    30: "What do you think you are achieving?",
    40: "Already 40? You're really committed!",
    50: "You are alredy halfway there, might as well keep going.",
    60: "You are really dedicated to this.",
    70: "Are you procrastinating?",
    80: "Place your bets, what will happen when you reach 100?",
    90: "Curiosity killed the cat, but satisfaction brought it back.",
    100: "Good job! Are you gonna risk it to keep going?",
};

  const IncreaseCount = () => {
    if (count === 100) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  return (
    <div className={styles.counter}>
      <p>Count: {count}</p>
      <button onClick={IncreaseCount}>
        Increase
      </button>
      {messages[count] && (
        <p className={styles.message}>
          {messages[count]}
        </p>
      )}
    </div>
  );
}
