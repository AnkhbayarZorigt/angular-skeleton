import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { AuthService, wait } from "../../services/auth.service";
import { catchError, of, take, tap } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {

  loginForm = this.formBuilder.group({
    email: ["", Validators.required],
    password: ["", [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
  }

  get password() {
    return this.loginForm.get('password') as FormControl;
  }

  get email() {
    return this.loginForm.get('email') as FormControl;
  }

  async onSubmit(values: { email: string, password: string }) {
    await wait(500);

    this.authService.login(values)
      .pipe(
        take(1),
        tap(() => {
          this.router.navigate(['/users']);
        }),
        catchError((e: any) => {
          console.error(e);
          return of(e);
        }),
      )
      .subscribe();
    console.log(values);
  }
}
