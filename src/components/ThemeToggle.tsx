
import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Check for dark mode preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }

    // Check for theme setting in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme as 'light' | 'dark');
    }
  }, []);

  useEffect(() => {
    // Update document class and localStorage when theme changes
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-secondary/80 transition-colors duration-200 relative overflow-hidden"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative">
        <Sun className={`h-5 w-5 transition-all duration-300 ${theme === 'dark' ? 'rotate-90 opacity-0 scale-0' : 'rotate-0 opacity-100 scale-100'}`} />
        <Moon className={`absolute top-0 left-0 h-5 w-5 transition-all duration-300 ${theme === 'light' ? '-rotate-90 opacity-0 scale-0' : 'rotate-0 opacity-100 scale-100'}`} />
      </div>
    </button>
  );
};

export default ThemeToggle;
