import Link from "next/link";
import styles from "../page.module.css";

export default function About() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>About Me</h1>
        <p>
          Hi! My name is Anette. This page was created as a warmup project for
          Next.js in application programming course.
        </p>
        <Link href="/">Back to Home</Link>
      </main>
    </div>
  );
}
