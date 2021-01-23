import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.scss']
})
export class CreateEditUsersComponent implements OnInit {
  hide = true;

  createEditForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    profile: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
   });

  constructor() { }

  ngOnInit(): void {
  }

  createUser() {
    if(this.createEditForm.valid){
      Swal.fire({
        icon: 'success',
        title: 'Uuup...',
        text: 'Salvo com sucesso',
      });
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Ops...',
        text: 'Preencha todos os campos!',
      });
    }
   }

}
