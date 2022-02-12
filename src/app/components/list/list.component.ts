import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

type Item = {
  id: string;
  name: string;
  allergens?: string[];
};

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
 @Input() products: Item[] = [];

 trackByFn(_: number, product: Item) {
   return product.id;
 }
}
