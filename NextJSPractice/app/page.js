import Link from "next/link";
import styles from "./page.module.css";
import Counter from "./components/Counter";
import ServerMessage from "./components/ServerMessage";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Welcome to Introduction to NextJS!</h1>

        <p>This is my Next.js warmup project.</p>

        <Link href="/about">About Me</Link>

        <Counter />
        <ServerMessage />
      </main>
    </div>
  );
}
