import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignInRequest, SignInResponse } from 'src/app/models/interfaces/user/sign-in';
import { SignUpRequest, SignUpResponse } from 'src/app/models/interfaces/user/sign-up';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  signUp({ name, email, password }: SignUpRequest): Observable<SignUpResponse> {
    return this.http.post<SignUpResponse>(`${this.API_URL}/user`, { name, email, password });
  }

  signIn({ email, password }: SignInRequest): Observable<SignInResponse> {
    return this.http.post<SignInResponse>(`${this.API_URL}/auth`, { email, password });
  }
}
