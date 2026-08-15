'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useSyncExternalStore } from 'react';

const subscribe = () => () => undefined;
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export const ThemeToggle = () => {
  const mounted = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );
  const { resolvedTheme, setTheme } = useTheme();
  const nextTheme = resolvedTheme === 'light' ? 'dark' : 'light';
  const label = mounted ? `Switch to ${nextTheme} mode` : 'Change color theme';

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={!mounted}
      onClick={() => setTheme(nextTheme)}
      className="relative grid size-11 shrink-0 cursor-pointer place-items-center rounded-xl border border-border/80 bg-card/75 text-foreground shadow-sm transition-colors hover:border-primary/45 hover:bg-primary/10 hover:text-primary disabled:cursor-wait disabled:opacity-60"
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
