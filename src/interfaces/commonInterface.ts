export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface GlobalError {
  message?: string[] | string;
  error?: string;
  statusCode?: number;
}
