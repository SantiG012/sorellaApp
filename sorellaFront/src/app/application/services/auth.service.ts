import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'https://restsorella-production.up.railway.app/api/auth'

  constructor(private http: HttpClient) { }

  authenticateUser(user: {
    email: string | null,
    password: string | null
  }) {
    return this.http.post(this.authUrl + "/login", user);
  }

  // TODO
  googleAuthentication(){}
}
