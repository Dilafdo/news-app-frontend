import {Injectable} from '@angular/core';
import {GoogleLoginProvider, SocialAuthService, SocialUser} from 'angularx-social-login';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  auth = false;
  private SERVER_URL: string = environment.SERVER_URL;
  authState$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.auth);
  userData$: BehaviorSubject<SocialUser | ResponseModel> = new BehaviorSubject<SocialUser | ResponseModel>(null);


  constructor(private socialAuthService: SocialAuthService,
              private httpClient: HttpClient) {

    socialAuthService.authState.subscribe((user: SocialUser): void => {
      if (user != null) {
        this.auth = true;
        this.authState$.next(this.auth);
        this.userData$.next(user);
      }
    });
  }

  // login user with email and password
  loginUser(email: string, password: string){
    this.httpClient.post(`${this.SERVER_URL}/auth/login`, {email, password})
      .subscribe((data: ResponseModel): void => {
        this.auth = data.auth;
        this.authState$.next(this.auth);
        this.userData$.next(data);
      });
  }

  // google authentication
  googleLogin(): void {
    // console.log("user service: google login");
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  logout(): void {
    this.socialAuthService.signOut();
    this.auth = false;
    this.authState$.next(this.auth);
  }

}

export interface ResponseModel {
  token: string;
  auth: boolean;
  email: string;
  username: string;
  fname: string;
  lname: string;
  photoUrl: string;
  userId: number;
}
