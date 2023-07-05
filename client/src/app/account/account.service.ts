import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.apiUrl;
  private currentUserSource = new BehaviorSubject<IUser>({} as IUser);
  currentUser$ = this.currentUserSource.asObservable();


  constructor(private http: HttpClient, private router: Router) { }

  login(values: IUser) {
    return this.http.post(this.baseUrl + 'account/login', values).pipe(
      map((user: any) => {
        if (user) {
          localStorage.setItem('token', user.token);
          this.currentUserSource.next(user);
        }
      })
    )
  }

  register(values: IUser) {
    return this.http.post(this.baseUrl + 'account/register', values).pipe(
      map((user: any) => {
        if (user) {
          localStorage.setItem('token', user.token);
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUserSource.next({} as IUser);
    this.router.navigateByUrl('/');
  }

  checkEmailExists(email: string) {
    return this.http.get(this.baseUrl + '/account/emailexists?email=' + email);
  }

}
