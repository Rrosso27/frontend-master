import { Component, OnInit, Input } from '@angular/core';
import { NgModel } from "@angular/forms";
import { UserService } from "../../master-services/User/user.service";
import swal from 'sweetalert2';

@Component({
  selector: 'app-master-forget-password',
  templateUrl: './master-forget-password.component.html',
  styleUrls: ['./master-forget-password.component.scss']
})
export class MasterForgetPasswordComponent implements OnInit {
  isMobile: boolean;
  email:string;

  constructor(private userService:UserService) {
    this.isMobile = false;
    this.email="";
   }

  ngOnInit() {
    if (screen.width < 780) {
      this.isMobile = true;
    }
  }

  sendRecoveryEmail(email:string){
    swal({
      title: 'Procesando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    this.email=email;
    this.userService.recoveryPassword(this.email).then(data => {
      const resp: any = data;
      if (resp.error) {
        swal({
          title:'Error',
          text: 'Ha ocurrido un error',
          type: 'error'
         });
      } else {
        if(data=="No podemos encontrar un usuario con esa dirección de correo electrónico."){
          swal.close();
          swal({
            title:'Correo no encontrado',
            text: 'No podemos encontrar un usuario con esa dirección de correo electrónico.!',
            type: 'error'
           });
        }else{
          swal.close();
          swal({
            title:'Realizado correctamente',
            text: 'Hemos enviado su enlace de restablecimiento de contraseña por correo electrónico!',
            type: 'success'
           });
        }
    }
    }).catch(error => {
      swal.close();
      swal({
        title:'Error',
        text: 'Ha ocurrido un error',
        type: 'error'
       });
      console.log(error);
    });
  }

}
