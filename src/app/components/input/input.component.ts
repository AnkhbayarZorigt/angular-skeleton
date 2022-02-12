import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: 'input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
}
