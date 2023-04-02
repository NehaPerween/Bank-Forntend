import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { loginModel } from '../Model/login';
import { LoginServiceService } from '../services/login/login-service.service';

import { FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   
FormData: FormGroup;
constructor(private builder: FormBuilder) { 
ngOnInit() {
this.FormData = this.builder.group({
Fullname: new FormControl('', [Validators.required]),
Email: newFunction(),
Comment: new FormControl('', [Validators.required])
})
}

    function newFunction(): FormControl<string> {
        return new FormControl('', [Validators.compose([Validators.required, Validators.email])]);
    }
}

function ngOnInit() {
        throw new Error('Function not implemented.');
    }
