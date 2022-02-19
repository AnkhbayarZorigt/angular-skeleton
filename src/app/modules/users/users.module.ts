import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";

import { CreateUserComponent } from "./views/create-user/create-user.component";
import { EditUserComponent } from "./views/edit-user/edit-user.component";
import { ListUserComponent } from "./views/list-user/list-user.component";
import { UserLayoutComponent } from "./components/user-layout/user-layout.component";
import { AuthGuard } from "../../guards/auth.guard";
import { CommonModule } from "@angular/common";
import { UserPipe } from "./pipes/user.pipe";
import { DeleteUserComponent } from "./views/delete-user/delete-user.component";
import { HttpClientModule } from "@angular/common/http";

const routes: Route[] = [
  {
    path: '',
    component: UserLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ListUserComponent,
      },
      {
        path: 'create',
        component: CreateUserComponent,
      },
      {
        path: ':id',
        component: EditUserComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, HttpClientModule],
  exports: [],
  declarations: [
    CreateUserComponent,
    EditUserComponent,
    ListUserComponent,
    UserLayoutComponent,
    DeleteUserComponent,
    UserPipe,
  ],
  providers: [],
})
export class UsersModule {
}
