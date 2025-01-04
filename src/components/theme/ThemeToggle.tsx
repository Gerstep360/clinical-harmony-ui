// src/components/theme/ThemeToggle.tsx
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
      className="relative focus:outline-none"
    >
      {/* Icono de Sol para modo claro */}
      <Sun
        className={`h-5 w-5 transition-opacity duration-300 ease-in-out ${
          theme === 'light' ? 'opacity-100' : 'opacity-0'
        }`}
      />
      {/* Icono de Luna para modo oscuro */}
      <Moon
        className={`h-5 w-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ease-in-out ${
          theme === 'dark' ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
