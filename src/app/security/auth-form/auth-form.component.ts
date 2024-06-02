import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit{

  constructor(private formBuilder: FormBuilder) {}
  form: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [
        '',
        {
          validators: [Validators.required, Validators.email]
        }
      ],
      password:[
        '',
        {
          validators: [Validators.required]
        }
      ]
    });
  }

  @Input()
  title: string;
  @Output()
  loadForm: EventEmitter<any> = new EventEmitter<any>

  getMailErrorMessage(){
    var campo = this.form.get('email');
    if (campo.hasError('required')){
      return 'Email field is required';
    }
    if (campo.hasError('email')){
      return 'Not valid email'
    }
    return '';
  }
}
