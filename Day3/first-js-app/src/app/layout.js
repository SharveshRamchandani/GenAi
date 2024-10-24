// src/app/layout.js
export const metadata = {
  title: 'My Next.js App',
  description: 'A simple Next.js app with Home and About pages.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
      </body>
    </html>
  );
}
