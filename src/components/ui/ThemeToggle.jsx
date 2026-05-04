// src/components/ui/ThemeToggle.jsx
import { useState, useEffect } from 'react';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed bottom-4 right-4 z-50 p-3 rounded-full shadow-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-2 border-gray-400 dark:border-gray-600 hover:scale-110 transition-transform"
      aria-label="Cambiar tema"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
};