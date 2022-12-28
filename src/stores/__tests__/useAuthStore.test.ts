import {useAuthStore} from '../useAuthStore';

describe('useAuthStore', () => {
  it('should handle login', () => {
    useAuthStore.getState().login('melonmusk@gmail.com', 'abcdeABCDE12345');
    expect(useAuthStore.getState().isAuthenticated).toBe(true);
    expect(useAuthStore.getState().username).toBe('melonmusk@gmail.com');
    expect(useAuthStore.getState().password).toBe('abcdeABCDE12345');
  });

  it('should handle logout', () => {
    useAuthStore.getState().logout();
    expect(useAuthStore.getState().username).toBe(null);
    expect(useAuthStore.getState().password).toBe(null);
    expect(useAuthStore.getState().isAuthenticated).toBe(false);
  });
});
