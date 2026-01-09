import Link from 'next/link';
import css from './Hero.module.css';


const Hero = () =>{
    return (
        <section className={css.heroSection}>
          <div className={css.hero}>
          <div className={css.heroTextContainer}>
            <h2 className={css.heroTitle}>Campers of your dreams</h2>
            <p className={css.heroText}>You can find everything you want in our catalog</p>
          </div>
          <Link href="/catalog" className={css.heroButton}>View Now</Link>
        </div>
        </section>
    )
}

export default Hero;