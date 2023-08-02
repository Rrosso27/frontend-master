import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { RestService } from '../../master-services/Rest/rest.service';
import { EstimateService } from '../../master-services/estimate/estimate.service';

import swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-master-estimate-countries',
  templateUrl: './master-estimate-countries.component.html',
  styleUrls: ['./master-estimate-countries.component.scss',
  '../../../assets/icon/icofont/css/icofont.scss']
})
export class MasterEstimateCountriesComponent implements OnInit {

  myForm: FormGroup;
  myFormUpdate: FormGroup;
  submitted = false;
  submittedUpdate = false;
  rowsClient: any;
  rowsTemp: any;
  rowStatic: any;
  rows: any;
  a: any = 5;
  kilo: any;
  elementDelete: any;

  switchCreate = true;
  switchUpdate = true;
  change = true;
  active = false;
  inactive = false;
  enabledUpdated = false;

  filterIndicatorText = false;
  filterIndicatorCheck = false;

  rowsTempCheck: any;
  rowsTempText: any;

  currentCountry: any;

  constructor(private restService: RestService, private router: Router, private estimateService: EstimateService) {

    this.loadingData();

    const name = new FormControl('', Validators.required);
    const money = new FormControl('', Validators.required);

    const nameUpdate = new FormControl('', Validators.required);
    const moneyUpdate = new FormControl('', Validators.required);


    this.myForm = new FormGroup({
      name: name,
      money:money
    });

    this.myFormUpdate = new FormGroup({
      nameUpdate: nameUpdate,
      moneyUpdate:moneyUpdate
    });
   }


   loadingData() {
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    this.estimateService.getEstimateCountries().then(data => {
      const resp: any = data;

      this.rowsClient = resp.data;
      swal.close();
    }).catch(error => {
      console.log(error);
    });
   }

   sendCountry() {
    this.submitted = true;
   if ( !this.myForm.invalid) {
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();


    this.estimateService.createEstimateCountries(this.myForm.get('name').value.toUpperCase(),
     this.myForm.get('money').value.toUpperCase()).then(data => {
      const resp: any = data;
      if (resp.success === false) {
        swal({
          title: 'Este país ya esta registrado',
          text: 'Este país no se puede registrar',
          type: 'error'
         });
      } else {
        this.myForm.get('name').setValue('');
        this.myForm.get('money').setValue('');
     /*swal({
      title: 'Marca agregada',
      type: 'success'
     });*/
   //   this.router.navigateByUrl('master/registerBrand');

   document.getElementById( 'createCountryHide').click();
   this.loadingData();
   swal({
    title: 'País agregado',
    type: 'success'
   });
    }
    }).catch(error => {
      console.log(error);
    });
    }
  }

  sendUpdateCountry() {
    this.submittedUpdate = true;
   if ( !this.myFormUpdate.invalid) {
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();

    this.estimateService.updateEstimateCountries(Number(this.currentCountry.id), this.myFormUpdate.get('nameUpdate').value.toUpperCase(),
                                               this.myFormUpdate.get('moneyUpdate').value.toUpperCase())
    .then(data => {
      const resp: any = data;
      if (resp.error) {
        swal({
          title: 'Esta país ya esta registrado',
          text: 'Este país no se puede actualizar',
          type: 'error'
         });
      } else {
     // this.router.navigateByUrl('master/registerBrand');
     document.getElementById( 'updateCountryHide').click();
     this.loadingData();
     swal({
      title: 'Marca actualizada',
      type: 'success'
     });
    }
    }).catch(error => {
      console.log(error);
    });
    }
  }

  get checkForm() { return this.myForm.controls; }
  get checkFormUpdate() { return this.myFormUpdate.controls; }



  updateCountry(estimateCountry) {
    this.currentCountry = estimateCountry;
    this.myFormUpdate.get('nameUpdate').setValue(estimateCountry.name);
    this.myFormUpdate.get('moneyUpdate').setValue(estimateCountry.money);
    document.getElementById( 'uploadCountry').click();
  }
  deleteCountry(country: any) {
    swal({
      title: 'Estás seguro de eliminar este elemento?',
     // text: 'Once deleted, you will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      showConfirmButton: true,
      cancelButtonText: 'No',
      confirmButtonText: 'Si'

    })
    .then((willDelete) => {
        if (willDelete.value) {
          this.elementDelete = country;
            swal.showLoading();
          this.estimateService.deleteEstimateCountries(Number(this.elementDelete.id))
          .then(data => {
            swal.showLoading();
            const resp: any = data;
            if (resp.success === false) {
              swal({
                title: 'Este país presenta problemas',
                text: 'Este país no se puede eliminar',
                type: 'error'
               });
            } else {
           // this.router.navigateByUrl('master/registerBrand');
           this.loadingData();
           swal({
            title: 'País eliminada',
            type: 'success'
           });
          }
          }).catch(error => {
            console.log(error);
          });
        } else {
         // swal('Fail');
        }
    });



  }

  ngOnInit() {
  }

  blockAgents( vadr: any) {
  }

}
