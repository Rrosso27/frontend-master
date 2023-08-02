import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { RestService } from '../../master-services/Rest/rest.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-master-fuel',
  templateUrl: './master-fuel.component.html',
  styleUrls: ['./master-fuel.component.scss',
  '../../../assets/icon/icofont/css/icofont.scss']
})
export class MasterFuelComponent implements OnInit {
  myForm: FormGroup;
  myFormUpdate: FormGroup;
  submitted = false;
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
  enabledCreated = true;

  filterIndicatorText = false;
  filterIndicatorCheck = false;

  rowsTempCheck: any;
  rowsTempText: any;

 
  currentFuel: any;
  selectedValueTemp = '0';
  selectedValueUpdate=1;
  selectedValue: any=1;

  constructor(private restService: RestService, private router: Router) {

    this.loadingData();
    const description = new FormControl('', Validators.required);
    const descriptionUpdate = new FormControl('', Validators.required);
    const type = new FormControl('');
    const typeUpdate = new FormControl('');

    this.myForm = new FormGroup({
      description: description,
      type: type
    });

    this.myFormUpdate = new FormGroup({
      descriptionUpdate: descriptionUpdate,
      typeUpdate: typeUpdate
    });
   }


   loadingData() {
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();

    this.restService.getFuels().then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.rowsClient = resp.data;
      this.rowStatic =  resp.data;
      this.rowsTemp = resp.data;
      console.log( this.rowsClient);
    }).catch(error => {
      console.log(error);
    });
   }
   updateFilter(event) {
    const val = event.target.value.toLowerCase();
    // filter our data

    if (val === '') {
      console.log('vacio');
      this.filterIndicatorText = false;
      this.rowsTemp = this.rowStatic;
    }

    // this.filterIndicatorCheck = true;
    if (this.inactive === true ||  this.active === true) {
      this.rowsTemp = this.rowsTempCheck;
    }
    const temp = this.rowsTemp.filter(function(d) {
      return d.description.toLowerCase().indexOf(val) !== -1 || !val;
    });

    if (val !== '') {
      this.filterIndicatorText = true;
      this.rowsTempText = temp;
    }

    // update the rows
    this.rowsClient = temp;

  }


  updateFilterActiveInactive(active: string) {
    const val = active;

    // filter our data

    if (this.filterIndicatorText === true) {
      this.rowsTemp = this.rowsTempText;
    } else {
      console.log('vacio por este lado');
      this.rowsTemp = this.rowStatic;
    }

    const temp = this.rowsTemp.filter(function(d) {
      return d.status.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows

    if (this.inactive === true ||  this.active === true) {
      this.rowsTempCheck = temp;
      this.filterIndicatorCheck = true;
    }

    this.rowsClient = temp;
  }


  onChangeCreate(check: any) {
   this.change = check;
    console.log(check);
  }

  onChangeUpdate(check: any) {
    this.switchUpdate = check;
    this.enabledUpdated = check;

    console.log(check);
  }


  ChangingValue() {
    this.selectedValueTemp = this.selectedValue;
    console.log(this.selectedValueTemp);
    console.log(this.selectedValue);
  }

  ChangingValue2() {
    this.selectedValueUpdate = this.selectedValue;
    console.log(this.selectedValueTemp);
    console.log(this.selectedValue);
  }
  onChangeActive(d) {
    let indice;
    if (this.active === false ) {
      this.active = true;
      if (this.inactive === true ) {
        indice = '';
      } else {
        indice = '0';
      }
      this.updateFilterActiveInactive(indice);
    } else {
      this.active = false;
      if (this.inactive === true ) {
        indice = '1';
      } else {
        indice = '';
      }
      this.updateFilterActiveInactive(indice);
    }
  }


  onChangeInactive(d) {
    let indice;
    if (this.inactive === false ) {
      this.inactive = true;
      if (this.active === true ) {
        indice = '';
      } else {
        indice = '1';
      }
      this.updateFilterActiveInactive(indice);
    } else {
      this.inactive = false;
      if (this.active === true ) {
        indice = '0';
      } else {
        indice = '';
      }
      this.updateFilterActiveInactive(indice);
    }
  }

updateFuel(fuel) {
  console.log(fuel);
  this.currentFuel = fuel;
  console.log( this.currentFuel );
  this.myFormUpdate.get('descriptionUpdate').setValue(fuel.description);
  console.log(fuel);
if (fuel.type === 'COMBUSTION') {
  this.selectedValueUpdate = 1;
} else if (fuel.type === 'ELECTRICA') {
  this.selectedValueUpdate = 2;
} else {
  this.selectedValueUpdate = 3;
}

console.log(this.selectedValueUpdate);

  if (this.currentFuel.status === '0') {
    this.enabledUpdated = true;
  } else {
    this.enabledUpdated = false;
  }

  document.getElementById( 'uploadBrand').click();

}

   sendFuel() {

    if ( this.selectedValue !== '0') {
    this.submitted = true;
   if ( !this.myForm.invalid) {
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();

    let statusTemp = 0;
    console.log(this.enabledCreated);
    if (this.enabledCreated === true) {

      statusTemp = 0;
    } else {
      statusTemp = 1;
    }
    this.restService.createFuel(this.myForm.get('description').value.toUpperCase(), '1', statusTemp)
    .then(data => {
      const resp: any = data;
      console.log(resp);
      if (resp.success === false) {
        swal({
          title: 'Este combustible ya esta registrado',
          text: 'Este combustible no se puede registrar',
          type: 'error'
         });
      } else {

        this.myForm.get('description').setValue('');
        this.selectedValue = '1';
     /*swal({
      title: 'Combustible agregada',
      type: 'success'
     });*/
   //   this.router.navigateByUrl('master/registerBrand');

   document.getElementById( 'createBrandHide').click();
   this.loadingData();
   swal({
    title: 'Combustible agregada',
    type: 'success'
   });
    }
    }).catch(error => {
      console.log(error);
    });
    }
  } else {
    swal({
      title: 'Por favor seleccionar un tipo',
      text: 'Debe seleccionar un tipo',
      type: 'error'
     });
  }
  }

  onChangeSelect() {
    this.selectedValueTemp = '1';
    this.selectedValue = '1';
    console.log('cambio');
    this.enabledCreated = true;
  }

  sendUpdateUpdate() {
    console.log(this.selectedValueUpdate);
    if (Number(this.selectedValueUpdate) !== 0) {
    console.log(this.myFormUpdate.get('descriptionUpdate'));
    console.log(localStorage.getItem('token'));
    this.submitted = true;
   if ( !this.myFormUpdate.invalid) {
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();

    let statusTemp = 1;

    if (this.change  === true) {
      statusTemp = 0;
    } else {
      statusTemp = 1;
    }

    let descriptionType;

    if (Number(this.selectedValueUpdate) === 1) {
    descriptionType = 'COMBUSTION';
    console.log('Entroaaa');
    } else if (Number(this.selectedValueUpdate) === 2) {
    descriptionType = 'ELECTRICA';
    console.log('Entrosss');
    } else {
    descriptionType = 'POR DEFINIR';
    console.log('Entrodddd');
    }

    console.log(descriptionType + 'porque' + this.selectedValueUpdate );

    console.log(this.myFormUpdate.get('descriptionUpdate').value.toUpperCase() + ' ' + statusTemp);
    this.restService.updateFuel(Number(this.currentFuel.id),
     this.myFormUpdate.get('descriptionUpdate').value.toUpperCase(), '1', statusTemp)
    .then(data => {
      const resp: any = data;
      console.log(resp);
      if (resp.success === false) {
        swal({
          title: 'Este combustible ya esta actualizado',
          text: 'Este combustible no se puede actualizar',
          type: 'error'
         });
      } else {
     // this.router.navigateByUrl('master/registerBrand');
     document.getElementById( 'updateBrandHide').click();
     this.loadingData();
     swal({
      title: 'Combustible actualizada',
      type: 'success'
     });
    }
    }).catch(error => {
      console.log(error);
    });
    }

  } else {
    swal({
      title: 'Por favor seleccionar un tipo',
      text: 'Debe seleccionar un tipo',
      type: 'error'
     });
  }
  }

  get checkForm() { return this.myForm.controls; }
  get checkFormUpdate() { return this.myFormUpdate.controls; }


  deleteBrand(fuel: any) {
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
          this.elementDelete = fuel;
          console.log(fuel);
          console.log(    this.elementDelete);
          swal.showLoading();
          this.restService.deleteFuel(Number(this.elementDelete.id))
          .then(data => {
            swal.showLoading();
            const resp: any = data;
            console.log(resp);

            if (resp.success === false) {
              swal({
                title: 'Este combustible presenta problemas',
                text: 'Este combustible no se puede eliminar',
                type: 'error'
               });
            } else {
           // this.router.navigateByUrl('master/registerBrand');
           this.loadingData();
           swal({
            title: 'Combustible eliminada',
            type: 'success'
           });
          }
          }).catch(error => {
            console.log(error);
          });
          console.log(this.elementDelete.id);
        } else {
         // swal('Fail');
        }
      console.log(willDelete);
    });



  }

  ngOnInit() {
  }

  blockAgents( vadr: any) {
   console.log(vadr);
  }

}
