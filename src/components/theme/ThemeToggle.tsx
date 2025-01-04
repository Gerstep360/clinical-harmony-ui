import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative focus:outline-none transition-theme"
    >
      <Sun
        className={`h-5 w-5 transition-opacity duration-300 ease-in-out absolute ${
          theme === 'light' ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'
        }`}
      />
      <Moon
        className={`h-5 w-5 transition-opacity duration-300 ease-in-out absolute ${
          theme === 'dark' ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}