export interface GlobalError {
  message?: string[] | string;
  error?: string;
  statusCode?: number;
}

export interface AuthUser {
  email: string;
  fullName: string;
}

export interface AuthSession {
  email: string;
  fullName: string;
  token: string;
}
