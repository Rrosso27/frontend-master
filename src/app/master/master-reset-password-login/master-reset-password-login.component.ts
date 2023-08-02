
import { UserService } from "../../master-services/User/user.service";
import { NgModel } from "@angular/forms";
import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-master-reset-password-login',
  templateUrl: './master-reset-password-login.component.html',
  styleUrls: ['./master-reset-password-login.component.scss']
})
export class MasterResetPasswordLoginComponent implements OnInit {

  tokeninfo:any;
  user:any;
  userId:any;
  username:any;
  email:string;
  isMobile: boolean;
  info:any;
  cansend:boolean;
  constructor(private userService:UserService,
    private router:Router) { 
    this.isMobile = false;
    this.email="";
    this.cansend=false;
  }

  ngOnInit() {
    this.user = localStorage.getItem('user');
    this.userId = localStorage.getItem('userid');
    this.username = localStorage.getItem('username');
   /* swal({
      title: 'Procesando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();*/
    if (screen.width < 780) {
      this.isMobile = true;
    }
    
  /*  this.activatedroute.paramMap.subscribe(data=>{
      this.tokeninfo=data.get('token');
      console.log(this.tokeninfo);
    });
    this.userService.findToken(this.tokeninfo).then(data=>{
      swal.close();
      if(data=="Este token de restablecimiento de contraseña no es válido."){
        swal({
          title:'Token no valido',
          text: 'Este token de restablecimiento de contraseña no es válido.!',
          type: 'error'
         });
      }else{
        this.info=data;
        console.log(this.info.email);
        this.cansend=true;
      }
    }).catch(err=>{
      console.log('error en consumo servicio');
      swal.close();
      swal({
        title:'Error',
        text: 'Ha ocurrido un error',
        type: 'error'
       });
    });*/
  }

  restartPassword(){

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
        console.log(data);
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

  changePassword(password:string,confirmpassword:string){
    this.user = localStorage.getItem('user');
  //  if (this.cansend==true) {
          swal({
            title: 'Procesando información ...',
            allowOutsideClick: false
          });
          swal.showLoading();

          console.log(password+'-'+confirmpassword);
          if (password!=confirmpassword) {
            swal.close();
            swal({
              title:"error",
              text:"las contraseñas no coinciden.",
              type:"error",
              allowOutsideClick:false
            })
          } else {
            // email:string,password:string,token:string,rpassword:string
            this.userService.changePasswordLogin(this.userId, password).then(data=>{
              const resp:any=data;
              if (resp.error) {
                swal.close();
                swal({
                  title:'Error',
                  text: 'Ha ocurrido un error',
                  type: 'error'
                });
              } else {
                swal.close();
                swal({
                  title:'Realizado correctamente',
                  text: 'Se ha cambiado sucontraseña correctamente!',
                  type: 'success'
                });
             this.router.navigateByUrl('masterauth');
              }
              console.log(resp);
            }).catch(error=>{
              swal.close();
              swal({
                title:'Error',
                text: 'Ha ocurrido un error',
                type: 'error'
              });
              console.log(error);
            })
            
          }
    /*} else {
      swal({
        title:'Token no valido',
        text: 'Este token de restablecimiento de contraseña no es válido.!',
        type: 'error'
       });
    }*/
  }

}
