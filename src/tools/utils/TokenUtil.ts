import type { AuthUser, AuthSession } from '../../interfaces/authInterface';

const AUTH_TOKEN_KEY = 'auth.token';
const AUTH_USER_KEY = 'auth.user';

export const getAuthToken = (): string | null => {
  return sessionStorage.getItem(AUTH_TOKEN_KEY);
};

export const setAuthToken = (token: string): void => {
  if (!token) {
    clearAuthToken();
    return;
  }
  sessionStorage.setItem(AUTH_TOKEN_KEY, token);
};

export const clearAuthToken = (): void => {
  sessionStorage.removeItem(AUTH_TOKEN_KEY);
};

export function setAuthSession(loginResult: AuthSession) {
  setAuthToken(loginResult.token);
  sessionStorage.setItem(
    AUTH_USER_KEY,
    JSON.stringify({ email: loginResult.email, fullName: loginResult.fullName }),
  );
}

export function clearAuthSession() {
  clearAuthToken();
  sessionStorage.removeItem(AUTH_USER_KEY);
}

export function getAuthUser(): AuthUser | null {
  const user = sessionStorage.getItem(AUTH_USER_KEY);
  if (!user) return null;

  try {
    return JSON.parse(user) as AuthUser;
  } catch {
    return null;
  }
}

export function isAuthenticated(): boolean {
  return getAuthToken() !== null;
}
