import { fireEvent, render, screen, within } from '@testing-library/react';
import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { MobileNav } from '@/components/layout/MobileNav';

vi.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

vi.mock('next/link', () => ({
  default: ({
    children,
    href,
    ...props
  }: AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode; href: string }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe('MobileNav', () => {
  it('opens an accessible menu without displaying the old Navigation heading', async () => {
    render(<MobileNav />);

    fireEvent.click(screen.getByRole('button', { name: 'Open navigation menu' }));

    const dialog = await screen.findByRole('dialog', { name: 'Menu' });
    expect(within(dialog).getByRole('heading', { name: 'Menu' })).toHaveClass('sr-only');
    expect(within(dialog).queryByText('Navigation')).not.toBeInTheDocument();

    const navigation = within(dialog).getByRole('navigation', { name: 'Mobile navigation' });
    expect(within(navigation).getByRole('link', { name: 'Home' })).toHaveAttribute(
      'aria-current',
      'page',
    );
    expect(within(navigation).getAllByRole('link')).toHaveLength(5);

    fireEvent.click(within(dialog).getByRole('button', { name: 'Close' }));
    expect(screen.queryByRole('dialog', { name: 'Menu' })).not.toBeInTheDocument();
  });
});
