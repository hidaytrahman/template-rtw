import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  it('renders Home heading', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { name: /home/i })).toBeInTheDocument();
  });
});
