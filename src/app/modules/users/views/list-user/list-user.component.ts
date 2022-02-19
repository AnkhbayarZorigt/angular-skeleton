import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: 'list-user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListUserComponent {
  users = [
    {
      firstName: "Jozka",
      lastName: "Kukuricudus",
      balance: "1000",
      date: "2022-02-13T13:20:00.854Z",
    },
    {
      firstName: "Giovanni",
      lastName: "Seredovanni",
      balance: "1500",
      date: "2022-02-13T13:20:00.854Z",
    },
  ];
}
