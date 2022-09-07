export interface LoginResponse {
  access_token: string;
  token_type: 'bearer';
}

export interface StatisticResponse {
  id: number;
  short: string;
  target: string;
  counter: number;
}
