import Image from "next/image";
import css from "./page.module.css";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <div className={css.page}>
      <main className={css.main}>
        <Hero />
      </main>
    </div>
  );
}
