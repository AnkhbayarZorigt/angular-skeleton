import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'checkbox-component',
  templateUrl: 'checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckComponent {

}
