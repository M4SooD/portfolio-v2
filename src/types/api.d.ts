export interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
}

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'user';
}
