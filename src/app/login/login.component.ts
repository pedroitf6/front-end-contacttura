import { Component, OnInit, ɵSWITCH_TEMPLATE_REF_FACTORY__POST_R3__ } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import {ErrorStateMatcher} from '@angular/material/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    usernameFormControl: new FormControl('', [Validators.required, Validators.email]),
    passwordFormControl: new FormControl('', [Validators.required]),
  });

  usernameFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  constructor(public router: Router) {
    console.log('login');
  }

  ngOnInit(): void {
  }

  login(){
    if (this.loginForm.valid){
      localStorage.setItem('token', 'futurasupertope');
      localStorage.setItem('admin', 'true');
      this.router.navigate(['/contacts-list']);
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Login ou senha inválidos',
      });
    }
  }

}
