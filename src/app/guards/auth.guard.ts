import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { NotificationService } from "../services/notification.service";

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private notificationService: NotificationService,
  ) {
  }

  canActivate() {
    const token = localStorage.getItem('token');

    if (!token) {
      this.notificationService.notify("You don't have permissions to enter");
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
