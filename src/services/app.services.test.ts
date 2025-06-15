import { fetchUser, createTodo } from './app.services';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('app.services', () => {
  describe('fetchUser', () => {
    it('returns user data on success', async () => {
      mockedAxios.get.mockResolvedValueOnce({ data: { name: 'Test User' } });
      const data = await fetchUser();
      expect(data).toEqual({ name: 'Test User' });
      expect(mockedAxios.get).toHaveBeenCalledWith('https://raw.githubusercontent.com/hidaytrahman/hidaytrahman/main/me.json');
    });

    it('logs error and returns undefined on failure', async () => {
      const error = new Error('Network error');
      mockedAxios.get.mockRejectedValueOnce(error);
      const spy = jest.spyOn(console, 'error').mockImplementation(() => {});
      const data = await fetchUser();
      expect(data).toBeUndefined();
      expect(spy).toHaveBeenCalledWith(error);
      spy.mockRestore();
    });
  });

  describe('createTodo', () => {
    it('returns data on success', async () => {
      mockedAxios.post.mockResolvedValueOnce({ data: { id: 1, title: 'Test', completed: false } });
      const result = await createTodo('Test', false);
      expect(result).toEqual({ data: { id: 1, title: 'Test', completed: false }, error: null });
      expect(mockedAxios.post).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos', { title: 'Test', completed: false });
    });

    it('returns error on failure', async () => {
      const error = new Error('Post error');
      mockedAxios.post.mockRejectedValueOnce(error);
      const spy = jest.spyOn(console, 'error').mockImplementation(() => {});
      const result = await createTodo('Test', false);
      expect(result).toEqual({ data: null, error: 'Post error' });
      expect(spy).toHaveBeenCalledWith(error);
      spy.mockRestore();
    });
  });
});
