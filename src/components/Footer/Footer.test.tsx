import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the footer with copyright and link', () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`${year}`))).toBeInTheDocument();
    expect(screen.getByText(/Powered By/i)).toBeInTheDocument();
    const link = screen.getByRole('link', { name: /webtechpie.com/i });
    expect(link).toHaveAttribute('href', 'https://webtechpie.com/');
    expect(link).toHaveAttribute('target', '_blank');
  });
});
