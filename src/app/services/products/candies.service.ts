import { Observable, of } from "rxjs";
import { Injectable } from "@angular/core";

import { Product } from "./types";

@Injectable()
export class CandiesService {
  get(): Observable<Product[]> {
    return of([
      {
        id: "xxx",
        name: "Ice cream",
      },
      {
        id: "yyy",
        name: "Chocolate",
        allergens: ["Milk", "Sugar"],
      },
      {
        id: "zzz",
        name: "Bonbons",
      },
      {
        id: "fff",
        name: "coca-cola",
      },
    ]);
  }
}
