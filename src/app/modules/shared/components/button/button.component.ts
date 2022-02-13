import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: 'button.component.html',
  styleUrls: ['button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() label = "";

  @Input() type = "";

  @Input() disabled = false;

  @Input() fullWidth = false;
}
