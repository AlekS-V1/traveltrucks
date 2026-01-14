// components/Header/Header.tsx
import Link from "next/link";
import css from "./Header.module.css";

const Header = () => {
  return (
<header className={css.header}>
    <div className={css.container}>
      <Link href="/">
        <svg className={css.logo} width="136" height="16">
        <use href='/logo.svg#icon-Logo' /></svg>
      </Link>
    <nav className={css.nav}>
      <ul className={css.listLink}>
          <li><Link href="/" className={css.navLink}>Home</Link></li> 
          <li><Link className={css.navLink} href="/catalog/filter/all">Catalog</Link></li>
      </ul>
    </nav>
    </div>
</header>
  )
}

export default Header;
