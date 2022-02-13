import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: 'create-user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateUserComponent {
}
