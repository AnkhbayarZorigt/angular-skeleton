import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from "./components/button/button.component";
import { InputComponent } from "./components/input/input.component";
import { CheckComponent } from "./components/checkbox/checkbox.component";
import { SelectComponent } from "./components/select/select.component";
import { LayoutComponent } from "./layouts/layout/layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
import { AuthModule } from "./modules/auth/auth.module";
import { TableComponent } from "./components/table/table.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ModalComponent } from "./components/modal/modal.component";
import { TestComponent } from "./test.component";
import { RadioComponent } from "./components/radio/radio.component";
import { ListComponent } from "./components/list/list.component";
import { CandiesService } from "./services/products/candies.service";
import { PastryService } from "./services/products/pastry.service";

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    InputComponent,
    CheckComponent,
    SelectComponent,
    LayoutComponent,
    AuthLayoutComponent,
    TableComponent,
    NavbarComponent,
    ModalComponent,
    TestComponent,
    RadioComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
  ],
  providers: [CandiesService, PastryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
