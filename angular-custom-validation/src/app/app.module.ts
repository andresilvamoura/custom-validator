import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateDrivenFormExampleComponent } from './template-driven-form-example.component';
import { PhoneNumberValidatorDirective } from './phone-number-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    PhoneNumberValidatorDirective,
    TemplateDrivenFormExampleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }