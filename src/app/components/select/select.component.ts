import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: 'select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent {
}
