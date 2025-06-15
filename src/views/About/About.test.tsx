import { render, screen } from '@testing-library/react';
import About from './About';

describe('About', () => {
  it('renders About Us heading and team members', () => {
    render(<About />);
    expect(screen.getByRole('heading', { name: /about us/i })).toBeInTheDocument();
    expect(screen.getByText(/welcome to our company/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /meet our team/i })).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
  });
});
