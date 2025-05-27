import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  // FormControl,
  // FormGroup,
  FormsModule,
  NgForm,
  // NgForm,
  // ReactiveFormsModule,
  // Validators,
} from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  imports: [FormsModule, NgIf],
  templateUrl: './basic-form.component.html',
  styleUrl: './basic-form.component.css',
})
export class BasicFormComponent {
  // for basic from
  // name = new FormControl('', [Validators.required]);
  // password = new FormControl('');
  // for form group
  // myForm = new FormGroup({
  //   name: new FormControl('', [Validators.required]),
  //   password: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(6),
  //   ]),
  //   email: new FormControl('', [Validators.required, Validators.maxLength(20)]),
  // });
  // onSubmit() {
  //   console.log('values', this.myForm.value);
  //   this.myForm.reset();
  // }
  // get name() {
  //   return this.myForm.get('name');
  // }
  // get password() {
  //   return this.myForm.get('password');
  // }
  // get email() {
  //   return this.myForm.get('email');
  // }
  // for template driven form
  // userDetails: Object = {};
  onSubmit(value: NgForm) {
    console.log('values', value);
    // this.myForm.reset();
  }
}
