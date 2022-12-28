import {useColorSchemeStore} from '../useColorSchemeStore';

describe('useColorSchemeStore', () => {
  it('should handle set color scheme', () => {
    // Change to dark - OS/system
    useColorSchemeStore.getState().setColorScheme('dark');
    expect(useColorSchemeStore.getState().colorScheme).toBe('dark');
    expect(useColorSchemeStore.getState().activeScheme).toBe('dark');

    // Change to light - app/local
    useColorSchemeStore.getState().setUserColorScheme('light');
    expect(useColorSchemeStore.getState().colorScheme).toBe('dark');
    expect(useColorSchemeStore.getState().userColorScheme).toBe('light');
    // Always use app/local
    expect(useColorSchemeStore.getState().activeScheme).toBe('light');

    // Change to dark - app/local
    useColorSchemeStore.getState().setUserColorScheme(null);
    // Use OS/system when user scheme is null
    expect(useColorSchemeStore.getState().colorScheme).toBe('dark');
    expect(useColorSchemeStore.getState().activeScheme).toBe('dark');
  });
});
