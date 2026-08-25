'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const nextTheme = resolvedTheme === 'light' ? 'dark' : 'light';

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      title="Toggle color theme"
      onClick={() => setTheme(nextTheme)}
      className="relative grid size-11 shrink-0 cursor-pointer place-items-center rounded-xl border border-border/80 bg-card/75 text-foreground shadow-sm transition-colors hover:border-primary/45 hover:bg-primary/10 hover:text-primary"
    >
      <Sun
        aria-hidden="true"
        className="size-4.5 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0"
      />
      <Moon
        aria-hidden="true"
        className="absolute size-4.5 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100"
      />
    </button>
  );
};
