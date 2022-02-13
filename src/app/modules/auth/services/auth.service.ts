import { of } from "rxjs";

export function wait(time: number) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Done');
    }, time);
  });
}

export class AuthService {
  login(values: any) {
    // Ukladani jwt tokenu nebo prace s cookies
    localStorage.setItem('token', 'nejlepsi token');
    console.log(values, 'SEND to api');
    return of("@TODO send to API");
  }
}
