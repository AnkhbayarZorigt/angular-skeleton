import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { InputComponent } from "./components/input/input.component";
import { ButtonComponent } from "./components/button/button.component";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [InputComponent, ButtonComponent],
  declarations: [InputComponent, ButtonComponent],
  providers: [],
})
export class SharedModule {
}
