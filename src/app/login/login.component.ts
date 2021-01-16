import { Component, OnInit, ɵSWITCH_TEMPLATE_REF_FACTORY__POST_R3__ } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  login(){
    if (this.loginForm.valid){
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
