import { Observable, of } from "rxjs";

import { Product } from "./types";

export class PastryService {
  get(): Observable<Product[]> {
    return of([
      {
        id: "xxx",
        name: "Roll",
      },
      {
        id: "yyy",
        name: "Bread",
        allergens: ["neco", "neco jineho"],
      },
      {
        id: "zzz",
        name: "Croissant",
      },
      {
        id: "ggg",
        name: "Cake",
      },
    ]);
  }
}
