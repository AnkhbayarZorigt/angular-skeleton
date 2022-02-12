import { Component } from '@angular/core';
import { CandiesService } from "./services/products/candies.service";
import { PastryService } from "./services/products/pastry.service";

type Product = {
  id: string;
  name: string;
  allergens?: string[];
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  pastries = this.pastryService.get();

  candies = this.candiesService.get();

  constructor(
    private candiesService: CandiesService,
    private pastryService: PastryService,
  ) {
  }
}
