import { render, screen, waitFor } from '@testing-library/react';
import Profile from './Profile';
import * as appServices from '@/services/app.services';

jest.mock('@/services/app.services');
const mockFetchUser = appServices.fetchUser as jest.Mock;

describe('Profile', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading and then user profile', async () => {
    mockFetchUser.mockResolvedValue({
      name: 'Test User',
      greet: 'Hello!',
      location: 'Test City',
      intro: 'Test intro',
      totalExperience: 5
    });
    render(<Profile />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByRole('img', { name: 'Test User' })).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: 'Hello!' })).toBeInTheDocument();
      expect(screen.getByText('Test intro')).toBeInTheDocument();
    });
  });

  it('handles fetch error gracefully', async () => {
    mockFetchUser.mockRejectedValue(new Error('fail'));
    render(<Profile />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });
  });

  it('renders greet with totalExperience replacement', async () => {
    mockFetchUser.mockResolvedValue({
      name: 'Test User',
      greet: 'I have {{%totalExperience%}} years experience',
      location: 'Test City',
      intro: 'Test intro',
      totalExperience: 7
    });
    render(<Profile />);
    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /7 years experience/i })).toBeInTheDocument();
    });
  });

  it('handles fetchUser resolving to undefined', async () => {
    mockFetchUser.mockResolvedValue(undefined);
    render(<Profile />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});
