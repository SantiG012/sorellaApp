import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'http://localhost:8080/api/auth'

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
