import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { SystemsService } from '../../master-services/systems/systems.service';

@Component({
  selector: 'app-master-maintenance-system',
  templateUrl: './master-maintenance-system.component.html',
  styleUrls: ['./master-maintenance-system.component.scss',
  '../../../assets/icon/icofont/css/icofont.scss']
})
export class MasterMaintenanceSystemComponent implements OnInit {

  myForm: FormGroup;
  myFormUpdate: FormGroup;

  rowsWork: any;
  rowtodelete:any;
  description:any;
  currentSystem:any;

  submitted = false;
  submittedUpdated = false;

  constructor(private router:Router,private systemService:SystemsService) { 

    const description = new FormControl('', Validators.required);

    const descriptionUpdate  = new FormControl('', Validators.required);


    this.myForm = new FormGroup({
      description: description, 
    });
 
    this.myFormUpdate = new FormGroup({
     descriptionUpdate: descriptionUpdate,
   });
  

    this.getWorks();
  }
  
  getWorks() {
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    this.systemService.getSystem().then(data => {
      const resp: any = data;
      if (resp.error) {
        swal({
          title:'Error',
          text: 'Ha ocurrido un error',
          type: 'error'
         });
      } else {
        console.log(data);
        this.rowsWork = resp.data;
        console.log( this.rowsWork);
        swal.close();
    }
    }).catch(error => {
      swal({
        title:'Error',
        text: 'Ha ocurrido un error',
        type: 'error'
       });
      console.log(error);
    });
  }

  sendSystem() {
    console.log('Ole ole ole');
    console.log(this.description);

     if ( !this.myForm.invalid) {
      this.submitted = true;
      swal({
        title: 'Validando información ...',
        allowOutsideClick: false
      });
      swal.showLoading();

      this.systemService.storeSystem(this.myForm.get('description').value).then(data => {
        const resp: any = data;
        console.log(resp);
        if (resp.success === false) {
          if(resp.status == 1){
            swal({
              title: 'Este sistema ya esta registrado',
              text: 'Este sistema no se pudo registrar',
              type: 'error'
             });
          }
          if(resp.status == 2){
            swal({
              title: 'Ha ocurrido un error',
              text: 'Este sistema no se pudo registrar',
              type: 'error'
             });
          }
        } else {
          console.log('Cambio');
          document.getElementById('createRegionalHide').click();
          this.getWorks();
          this.myForm.reset();
          swal({
            title: 'Sistema agregado',
            type: 'success'
          });
        } 
      }).catch(error => {
        console.log(error);
        swal({
          title: 'Ha ocurrido un error',
          text: 'Este sistema no se pudo registrar',
          type: 'error'
         });
      });
  
    } else {
      swal({
        title: 'Debe llenar todos los campos obligatorios',
        text: 'Debe llenar todos los campos obligatorios',
        type: 'error'
       });
    }
  }

  
  updateSys(row) {
    console.log(row);
    this.currentSystem = row;
    this.myFormUpdate.get('descriptionUpdate').setValue(row.description);
    document.getElementById( 'updateReg').click();
   }

  updatedRegional() {

    if ( !this.myFormUpdate.invalid) {
      this.submittedUpdated = true;
      swal({
        title: 'Validando información ...',
        allowOutsideClick: false
      });
      swal.showLoading();

  
      this.systemService.updateSystem(Number(this.currentSystem.id), this.myFormUpdate.get('descriptionUpdate').value.toUpperCase())
      .then(data => {
        const resp: any = data;
        console.log(JSON.stringify(resp));
        if (resp.success === false) {
          if(resp.status == 1){
            swal({
              title: 'Este sistema ya esta registrado',
              text: 'Este sistema no se pudo actualizar',
              type: 'error'
             });
          }
          if(resp.status == 2){
            swal({
              title: 'Falla en la actualizacion',
              text: 'Este sistema no se pudo actualizar',
              type: 'error'
             });
          }
        } else {
          console.log('Cambio');
          document.getElementById('updateBrandHide').click();
          this.getWorks();
     swal({
      title: 'Sistema actualizado.',
      type: 'success'
     });
      }
      }).catch(error => {
        console.log(error);
        swal({
          title: 'Ha ocurrido un error',
          text: 'Este sistema no se pudo actualizar',
          type: 'error'
         });
      });
      
    } else {
      swal({
        title: 'Debe llenar todos los campos obligatorios',
        text: 'Debe llenar todos los campos obligatorios',
        type: 'error'
       });
    }
  }
  
  deleteWorkHeader(workrow:any){
    swal({
      title:"Confirmación",
      text:"Esta seguro que desea borrar este elemento?",
      cancelButtonText:"No",
      confirmButtonText:"Si",
      showCancelButton:true,
      showConfirmButton:true
    }).then(goingtodelete=>{
      if (goingtodelete.value) {
        this.loader();
        this.rowtodelete=workrow;
        console.log(this.rowtodelete);
        this.systemService.deleteSystem(this.rowtodelete.id).then(data=>{
          const resp:any=data;
          if (resp.success==false){
            this.generalAlert('Error','Ocurrio un error durante el procesado',"error");
          }else{
              this.generalAlert('Sistema eliminado','Sistema eliminado correctamente','success');
              this.getWorks();
          }
        }).catch(err=>{
          console.log(err);
          this.generalAlert('Error','Ocurrio un error durante el procesado',"error");
        });
      } else {
        console.log("Proceso cancelado");
      }
    });
  }

  generalAlert(title:string,text:string,type:any){
    swal({
      title:title,
      text:text,
      type:type
    })
  }

  loader(){
    swal({
      title:"Procesando información",
      allowEscapeKey:false,
      allowOutsideClick:false
    });
    swal.showLoading();
  }

  get checkForm() { return this.myForm.controls; }
  get checkFormUpdate() { return this.myFormUpdate.controls; }

  ngOnInit() {
  }

}
