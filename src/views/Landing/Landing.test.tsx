import { render, screen } from '@testing-library/react';
import Landing from './Landing';

describe('Landing', () => {
  it('renders landing page with StandardImageList', () => {
    render(<Landing />);
    expect(screen.getByRole('heading', { name: /hello, react with typescript and webpack/i })).toBeInTheDocument();
    expect(screen.getByText(/simple react application/i)).toBeInTheDocument();
    // StandardImageList renders at least one image
    expect(screen.getAllByRole('img').length).toBeGreaterThan(0);
  });
});
