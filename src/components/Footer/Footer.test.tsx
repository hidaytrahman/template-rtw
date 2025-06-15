import { render, screen } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the footer with copyright and link', () => {
    render(
      <ThemeProvider theme={createTheme({ palette: { mode: 'light', grey: { 200: '#eee', 800: '#222' } } })}>
        <Footer />
      </ThemeProvider>
    );
    const year = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`${year}`))).toBeInTheDocument();
    expect(screen.getByText(/Powered By/i)).toBeInTheDocument();
    const link = screen.getByRole('link', { name: /webtechpie.com/i });
    expect(link).toHaveAttribute('href', 'https://webtechpie.com/');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('renders with dark mode background', () => {
    render(
      <ThemeProvider theme={createTheme({ palette: { mode: 'dark', grey: { 200: '#eee', 800: '#222' } } })}>
        <Footer />
      </ThemeProvider>
    );
    expect(screen.getByText(/Powered By/i)).toBeInTheDocument();
  });
});
