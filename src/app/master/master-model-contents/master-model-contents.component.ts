import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { BrandService } from '../../master-services/brand/brand.service';
@Component({
  selector: 'app-master-model-contents',
  templateUrl: './master-model-contents.component.html',
  styleUrls: ['./master-model-contents.component.scss',
    '../../../assets/icon/icofont/css/icofont.scss']
})
export class MasterModelContentsComponent implements OnInit {

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
  currentmachine: any;
  currentstatus: number;
  currentupdatestatus: number;
  selectedValueTemp = '0';
  selectedValueUpdate: any;
  selectedValue: any;
  selectedUpdate: any;
  changeupdate: any;
  brands: any;

  constructor(private brand:BrandService, private router: Router) {


    this.loadingData();
    const description = new FormControl('', Validators.required);
    const descriptionUpdate = new FormControl('', Validators.required);
    const type = new FormControl('', Validators.required);
    const typeUpdate = new FormControl('', Validators.required);

    this.myForm = new FormGroup({
      description: description,
      type: type
    });

    this.myFormUpdate = new FormGroup({
      descriptionUpdate: descriptionUpdate,
      typeUpdate: typeUpdate
    });
  }


  loadingBrand() {
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();

    this.brand.getBrandAll().then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.brands = resp.data;
      console.log(this.brands);
    }).catch(error => {
      console.log(error);
    });
  }

  loadingData() {
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();

    this.brand.getModelAll().then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.rowsClient = resp.data;
      this.rowStatic = resp.data;
      this.rowsTemp = resp.data;
      console.log(this.rowsClient);
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
    if (this.inactive === true || this.active === true) {
      this.rowsTemp = this.rowsTempCheck;
    }
    const temp = this.rowsTemp.filter(function (d) {
      return d.description.toLowerCase().indexOf(val) !== -1 || !val;
    });

    if (val !== '') {
      this.filterIndicatorText = true;
      this.rowsTempText = temp;
    }

    // update the rows
    this.rowsClient = temp;

  }

  onChangeCreate(check: any) {
    this.change = check;
    if (this.change) {
      this.currentstatus = 1;
    } else {
      this.currentstatus = 0;
    }
    console.log(this.currentstatus);
    console.log(check);
  }

  ChangingValue() {
    console.log(this.selectedValue);
    this.selectedValueTemp = this.selectedValue;
    console.log(this.selectedValueTemp);
    console.log(this.selectedValue);
  }

  ChangingValue2() {
    this.selectedValueUpdate = this.selectedValue;
    console.log(this.selectedValueTemp + 'ole');
    console.log(this.selectedValue);
  }

  updateFuel(fuel) {
    console.log(fuel);
    this.currentFuel = fuel;
    console.log(this.currentFuel.description);
    this.myFormUpdate.get('descriptionUpdate').setValue(this.currentFuel.description);
    console.log(this.myFormUpdate.get('descriptionUpdate'));
    
    this.loadingBrand();
    console.log(fuel.brand_id);
    this.selectedUpdate = String(fuel.brand_id); // String(fuel.brand_id) ;
    document.getElementById('uploadBrand').click();
  }

  sendModel() {

    if (this.selectedValue !== '0') {
      this.submitted = true;
      if (!this.myForm.invalid) {
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
        this.brand.storeModel(Number(this.selectedValue.id),this.myForm.get('description').value.toUpperCase())
          .then(data => {
            const resp: any = data;
            console.log(resp);
            if (resp.success === false) {
              swal({
                title: 'Este modelo no se puede registrar.',
                text: 'Este modelo ya se encuentra registrado con esta marca.',
                type: 'error'
              });
            } else {

              this.myForm.get('description').setValue('');
              this.selectedValue = '0';
              document.getElementById('createBrandHide').click();
              this.loadingData();
              swal({
                title: 'Modelo agregado',
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
    this.selectedValueTemp = '0';
    this.selectedValue = '0';
    console.log('cambio');
    this.enabledCreated = true;
    this.loadingBrand();
  }
  sendUpdateUpdate() {
    if (Number(this.selectedUpdate) !== 0) {
      console.log(this.myFormUpdate.get('descriptionUpdate'));
      console.log(this.change);
      this.submitted = true;
      if (!this.myFormUpdate.invalid) {
        swal({
          title: 'Validando información ...',
          allowOutsideClick: false
        });
        swal.showLoading();

        let description = this.myFormUpdate.get('descriptionUpdate').value.toUpperCase();
        let status = 1;
        if (this.enabledUpdated) {
          status = 0;
        }
        console.log(description);
        this.brand.updateModel(this.currentFuel.id, description, Number(this.selectedUpdate))
          .then(data => {
            const resp: any = data;
            console.log(resp);
            if (resp.success === false) {
              swal({
                title: 'Esta modelo ya esta actualizado',
                text: 'Esta modelo no se puede actualizar',
                type: 'error'
              });
            } else {
              // this.router.navigateByUrl('master/registerBrand');
              document.getElementById('updateBrandHide').click();
              this.loadingData();
              swal({
                title: 'Modelo actualizado',
                type: 'success'
              });
            }
          }).catch(error => {
            console.log("error en el consumo");
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
          console.log(this.elementDelete);
          swal.showLoading();
          this.brand.deleteModel(Number(this.elementDelete.id))
            .then(data => {
              swal.showLoading();
              const resp: any = data;
              console.log(resp);

              if (resp.success === false) {
                swal({
                  title: 'Este modelo presenta problemas',
                  text: 'Este modelo no se puede eliminar',
                  type: 'error'
                });
              } else {
                // this.router.navigateByUrl('master/registerBrand');
                this.loadingData();
                swal({
                  title: 'Modelo eliminado',
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

}
