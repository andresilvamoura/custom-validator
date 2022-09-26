import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateDrivenFormExampleComponent } from './template-driven-form-example.component';
import { PhoneNumberValidatorDirective } from './phone-number-validator.directive';
import { ReactiveFormExampleComponent } from './reactive-form-example.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneNumberValidatorDirective,
    TemplateDrivenFormExampleComponent,
    ReactiveFormExampleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }