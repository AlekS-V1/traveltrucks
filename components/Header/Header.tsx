// components/Header/Header.tsx
import Link from "next/link";

const Header = () => {
  return <header>
    <h2>TravelTrucks</h2>
  <nav>
    <ul>
        <li><Link href="/">Home</Link></li> 
        <li><Link href="/catalog">Catalog</Link></li>
    </ul>
  </nav>
</header>;
}

export default Header;
