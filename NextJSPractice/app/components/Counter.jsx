"use client";

import { useState } from "react";
import styles from "./counter.module.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.counter}>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}
