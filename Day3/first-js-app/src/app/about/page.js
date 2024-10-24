// src/app/about/page.js
import Link from 'next/link';

export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page of your Next.js app.</p>
      <Link href="/">Go back to Home</Link>
    </div>
  );
}
