import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class PetsService {

  get() {
    return of([
      {
        id: 'xxx',
        name: "Eddy",
        type: "Dog",
      },
      {
        id: 'yyy',
        name: "Pepik",
        type: "Parrot",
      },
    ]);
  }
}
