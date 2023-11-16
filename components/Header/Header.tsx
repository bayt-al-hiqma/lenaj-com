// components/Header/Header.tsx
import Image from 'next/image';
import Link from 'next/link';
import styles from './header.module.css'; // Update this if you have a different CSS module name

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        {/* Veteran-owned logo */}
        <Image src="/assets/images/LENAJ-veteran_owned_black-05.png" alt="Veteran-Owned" width={100} height={50} />
      </div>
      <div className={styles.contactInfo}>
        {/* Contact information */}
        <p>11285B Sunrise Gold CR, Rancho Cordova, CA 95742</p>
      </div>
      <div className={styles.socialMedia}>
        {/* Instagram link */}
        <Link href="https://www.instagram.com/lenajmilitarygear/?hl=en">
          <a target="_blank">
            <Image src="/assets/images/LENAJ-instagram-round_blue-07.png" alt="Instagram" width={30} height={30} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Header;