import { AxiosResponse } from 'axios';
import axios from 'axios';
import { IAuthRequest, IAuthResponse } from './authApi.interface';
export class AuthApi {
 private _apiPath: string = `${import.meta.env.VITE_API_PATH}/auth`;

 public async auth(request: IAuthRequest): Promise<IAuthResponse> {
  let token = await axios.post<IAuthResponse, AxiosResponse<IAuthResponse>, IAuthRequest>(
   `${this._apiPath}/auth-try`,
   request
  );
  localStorage.setItem('token', token.data.token);
  return token.data;
 }
}
