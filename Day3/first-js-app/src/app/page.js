// src/app/page.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main page of your Next.js app.</p>
      <Link href="/about">Go to About Page</Link>
    </div>
  );
}
