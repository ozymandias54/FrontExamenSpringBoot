import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prof } from '../models/prof';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private isAuthenticated = false;
  private userName: string | null = null;
  private idProf: number | undefined;

  getProfs(): Prof[] {
      let log: Prof[] = [];
      this.http.get<any[]>('http://localhost:8080/prof/read').subscribe(
        (data) => {
      log = data;
    });
    return log;
  }

  login(username: string, password: string): boolean {
    let log: Prof[] = this.getProfs();

    const prof=log.find(
      (d) => d.username == username && d.password == password
    );

    console.log(prof);

    if (prof==undefined) {
      return false;
    } else {
      this.isAuthenticated = true;
      this.userName = username;
      this.idProf = prof.idProf;
      return true;
    }
  }

  logout(): void {
    this.isAuthenticated = false;
    this.userName = null;
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  getUserName(): string | null {
    return this.userName;
  }
}
