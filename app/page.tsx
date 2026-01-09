import Image from "next/image";
import css from "./page.module.css";

export default function Home() {
  return (
    <div className={css.page}>
      <main className={css.main}>
        <section className={css.heroSection}>
          <div className={css.hero}>
          <div className={css.heroTextContainer}>
            <h2 className={css.heroTitle}>Campers of your dreams</h2>
            <p className={css.heroText}>You can find everything you want in our catalog</p>
          </div>
          <button className={css.heroButton}>View Now</button>
        </div>
        </section>        
      </main>
    </div>
  );
}
