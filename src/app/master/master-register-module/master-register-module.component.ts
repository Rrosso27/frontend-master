import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { RestService } from '../../master-services/Rest/rest.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ModulesService } from '../../master-services/modules/modules.service';

@Component({
  selector: 'app-master-register-module',
  templateUrl: './master-register-module.component.html',
  styleUrls: ['./master-register-module.component.scss',
  '../../../assets/icon/icofont/css/icofont.scss']
})
export class MasterRegisterModuleComponent implements OnInit {


  myForm: FormGroup;

  submitted = false;
  enabledCreated = true;

  currentModuleId: any;
  showButtonUpdated = 0;

  constructor(private moduleService: ModulesService, private router: Router) {

    const description = new FormControl('', Validators.required);

    this.myForm = new FormGroup({
      description: description,
    });
   }

   onChangeCreated(check: any) {
      console.log(check);
     this.enabledCreated = check;
       }

  sendModule() {
    console.log('Ole ole ole');

      this.submitted = true;
     if ( !this.myForm.invalid) {
      swal({
        title: 'Validando información ...',
        allowOutsideClick: false
      });
      swal.showLoading();
  
      let statusTemp = 0;
      if ( this.enabledCreated === false) {
        statusTemp = 1;
      }
  
      this.moduleService.createModule(this.myForm.get('description').value.toUpperCase(),statusTemp)
      .then(data => {
        const resp: any = data;
        console.log(resp);
        console.log('id customer' + resp.data.id);
        this.currentModuleId =  resp.data.id;
        if (resp.success === false) {
          swal({
            title: 'Este Modulo ya esta registrado',
            text: 'Este Modulo no se puede registrar',
            type: 'error'
           });
        } else {
     swal({
      title: 'Modulo agregado',
      type: 'success'
     });
     this.myForm.reset();
     this.router.navigateByUrl('maintenance/moduleUpdate/' +this.currentModuleId);
      }
      }).catch(error => {
        console.log(error);
      });
    } else {
      swal({
        title: 'Debe llenar el campo obligatorio',
        text: 'Debe llenar el campo obligatorio',
        type: 'error'
       });
    }
  }

  get checkForm() { return this.myForm.controls; }

  ngOnInit() {
  }

}
