import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { RestService } from '../../master-services/Rest/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master-create-technicians',
  templateUrl: './master-create-technicians.component.html',
  styleUrls: ['./master-create-technicians.component.scss']
})
export class MasterCreateTechniciansComponent implements OnInit {

  dataMasters: any;
  typeDocuments: any;

  myForm: FormGroup;
  submitted = false;

  check = false;
  enable = false;
  enabledCreated = true;

  currentTechnicianId: any = 0;
  idtechnicanCreated;

  selectedTypeDocumentId: any = 0;
  constructor(private restService: RestService, private router: Router) {
    //this.getMasters(0);
    const name = new FormControl('', Validators.required);
    const typeDocumentId = new FormControl('', Validators.required);
    const document = new FormControl('', Validators.required);
    const cellphone = new FormControl('');

    this.myForm = new FormGroup({
      name: name,
      typeDocumentId: typeDocumentId,
      document: document,
      cellphone: cellphone,
    });
   }

   getMasters(indice: number) {
      this.restService.getMastersTechnicians().then(data => {
        const resp: any = data;
        this.dataMasters = data;
        this.typeDocuments = this.dataMasters.documents;

        swal.close();
      }).catch(error => {
        console.log(error);
      });
}

sendTechnicians() {

  if (Number(this.selectedTypeDocumentId) !== 0) {
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


    this.restService.createTechnicians(this.myForm.get('name').value.toUpperCase(),
    this.myForm.get('document').value, this.myForm.get('cellphone').value)
    .then(data => {
      const resp: any = data;
      this.currentTechnicianId =  resp.data.id;
      if (resp.success === false) {
        swal({
          title: 'Este tecnico ya esta registrado',
          text: 'Este tecnico no se puede registrar',
          type: 'error'
         });
      } else {

        this.idtechnicanCreated = resp.data.id;

   swal({
    title: 'Tecnico agregado',
    type: 'success'
   });

   this.router.navigateByUrl('master/techniansUpdate/' +this.idtechnicanCreated);
    }
    }).catch(error => {
      console.log(error);
    });
    }
  } else {
    swal({
      title: 'Debe seleccionar todos los campos obligatorios',
      text: 'Debe seleccionar todos los campos obligatorios',
      type: 'error'
     });
  }
}
  ngOnInit() {
  }

  get checkForm() { return this.myForm.controls; }
}
