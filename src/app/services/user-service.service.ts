import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private heroesUrl = 'http://localhost:8080/api/usuarios';
  
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.heroesUrl);
  }

  postUser(user: {
    email: string | null,
    name: string | null,
    password: string | null,
    phone: string | null
  }){
    return this.http.post(this.heroesUrl, user);
  }
}
