export interface AppRequestResponse<T> {
  statusCode: number;
  timestamp: Date;
  path: string;
  method: string;
  ok: boolean;
  status: string;
  data?: T;
}
