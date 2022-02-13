import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Route, RouterModule } from "@angular/router";

import { LoginComponent } from "./views/login/login.component";
import { RegisterComponent } from "./views/register/register.component";
import { SharedModule } from "../shared/shared.module";
import { AuthService } from "./services/auth.service";

const routes: Route[] = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
  ],
  exports: [],
  providers: [AuthService],
  declarations: [LoginComponent, RegisterComponent],
})
export class AuthModule {
}
