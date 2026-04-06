import { api } from '../../../boot/axios';
import type { LoginRequest, LoginResponse } from '../interfaces/LoginType';
import type { RegisterRequest, RegisterResponse } from '../interfaces/RegisterType';

export const loginApi = async (payload: LoginRequest): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>('/api/auth/login', payload);
  return response.data;
};

export const registerApi = async (payload: RegisterRequest): Promise<RegisterResponse> => {
  const response = await api.post<RegisterResponse>('/api/auth/register', payload);
  return response.data;
};
