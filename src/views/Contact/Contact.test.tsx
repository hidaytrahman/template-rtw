import { render, screen } from '@testing-library/react';
import Contact from './Contact';

describe('Contact', () => {
  it('renders Contact Us heading and mission text', () => {
    render(<Contact />);
    expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument();
    expect(screen.getByText(/welcome to our company/i)).toBeInTheDocument();
    expect(screen.getByText(/continuous improvement/i)).toBeInTheDocument();
  });
});
