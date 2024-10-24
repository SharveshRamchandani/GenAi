// app/page.js
import styles from '../styles/Home.module.css';
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to Tech Company</h1>
      <Image src="/images/tech-company-logo.png" alt="Tech Company Logo" width={200} height={200} />
      <p>Innovating the future of technology.</p>
      <a href="/about">Learn More About Us</a>
    </div>
  );
};

export default HomePage;