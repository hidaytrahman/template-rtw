import { render, screen } from '@testing-library/react';
import Settings from './Settings';

describe('Settings', () => {
  it('renders Settings heading', () => {
    render(<Settings />);
    expect(screen.getByRole('heading', { name: /settings/i })).toBeInTheDocument();
  });
});
