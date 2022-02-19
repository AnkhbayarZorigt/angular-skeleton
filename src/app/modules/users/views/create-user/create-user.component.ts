import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CompaniesService } from "../../../shared/services/companies.service";

@Component({
  selector: 'app-create-user',
  templateUrl: 'create-user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateUserComponent {
  companies = this.companiesService.get();

  constructor(private companiesService: CompaniesService) {
  }
}
