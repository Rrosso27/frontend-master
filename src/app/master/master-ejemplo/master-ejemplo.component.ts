import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';

import { RestService } from '../../master-services/Rest/rest.service';

@Component({
  selector: 'app-master-ejemplo',
  templateUrl: './master-ejemplo.component.html',
  styleUrls: ['./master-ejemplo.component.scss',
    '../../../assets/icon/icofont/css/icofont.scss']
})
export class MasterEjemploComponent implements OnInit {
  myForm: FormGroup;
  conditionalPaymentId: number = 0;
  worth: number = 0;
  id: number = 0;
  selectedPaymentMargin: any = 0;
  paymentCondition: any;
  paymentConditions: any;
  paymentMargins: any;

  constructor(private restService: RestService) {

    // this.getPaymentCondition();
    const conditionalPaymentId = new FormControl(this.conditionalPaymentId, Validators.required);
    const worth = new FormControl(this.worth, Validators.required);
    const id = new FormControl('0');
    this.loadingData();
    this.getPaymentCondition();
    this.myForm = new FormGroup({
      conditionalPaymentId: conditionalPaymentId,
      worth: worth,
      id: id,
    });

  }

  loadingData() {
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();

    this.restService.PaymentMargin().then(data => {
      const resp: any = data;
      swal.close();
      this.paymentMargins = resp.data;
    }).catch(error => {
      console.log(error);
    });
  }



  loadingDataById(id:number) {
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();

    this.restService.getByIdPaymentCondition(id).then(data => {
      const resp: any = data;
      this.myForm.get('conditionalPaymentId').setValue(resp.data.conditional_payment_id);
      this.myForm.get('worth').setValue(resp.data.worth);
      this.myForm.get('id').setValue(resp.data.id);
      swal.close();
    }).catch(error => {
      console.log(error);
    });


  }


  getPaymentCondition() {
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();

    this.restService.getPaymentCondition().then(data => {
      const resp: any = data;
      this.paymentConditions = resp.data;
    }).catch(error => {
      console.log(error);
    });
  }


  updateWare(id:number){

  }

  deleteWarehoueses(id:number){
  }

  sendPaymentMargin() {


    if (!this.myForm.invalid) {


      this.restService.activate2(this.myForm.get('conditionalPaymentId').value,
        this.myForm.get('worth').value, this.myForm.get('id').value).then(data => {
          const resp: any = data;
          this.loadingData();
          if (resp.success === false) {
            swal({
              title: 'Error ',
              text: 'No es posible guardar la información  ',
              type: 'error'
            });
          } else {
            this.myForm.get('description').setValue('');
            document.getElementById('createBrandHide').click();
            swal({
              title: 'Notificación',
              type: 'success'
            });

          }
        }).catch(error => {
          console.log(error);
        });
    }
  }







  deletePaymentMargin(id: number) {
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

          swal.showLoading();
          this.restService.deletePaymentMargin(id)
            .then(data => {
              swal.showLoading();
              const resp: any = data;

              if (resp.success === false) {
                swal({
                  title: 'Error',
                  text: '',
                  type: 'error'
                });
              } else {
                // this.router.navigateByUrl('master/registerBrand');
                this.loadingData();
                swal({
                  title: 'El dato fue eliminado correctamente  ',
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



}
