'use client';

import React, { useState } from 'react';

const themeOptions = ['light', 'dark', 'system'];

export default function Themes() {
  const [selectedTheme, setSelectedTheme] = useState('ligth');

  return (
    <section className='min-h-screen flex flex-col items-center justify-center'>
      <h1 className='text-4xl mb-5 font-semibold'>Themes</h1>

      <ThemeOptions />

      <p className='mt-10'>
        Selected theme: <strong>{selectedTheme}</strong>
      </p>
    </section>
  );
}

function ThemeOptions() {
  return (
    <ul className='list-disc'>
      {themeOptions.map((theme, index) => (
        <li key={index}>
          <button
            onClick={() => setSelectedTheme(theme)}
            className={theme === selectedTheme ? 'font-bold' : ''}
          >
            {theme}
          </button>
        </li>
      ))}
    </ul>
  );
}
