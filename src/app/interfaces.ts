export interface LoginResponse {
  accessToken: string;
}

export interface StatisticResponse {
  short: string;
  target: string;
  counter: number;
}

export interface SortInfo {
  [key: string]: 'asc' | 'desc' | null;
}
