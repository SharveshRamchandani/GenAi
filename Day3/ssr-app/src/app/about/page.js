// src/app/about/page.js

import React from 'react';

const About = async () => {
  // Fetch data from the API
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await res.json();

  return (
    <div>
      <h1>About Page</h1>
      <p>This page fetches data using server-side rendering:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <a href="/">Go to Home Page</a>
    </div>
  );
};

export default About;
