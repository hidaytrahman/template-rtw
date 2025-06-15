import { render, screen, fireEvent } from '@testing-library/react';
import Navigation from './Navigation';
// import * as ReactRouter from 'react-router';

// Mock router config
jest.mock('../../config/router.config', () => ({
  MAIN_ROUTES: [
    { path: '/', title: 'Home', name: 'home' },
    { path: '/about', title: 'About', name: 'about' }
  ],
  DASHBOARD_NESTED_ROUTES: [
    { path: '/dashboard', title: 'Dashboard', name: 'dashboard' }
  ]
}));

// Mock Link to render an anchor
jest.mock('react-router', () => ({
  Link: ({ to, children }: any) => <a href={to}>{children}</a>
}));

describe('Navigation', () => {
  it('renders navigation links', () => {
    render(<Navigation />);
    expect(screen.getAllByText('Home').length).toBeGreaterThan(0);
    expect(screen.getAllByText('About').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Dashboard').length).toBeGreaterThan(0);
  });

  it('toggles drawer on icon click (mobile)', () => {
    render(<Navigation />);
    const button = screen.getByLabelText(/open drawer/i);
    fireEvent.click(button);
    // After click, the drawer should be rendered (RTW text is in drawer)
    expect(screen.getAllByText('RTW')[0]).toBeInTheDocument();
  });
});
