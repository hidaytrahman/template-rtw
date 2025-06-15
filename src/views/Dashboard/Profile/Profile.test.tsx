import { render, screen, waitFor } from '@testing-library/react';
import Profile from './Profile';

jest.mock('@/services/app.services', () => ({
  fetchUser: jest.fn().mockResolvedValue({
    name: 'Test User',
    greet: 'Hello!',
    location: 'Test City',
    intro: 'Test intro',
    totalExperience: 5
  })
}));

describe('Profile', () => {
  it('renders loading and then user profile', async () => {
    render(<Profile />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByRole('img', { name: 'Test User' })).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: 'Hello!' })).toBeInTheDocument();
      expect(screen.getByText('Test intro')).toBeInTheDocument();
    });
  });
});
