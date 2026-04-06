export interface AuthUser {
  email: string;
  fullName: string;
}

export interface AuthSession {
  email: string;
  fullName: string;
  token: string;
}

// Re-export del módulo auth
export type { LoginRequest, LoginResponse } from '../modules/auth/types/LoginType';
