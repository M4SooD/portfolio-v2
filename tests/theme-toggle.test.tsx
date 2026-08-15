import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

const setTheme = vi.fn();

vi.mock('next-themes', () => ({
  useTheme: () => ({ resolvedTheme: 'dark', setTheme }),
}));

describe('ThemeToggle', () => {
  beforeEach(() => {
    setTheme.mockClear();
  });

  it('offers the opposite theme and switches to it', async () => {
    const user = userEvent.setup();

    render(<ThemeToggle />);

    const toggle = screen.getByRole('button', {
      name: 'Switch to light mode',
    });

    await user.click(toggle);

    expect(setTheme).toHaveBeenCalledWith('light');
  });
});
