// app/about/page.js
import styles from '../../styles/About.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <h1>About Tech Company</h1>
      <p>We are dedicated to creating innovative technology solutions.</p>
      <p>Our team consists of experts in various fields of technology.</p>
      <a href="/">Go back to Home Page</a>
    </div>
  );
};

export default AboutPage;