import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-example',
  templateUrl: './reactive-form-example.component.html',
  styleUrls: ['./reactive-form-example.component.css']
})
export class ReactiveFormExampleComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      phone: ['', [ValidatePhone]]
    });
  }

  ngOnInit(): void {

  }

  saveForm(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Phone Number', form.value.phone);
  }
}

function ValidatePhone(control: AbstractControl): {[key: string]: any} | null  {
  if (control.value && control.value.length != 10) {
    return { 'phoneNumberInvalid': true };
  }
  return null;
}