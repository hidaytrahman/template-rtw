import { theme } from './theme.utils';

describe('theme.utils', () => {
  it('should have primary and secondary colors', () => {
    expect(theme.palette.primary.main).toBe('#8A784E');
    expect(theme.palette.secondary.main).toBe('#edf2ff');
  });
});
