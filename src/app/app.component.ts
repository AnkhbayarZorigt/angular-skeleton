import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { PetsService } from "./services/products/pets.service";
import { Subject, take, takeUntil, tap } from "rxjs";
import { NotificationService } from "./services/notification.service";
// import { CandiesService } from "./services/products/candies.service";
// import { PastryService } from "./services/products/pastry.service";

// type Product = {
//   id: string;
//   name: string;
//   allergens?: string[];
// };

// type LoginForm = {
//   email: string;
//   password: string;
// };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private destroyStream$ = new Subject<void>()

  // notificationMessage = this.notificationService.getNotification();

  notificationMessage = "";

  constructor(private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.notificationService
      .getNotification()
      .pipe(takeUntil(this.destroyStream$))
      .subscribe((value: string) => {
        this.notificationMessage = value;
      });
  }

  ngOnDestroy() {
   this.destroyStream$.next();
   this.destroyStream$.complete();
  }

  // // definice formulare
  // loginForm = this.formBuilder.group({
  //   email: ["", [Validators.required]],
  //   password: ["", [Validators.required]],
  // });
  //
  // pets = this.petsService.get();
  //
  // // Dependency injection
  // constructor(
  //   private formBuilder: FormBuilder,
  //   private petsService: PetsService,
  // ) {
  // }
  //
  // get email() {
  //   return this.loginForm.get("email") as FormControl;
  // }
  //
  // get password() {
  //   return this.loginForm.get("password") as FormControl;
  // }
  //
  // onSubmit(values: LoginForm) {
  //   console.log(values);
  // }


  // pastries = this.pastryService.get();

  // candies = this.candiesService.get();

  // constructor(
  //   private candiesService: CandiesService,
  //   private pastryService: PastryService,
  // ) {
  // }
}
