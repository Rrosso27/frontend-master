import { Component, OnInit, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from '../../master-services/Rest/rest.service';
import {
  NgbDateParserFormatter,
  NgbDatepickerI18n,
  NgbDateStruct,
} from "@ng-bootstrap/ng-bootstrap";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
const EXCEL_TYPE =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
const EXCEL_EXTENSION = ".xlsx";


import swal from 'sweetalert2';
import { Router } from '@angular/router';




@Injectable()
export class I18n {
  language = "fr";
}

interface bussnessInterface {
  // item para mostrar clientes
  id?: number;
  business_name?: string;
  type_document_id?: number;
}

interface typeMaintenanceInterface {
  // item para mostrar tipo mantenimiento
  id?: number;
  business_name?: string;
  type_document_id?: number;
}

interface statusMaintenanceInterface {
  // item para mostrar estado
  id?: number;
  business_name?: string;
  type_document_id?: number;
}

interface busnessOfficeInterface {
  // item para mostrar clientes
  department?: string;
  description?: string;
}

interface officeInterface {
  // item para mostrar sedes
  id?: number;
  name?: string;
  select?: boolean;
}


interface tableInterface {
  business_name?: string;
  document?: string;
  document_id?: string;
  telephone?: string;
  email?: string;
  price_margin?: string;
  Condicion_de_pago?: string;
  name?: string;
  cellphone?: string;
  department?: string;
  city?: string;
  create_at?: string;
}




@Component({
  selector: 'app-master-customers',
  templateUrl: './master-customers.component.html',
  styleUrls: ['./master-customers.component.scss',
    '../../../assets/icon/icofont/css/icofont.scss']
})




export class MasterCustomersComponent implements OnInit {


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
  status: number = 3;
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
  // dataExcels: Array<tableInterface> = [];
  currentBrand: any;
  dataExcels: Array<tableInterface> = [];
  dataExcel: tableInterface;




  constructor(private restService: RestService, private router: Router) {

    this.loadingData();

    const description = new FormControl('', Validators.required);
    const descriptionUpdate = new FormControl('', Validators.required);


    this.myForm = new FormGroup({
      description: description
    });

    this.myFormUpdate = new FormGroup({
      descriptionUpdate: descriptionUpdate
    });
  }














  loadingData() {
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();

    this.restService.getCustomer().then(data => {
      const resp: any = data;
      swal.close();
      this.rowsClient = resp.data;
      this.rowStatic = resp.data;
      this.rowsTemp = resp.data;
    }).catch(error => {
      console.log(error);
    });
  }


  getCotmerStatus(status: number) {
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();

    this.restService.getCotmerStatus(status).then(data => {
      const resp: any = data;
      swal.close();
      this.rowsClient = resp.data;
      this.rowStatic = resp.data;
      this.rowsTemp = resp.data;
    }).catch(error => {
      console.log(error);
    });
  }

  filter(description: any) {
    this.restService.filter(description).then(data => {
      const resp: any = data;
      swal.close();
      this.rowsClient = resp.data;
      this.rowStatic = resp.data;
      this.rowsTemp = resp.data;
    }).catch(error => {
      console.log(error);
    });
  }


  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    this.filter(val);
  }


  updateFilterActiveInactive(active: string) {

  }


  onChangeCreate(check: any) {
    this.change = check;
  }

  onChangeUpdate(check: any) {
    this.switchUpdate = check;
    this.enabledUpdated = check;

  }






  excelCutomer() {

    this.restService
      .getMaintenanceSettlement(this.status)
      .then((data) => {
        const resp: any = data;

        this.rowsClient = resp.data;
        for (let data of resp.data) {
          this.dataExcel = {
            business_name: data.business_name,
            document: data.document,
            document_id: data.document_id,
            telephone: data.telephone,
            email: data.email,
            price_margin: data.price_margin,
            Condicion_de_pago: data.pcodescription,
            name: data.name,
            cellphone: data.cellphone,
            department: data.department,
            city: data.city,
            create_at: data.create_at,
          };
          this.dataExcels.push(this.dataExcel);
        }
        this.dataExcels.push(this.dataExcel);

        this.exportAsExcelFile(
          this.dataExcels,
          "Clientes"
        );
        swal.close();

        if (resp.error) {
          swal({
            title: "Oops",
            text: "Hubo un error en la consulta.",
            type: "error",
          });
        }
        if (this.rowsClient.length == 0) {
          swal({
            title: "Oops",
            text: "No hay resultado en la consulta.",
            type: "error",
          });
        }

      })
      .catch((error) => {
        console.log(error);
        swal({
          title: "Oops",
          text: "Hubo un error en la consulta.",
          type: "error",
        });
      });

  }


  public exportAsExcelFile(rows: any[], excelFileName: string): void {
    if (rows.length > 0) {
      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(rows);
      const workbook: XLSX.WorkBook = {
        Sheets: { "Info-Controles-Liquidados": worksheet },
        SheetNames: ["Info-Controles-Liquidados"],
      };
      const excelBuffer: any = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });
      this.saveAsExcelFile(excelBuffer, excelFileName);
    } else {
      swal({
        title: "Error",
        text: "Ha ocurrido un error",
        type: "error",
      });
    }
  }



  private saveAsExcelFile(buffer: any, baseFileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    FileSaver.saveAs(data, baseFileName + EXCEL_EXTENSION);
    swal.close();
    this.dataExcels.length = 0;
  }



  onChangeActive(d) {
    let indice;
    if (this.active === false) {
      this.active = true;

      if (this.inactive === true) {
        this.loadingData();
        this.status = 3;

      } else {
        this.status = 1;
        this.getCotmerStatus(0);
      }
      this.updateFilterActiveInactive(indice);
    } else {
      this.active = false;
      if (this.inactive === true) {
        this.status = 1;
        this.getCotmerStatus(0)
      } else {
        this.loadingData();
        this.status = 3;

      }
      this.updateFilterActiveInactive(indice);
    }
  }


  onChangeInactive(d) {
    let indice;
    this.status = 0;

    if (this.inactive === false) {
      this.inactive = true;
      if (this.active === true) {
        this.loadingData()
      } else {
        this.status = 0;
        this.getCotmerStatus(1);
      }
      this.updateFilterActiveInactive(indice);
    } else {
      this.inactive = false;
      if (this.active === true) {
        this.status = 1;
        this.getCotmerStatus(0);
      } else {
        this.status = 3;
        this.loadingData();

      }
      this.updateFilterActiveInactive(indice);
    }
  }




  updateBrand(customeRow: any) {
    this.router.navigateByUrl('maintenance/customersUpdate/' + customeRow.id);
  }


  Detail(customeRow: any) {
    this.router.navigateByUrl('maintenance/customersDetail/' + customeRow.id);
  }


  sendBrand() {
    this.submitted = true;
    if (!this.myForm.invalid) {
      swal({
        title: 'Validando información ...',
        allowOutsideClick: false
      });
      swal.showLoading();

      let statusTemp = 0;
      if (this.enabledUpdated === true) {
        statusTemp = 0;
      } else {
        statusTemp = 1;
      }
      this.restService.createBrand(this.myForm.get('description').value.toUpperCase(), statusTemp).then(data => {
        const resp: any = data;
        if (resp.success === false) {
          swal({
            title: 'Esta marca ya esta registrada',
            text: 'Esta marca no se puede registrar',
            type: 'error'
          });
        } else {
          this.myForm.get('description').setValue('');
          document.getElementById('createBrandHide').click();
          this.loadingData();
          swal({
            title: 'Marca agregada',
            type: 'success'
          });
        }
      }).catch(error => {
        console.log(error);
      });
    }
  }


  sendCustomer() {
    this.router.navigateByUrl('/maintenance/registerCustomer');
  }


  sendUpdateBrand() {

    this.submitted = true;
    if (!this.myFormUpdate.invalid) {
      swal({
        title: 'Validando información ...',
        allowOutsideClick: false
      });
      swal.showLoading();

      let statusTemp = 1;
      if (this.enabledUpdated === true) {
        statusTemp = 0;
      } else {
        statusTemp = 1;
      }
      this.restService.updateBrand(Number(this.currentBrand.id), this.myFormUpdate.get('descriptionUpdate').value.toUpperCase(), statusTemp)
        .then(data => {
          const resp: any = data;
          if (resp.success === false) {
            swal({
              title: 'Esta marca ya esta actualizada',
              text: 'Esta marca no se puede actualizar',
              type: 'error'
            });
          } else {
            document.getElementById('updateBrandHide').click();
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


  deleteCustomer(brand: any) {
    swal({
      title: 'Estás seguro de eliminar este elemento?',
      type: 'warning',
      showCancelButton: true,
      showConfirmButton: true,
      cancelButtonText: 'No',
      confirmButtonText: 'Si'

    })
      .then((willDelete) => {
        if (willDelete.value) {
          this.elementDelete = brand;
          swal.showLoading();
          this.restService.deleteCustomer(Number(this.elementDelete.id))
            .then(data => {
              swal.showLoading();
              const resp: any = data;

              if (resp.success === false) {
                swal({
                  title: 'Este cliente presenta problemas',
                  text: 'Este cliente no se puede eliminar',
                  type: 'error'
                });
              } else {
                // this.router.navigateByUrl('master/registerBrand');
                this.loadingData();
                swal({
                  title: 'Cliente eliminado',
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

  blockAgents(vadr: any) {
  }

}
