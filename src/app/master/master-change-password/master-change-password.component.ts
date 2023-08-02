import { Component, OnInit } from '@angular/core';
import { UserService } from "../../master-services/User/user.service";
import swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-master-change-password',
  templateUrl: './master-change-password.component.html',
  styleUrls: ['./master-change-password.component.scss']
})
export class MasterChangePasswordComponent implements OnInit {
  tokeninfo: any;
  constructor(private userService: UserService,
    private activatedroute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
  }

  changePassword(password: string, confirmpassword: string) {
    alert(localStorage.getItem('email'));
    swal({
      title: 'Procesando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    if (password != confirmpassword) {
      swal.close();
      swal({
        title: "error",
        text: "las contraseñas no coinciden.",
        type: "error",
        allowOutsideClick: false
      })
    } else {
      this.userService.changePassword(localStorage.getItem('email'), password, confirmpassword, "").then(data => {
        const resp: any = data;
        if (resp.error) {
          swal.close();
          swal({
            title: 'Error',
            text: 'Ha ocurrido un error',
            type: 'error'
          });
        } else {
          swal.close();
          swal({
            title: 'Realizado correctamente',
            text: 'Se ha cambiado sucontraseña correctamente!',
            type: 'success'
          });
        }
      }).catch(error => {
        swal.close();
        swal({
          title: 'Error',
          text: 'Ha ocurrido un error',
          type: 'error'
        });
        console.log(error);
      })

    }
  }

}
