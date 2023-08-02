import { Component, OnInit, Injectable } from '@angular/core';
import { NgbDatepickerI18n, NgbDateStruct, NgbCalendar, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { RestService } from '../../master-services/Rest/rest.service';
import { ResumenesService } from '../../master-services/resumenes/resumenes.service';
import { Router } from '@angular/router';
import { ForkliftService } from '../../master-services/Forklift/forklift.service';
import { WorkService } from '../../master-services/Work/work.service';
import swal from 'sweetalert2';

const I18N_VALUES = {
  'fr': {
    weekdays: ['Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb', 'Dom'],
    months: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Agos', 'Sep', 'Oct', 'Nov', 'Dic'],
  }
  // other languages you would support
};

@Injectable()
export class I18n {
  language = 'fr';
}

interface itemSelectInterface {// item para mostrar selccionados
  id?: number;
  item?: string;
  select?: boolean;
}
interface itemSelectMassiveInterface {// item para mostrar selccionados
  date?: string;
  technician?: Array<itemSelectInterface>;
  routine?: Array<itemSelectInterface>;
}

interface itemMassiveDate {// item para mostrar dates selccionados
  date?: NgbDateStruct;
  hour?: any;
  minut?: any;
}

@Component({
  selector: 'app-master-preventive-maintenance',
  templateUrl: './master-preventive-maintenance.component.html',
  styleUrls: ['./master-preventive-maintenance.component.scss',
    '../../../assets/icon/icofont/css/icofont.scss'],
  providers: [I18n, { provide: NgbDatepickerI18n, useClass: MasterPreventiveMaintenanceComponent }]
})
export class MasterPreventiveMaintenanceComponent extends NgbDatepickerI18n {
  routineSelecteds: Array<itemSelectInterface> = [];
  routineSelected: itemSelectInterface;
  routineMassiveSelecteds: Array<itemSelectInterface> = [];
  routineMassiveSelected: itemSelectInterface;

  technicianSelecteds: Array<itemSelectInterface> = [];
  technicianSelected: itemSelectInterface;
  technicianMassiveSelecteds: Array<itemSelectInterface> = [];
  technicianMassiveSelected: itemSelectInterface;

  dateMassiveSelecteds: Array<itemSelectMassiveInterface> = [];
  dateMassiveSelected: itemSelectMassiveInterface;

  dateSelecteds = [];
  dateSelected: itemMassiveDate;

  fromDate: NgbDateStruct;
  untilDate: NgbDateStruct;
  massiveFromDate: NgbDateStruct;
  massiveUntilDate: NgbDateStruct;
  preventives: any;

  selectedBusinessId: any = 0;
  selectedRegionalId: any = 0;
  selectedBranchOfficeId: any = 0;
  selectedForkliftId: any = 0;

  branchOffices: any;
  forklifts: any;
  customers: any;
  regional: any;

  selectedHourPreventive: any = 0;
  selectedMinutPreventive: any = 0;
  selectedHourUpdatePreventive: any = 0;
  selectedMinutUpdatePreventive: any = 0;

  selectedHourPreventiveMassive: any = 0;
  selectedMinutPreventiveMassive: any = 0;
  selectedHourUpdatePreventiveMassive: any = 0;
  selectedMinutUpdatePreventiveMassive: any = 0;

  rowsWork: any;
  technician: any;
  currentPreventive: any;
  currentMassive: any;

  technicianUpdate: any;
  preventiveUpdate: any;

  elementDelete: any;

  forkliftText = '';
  rowsClient: any;

  forklift: any = '';
  customerName: any = '';
  branch: any = '';

  technicianList: string = '';
  preventiveList: string = '';
  oldDate: any;

  consecutive: any;

  massiveDate = false;
  massiveHour: any;
  massiveMinut: any;
  massiveDescrition: any;
  massiveDescritionUpdate: any;
  currentDetail: any;
  currentMassiveDescription: any;
  ngbDateStruct;

  constructor(private restService: RestService, private resumenesService: ResumenesService, private router: Router,
    private forkliftService: ForkliftService, private _i18n: I18n, private calendar: NgbCalendar, public formatter: NgbDateParserFormatter,
    private workService: WorkService) {
    super();

    var date = new Date();
    this.ngbDateStruct = { day: date.getDate(), month: date.getMonth() + 1, year: date.getFullYear() };
    this.fromDate = this.ngbDateStruct;
    this.untilDate = this.ngbDateStruct;
    this.massiveFromDate = this.ngbDateStruct;
    this.massiveUntilDate = this.ngbDateStruct;

    this.getRegional();
    // this.getWorks();

  }

  getRegional() {
    this.restService.getRegionalAll().then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.regional = resp.data;
    }).catch(error => {
      console.log(error);
    });
  }

  getCustomerRegionals() {
    this.restService.getRegionalCustomers(this.selectedRegionalId.id).then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.customers = resp.data;

      //asignar valores customer;

    }).catch(error => {
      console.log(error);
    });
  }



  getBranchOffices() {
    if (this.selectedBusinessId != 0) {

      // Llenar información de cliente  
      this.restService.getOffice(this.selectedBusinessId.id).then(data => {
        const resp: any = data;
        console.log('oficinas: ' + data);
        swal.close();
        this.branchOffices = resp.data;
      }).catch(error => {
        console.log(error);
      });


    } else {
      this.selectedBranchOfficeId = 0;
      this.selectedForkliftId = 0;
    }
  }

  getForklifs() {
    if (this.selectedBranchOfficeId != 0) {
      console.log('this.selectedBusinessId.id');
      console.log(this.selectedBranchOfficeId.id);

      this.forkliftService.getForkliftBranchOfficesFull(this.selectedBranchOfficeId.id).then(data => {
        const resp: any = data;
        console.log(data);
        swal.close();
        this.forklifts = resp.data;

      }).catch(error => {
        console.log(error);
      });
    } else {

    }
  }

  showAssing() {
    if (this.selectedForkliftId == 0 || this.selectedRegionalId == 0 || this.selectedBusinessId == 0 || this.selectedBranchOfficeId == 0) {
      swal({
        title: 'Importante',
        text: 'Debes seleccionar todos los filtros.',
        type: 'warning'
      });
    } else {
      this.fromDate = this.ngbDateStruct;
      this.getWorksFilters(this.selectedRegionalId, this.selectedBusinessId);
      this.getTechnician(this.selectedRegionalId, this.selectedBusinessId);
      document.getElementById('showAssing').click();
    }
  }
  showAssingMassive() {
    if (this.selectedForkliftId == 0 || this.selectedRegionalId == 0 || this.selectedBusinessId == 0 || this.selectedBranchOfficeId == 0) {
      swal({
        title: 'Importante',
        text: 'Debes seleccionar todos los filtros.',
        type: 'warning'
      });
    } else {
      this.massiveFromDate = this.ngbDateStruct;
      this.getWorksFilters(this.selectedRegionalId, this.selectedBusinessId);
      this.getTechnician(this.selectedRegionalId, this.selectedBusinessId);
      document.getElementById('showAssingMassive').click();
    }
  }

  insertMassiveDate() {
    // poner los 0
    var day = (this.massiveFromDate.day < 10 ? '0' : '') + this.massiveFromDate.day;
    // 01, 02, 03, ... 10, 11, 12
    let month = ((this.massiveFromDate.month) < 10 ? '0' : '') + (this.massiveFromDate.month);
    // 1970, 1971, ... 2015, 2016, ...
    var year = this.massiveFromDate.year;

    console.log(this.selectedHourPreventiveMassive);
    console.log(this.selectedMinutPreventiveMassive);

    var hour = this.selectedHourPreventiveMassive;
    var minut = this.selectedMinutPreventiveMassive;

    console.log(hour);
    console.log(minut);
    let rou = 0;
    let tec = 0;

    var fromD = year + '-' + month + '-' + day + ' ' + hour + ':' + minut + ':00';
    console.log(fromD);
    // console.log(this.dateSelecteds)
    for (let date of this.dateMassiveSelecteds) {
      if (date.date == fromD) {
        console.log('cambio')
        this.massiveDate = true;
      }
    }
    if (this.massiveDate == true) {
      console.log('entro')
      swal({
        title: 'Importante',
        text: 'Esta fecha ya fue seleccionada.',
        type: 'warning'
      });
      this.massiveDate = false;
    } else {
      console.log(this.routineSelecteds);
      for (let item of this.routineSelecteds) {
        console.log('entro rutinas');
        if (item.select) {
          console.log(item);
          console.log('entro select rutinas');
          this.routineMassiveSelected = {
            id: item.id,
            item: item.item
          };
          this.routineMassiveSelecteds.push(this.routineMassiveSelected);
          // console.log('entro');
          rou = 1;
        }
      }
      if (rou == 1) {
        for (let item of this.technicianSelecteds) {
          console.log('entro tecnicos');
          if (item.select) {
            console.log(item);
            console.log('entro select tenicos');
            this.technicianMassiveSelected = {
              id: item.id,
              item: item.item
            };
            this.technicianMassiveSelecteds.push(this.technicianMassiveSelected);
            tec = 1;
          }
        }
        if (tec == 1) {
          this.dateMassiveSelected = {
            date: fromD,
            technician: this.technicianMassiveSelecteds,
            routine: this.routineMassiveSelecteds
          }
          this.dateMassiveSelecteds.push(this.dateMassiveSelected)
          console.log(this.dateMassiveSelecteds);

          for (let item of this.routineSelecteds) {
            console.log('entro');
            if (item.select) {
              item.select = false;
            }
          }

          for (let item of this.technicianSelecteds) {
            console.log('entro');
            if (item.select) {
              item.select = false;
            }
          }
          this.routineMassiveSelecteds = [];
          this.technicianMassiveSelecteds = [];
        } else {
          swal({
            title: 'Importante',
            text: 'Seleccionar al menos un técnico.',
            type: 'warning'
          });
        }

      } else {
        swal({
          title: 'Importante',
          text: 'Seleccionar al menos una rutina.',
          type: 'warning'
        });
      }
    }
  }

  insertMassiveDateUpdate() {
    // poner los 0
    var day = (this.massiveUntilDate.day < 10 ? '0' : '') + this.massiveUntilDate.day;
    // 01, 02, 03, ... 10, 11, 12
    let month = ((this.massiveUntilDate.month) < 10 ? '0' : '') + (this.massiveUntilDate.month);
    // 1970, 1971, ... 2015, 2016, ...
    var year = this.massiveUntilDate.year;

    console.log(this.selectedHourUpdatePreventiveMassive);
    console.log(this.selectedMinutUpdatePreventiveMassive);

    var hour = this.selectedHourUpdatePreventiveMassive;
    var minut = this.selectedMinutUpdatePreventiveMassive;

    console.log(hour);
    console.log(minut);
    let rou = 0;
    let tec = 0;

    var fromD = year + '-' + month + '-' + day + ' ' + hour + ':' + minut + ':00';
    console.log(fromD);
    // console.log(this.dateSelecteds)
    for (let date of this.dateMassiveSelecteds) {
      if (date.date == fromD) {
        console.log('cambio')
        this.massiveDate = true;
      }
    }
    if (this.massiveDate == true) {
      console.log('entro')
      swal({
        title: 'Importante',
        text: 'Esta fecha ya fue seleccionada.',
        type: 'warning'
      });
      this.massiveDate = false;
    } else {
      for (let item of this.routineSelecteds) {
        console.log('entro');
        if (item.select) {
          console.log(item);
          console.log('entro');
          this.routineMassiveSelected = {
            id: item.id,
            item: item.item
          };
          this.routineMassiveSelecteds.push(this.routineMassiveSelected);
          console.log('entro');
          rou = 1;
        }
      }
      if (rou == 1) {
        for (let item of this.technicianSelecteds) {
          console.log('entro');
          if (item.select) {
            console.log(item);
            console.log('entro');
            this.technicianMassiveSelected = {
              id: item.id,
              item: item.item
            };
            this.technicianMassiveSelecteds.push(this.technicianMassiveSelected);
            tec = 1;
          }
        }
        if (tec == 1) {
          this.dateMassiveSelected = {
            date: fromD,
            technician: this.technicianMassiveSelecteds,
            routine: this.routineMassiveSelecteds
          }
          this.dateMassiveSelecteds.push(this.dateMassiveSelected)
          console.log(this.dateMassiveSelecteds);

          for (let item of this.routineSelecteds) {
            console.log('entro');
            if (item.select) {
              item.select = false;
            }
          }

          for (let item of this.technicianSelecteds) {
            console.log('entro');
            if (item.select) {
              item.select = false;
            }
          }
        } else {
          swal({
            title: 'Importante',
            text: 'Seleccionar al menos un técnico.',
            type: 'warning'
          });
        }

      } else {
        swal({
          title: 'Importante',
          text: 'Seleccionar al menos una rutina.',
          type: 'warning'
        });
      }
    }
  }

  deleteMassive(item: any, index) {
    console.log(item);
    console.log(index);
    this.dateMassiveSelecteds.splice(index, 1);
  }

  getConsecutive() {
    console.log('entro en consecutivo')
    this.resumenesService.showPreventiveConsecutive().then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.consecutive = resp.data;
      var date = new Date();

      let now = date.getFullYear();


      // 01, 02, 03, ... 10, 11, 12
      let month = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);


      let yearCosecutive = date.getFullYear().toString().substring(2, 4);
      this.consecutive = Number(this.consecutive.consecutive) + 1;
      this.consecutive = Number(yearCosecutive.toString() + month.toString() + this.consecutive.toString());

      // this.rowsClient = resp.data;
      // this.rowStatic =  resp.data;
      // this.rowsTemp = resp.data;
      // console.log( this.rowsClient);
    }).catch(error => {
      console.log(error);
    });
  }

  getWorks() {
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    this.workService.getWorks().then(data => {
      const resp: any = data;
      if (resp.error) {
        swal({
          title: 'Error',
          text: 'Ha ocurrido un error',
          type: 'error'
        });
      } else {
        console.log(data);
        swal.close();
        this.rowsWork = resp.data;
        for (let item of this.rowsWork) {
          // console.log(item); // 1, "string", false

          this.routineSelected = {
            id: item.id,
            item: item.description,
            select: false
          }
          this.routineSelecteds.push(this.routineSelected);
        }

        console.log("ole ole");
        console.log(this.routineSelecteds);


        console.log(this.rowsWork);
      }
    }).catch(error => {
      swal.close();
      swal({
        title: 'Error',
        text: 'Ha ocurrido un error',
        type: 'error'
      });
      console.log(error);
    });
  }

  getWorksFilters(regional_id: any, customer_id: any) {
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    this.workService.getWorksFilter(regional_id.id, customer_id.id).then(data => {
      const resp: any = data;
      if (resp.error) {
        swal({
          title: 'Error',
          text: 'Ha ocurrido un error',
          type: 'error'
        });
      } else {
        console.log(data);
        swal.close();
        this.rowsWork = resp.data;
        for (let item of this.rowsWork) {
          // console.log(item); // 1, "string", false

          this.routineSelected = {
            id: item.id,
            item: item.description,
            select: false
          }
          this.routineSelecteds.push(this.routineSelected);
        }

        console.log("ole ole");
        console.log(this.routineSelecteds);


        console.log(this.rowsWork);
      }
    }).catch(error => {
      swal.close();
      swal({
        title: 'Error',
        text: 'Ha ocurrido un error',
        type: 'error'
      });
      console.log(error);
    });
  }

  getTechnician(regional_id: any,customer:any) {
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    console.log(regional_id);
    this.restService.getUserRegional(regional_id.id,customer.id).then(data => {
      const resp: any = data;
      if (resp.error) {
        swal({
          title: 'Error',
          text: 'Ha ocurrido un error',
          type: 'error'
        });
      } else {
        console.log(data);
        swal.close();
        this.technician = resp.data;
        // console.log(JSON.parse(this.technician));
        for (let item of this.technician) {
          console.log(item); // 1, "string", false
          // item = JSON.parse(item);
          this.technicianSelected = {
            id: item.id,
            item: item.name,
            select: false
          }
          this.technicianSelecteds.push(this.technicianSelected);

        }
        console.log(this.technicianSelecteds);
        console.log(this.technician);
      }
    }).catch(error => {
      swal.close();
      swal({
        title: 'Error',
        text: 'Ha ocurrido un error',
        type: 'error'
      });
      console.log(error);
    });
  }

  onDateSelectionFrom(date: any) {


    var fromD = new Date(this.fromDate.year, this.fromDate.month, this.fromDate.day); //31 de diciembre de 2015
    var untilD = new Date(this.untilDate.year, this.untilDate.month, this.untilDate.day);

    console.log(this.fromDate.day);
    if (fromD > untilD) {
      console.log('es mayor');
      this.untilDate = this.fromDate;
    }
  }

  onDateSelectionUntil(date: any) {
    var fromD = new Date(this.fromDate.year, this.fromDate.month, this.fromDate.day); //31 de diciembre de 2015
    var untilD = new Date(this.untilDate.year, this.untilDate.month, this.untilDate.day);
    if (untilD < fromD) {
      console.log('es mayor');
      this.fromDate = this.untilDate;
    }
  }
  onDateSelectionFromMassive(date: any) {


    var fromD = new Date(this.massiveFromDate.year, this.massiveFromDate.month, this.massiveFromDate.day); //31 de diciembre de 2015
    var untilD = new Date(this.massiveUntilDate.year, this.massiveUntilDate.month, this.massiveUntilDate.day);

    console.log(this.massiveFromDate.day);
    if (fromD > untilD) {
      console.log('es mayor');
      this.massiveUntilDate = this.massiveFromDate;
    }
  }

  onDateSelectionUntilMassive(date: any) {
    var fromD = new Date(this.massiveFromDate.year, this.massiveFromDate.month, this.massiveFromDate.day); //31 de diciembre de 2015
    var untilD = new Date(this.massiveUntilDate.year, this.massiveUntilDate.month, this.massiveUntilDate.day);
    if (untilD < fromD) {
      console.log('es mayor');
      this.massiveFromDate = this.massiveUntilDate;
    }
  }



  createPreventive() {
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    let params;
    // poner los 0
    var day = (this.fromDate.day < 10 ? '0' : '') + this.fromDate.day;
    // 01, 02, 03, ... 10, 11, 12
    let month = ((this.fromDate.month) < 10 ? '0' : '') + (this.fromDate.month);
    // 1970, 1971, ... 2015, 2016, ...
    var year = this.fromDate.year;

    console.log(this.selectedHourPreventive);
    console.log(this.selectedMinutPreventive);

    var hour = this.selectedHourPreventive;
    var minut = this.selectedMinutPreventive;

    console.log(hour);
    console.log(minut);


    var fromD = year + '-' + month + '-' + day + ' ' + hour + ':' + minut + ':00';
    console.log(fromD);
    //var fromD = this.fromDate.year+'-'+this.fromDate.month+'-'+this.fromDate.day; //31 de diciembre de 2015
    // var untilD = this.untilDate.year+'-'+this.untilDate.month+'-'+this.untilDate.day;
    params = fromD;

    console.log('entro');
    console.log(this.routineSelecteds);
    console.log(this.consecutive);

    for (let item of this.routineSelecteds) {
      console.log('entro');
      if (item.select) {
        console.log(item);
        console.log('entro');
        this.preventiveList = this.preventiveList + item.id + ',';
        console.log('entro');
      }
    }
    if (this.preventiveList == '') {
      swal({
        title: 'Error',
        text: 'Debes saleccionar al menos una rutina',
        type: 'error'
      });
    } else {
      let tec = [];
      console.log(this.technicianSelecteds);
      for (let item of this.technicianSelecteds) {
        console.log('entro');
        if (item.select) {
          console.log(item);
          console.log('entro');
          this.technicianList = this.technicianList + item.id + ',';
          tec.push(item.id);
        }
      }
      if (this.technicianList == '') {
        swal({
          title: 'Error',
          text: 'Debes saleccionar al menos un tecnico',
          type: 'error'
        });
      } else {
        console.log(this.forklift);
        this.resumenesService.storePreventive(this.selectedForkliftId.id, this.selectedBusinessId.id, this.selectedBranchOfficeId.id, this.preventiveList, this.technicianList, Number(this.consecutive), params).then(data => {
          const resp: any = data;
          console.log(data);
          if (resp.success == false) {
            swal({
              title: 'Error',
              text: 'Ha ocurrido un error',
              type: 'error'
            });
          } else {
            swal.close();

            let result = resp.data;
            console.log(result);

            this.resumenesService.updateConsecutivePreventive().then(data => {
              const resp: any = data;
              console.log(data);

              document.getElementById('assignPrevetiveHide').click();
              let message = 'Se ha realizado una asignación de mantenimiento preventivo  en: ' + this.selectedBusinessId.business_name + ' para el: ' + params;
              // this.notificationTechnician(tec, message);
              this.getPreventiveRoutines();
              swal({
                title: 'Guardado con exito',
                type: 'success'
              });

              this.cleanSelectRoutines();
              // this.cleanSelectTechnician();
              this.routineSelecteds.length = 0;
              this.technicianSelecteds.length = 0;
              this.preventiveList = '';
              this.technicianList = '';
              console.log('llego hasta aqui');

              swal.close();
              // this.rowsClient = resp.data;
              // this.rowStatic =  resp.data;
              // this.rowsTemp = resp.data;
              // console.log( this.rowsClient);
            }).catch(error => {
              swal({
                title: 'Se presento un problema, para guardar este encabezado de mantenimiento preventivo',
                type: 'error'
              });
              console.log(error);
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
        });
      }
    }
  }

  // notificationTechnician(tec: any, message: string) {

  //   this.resumenesService.notificationTechnicians(message, tec).then(data => {
  //     const resp: any = data;
  //     console.log(data);

  //     swal({
  //       title: 'Se ha enviado una notifiación al(los) técnico(s) encargado(s)',
  //       type: 'success'
  //     });

  //   }).catch(error => {
  //     swal({
  //       title: 'Se presento un problema, para realizar la notificación',
  //       type: 'error'
  //     });
  //     console.log(error);
  //   });
  // }

  createDescritionMassive() {
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();

    if (this.dateMassiveSelecteds.length == 0) {
      swal({
        title: 'Error',
        text: 'Debes realizar al menos una asignación',
        type: 'error'
      });
    } else {

      console.log(this.massiveDescrition);
      this.resumenesService.storeMassive(this.massiveDescrition, this.selectedForkliftId.id).then(data => {
        const resp: any = data;
        console.log(data);
        this.createPreventiveMassive(resp.data.id);
      }).catch(error => {
        swal({
          title: 'Se presento un problema, para guardar este mantenimiento preventivo',
          type: 'error'
        });
        console.log(error);
      });
    }
  }

  updateDescritionMassive() {
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();

    if (this.dateMassiveSelecteds.length == 0) {
      swal({
        title: 'Error',
        text: 'Debes realizar al menos una asignación',
        type: 'error'
      });
      } else {
        console.log(this.massiveDescritionUpdate);
        this.resumenesService.updateMassiveDescription(this.currentMassiveDescription.id, this.massiveDescritionUpdate).then(data => {
          const resp: any = data;
          console.log(data);
          this.updatePreventiveMassive(this.currentMassiveDescription);
        }).catch(error => {
          swal({
            title: 'Se presento un problema, para guardar este mantenimiento preventivo',
            type: 'error'
          });
          console.log(error);
        });
      }
  }

  getUpdateMassive(item: any) {
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    this.getWorksFilters(this.selectedRegionalId, this.selectedBusinessId);
    this.getDetailMassive(item);
  }

  getDetailMassive(item: any) {

    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    console.log(item);
    this.currentMassiveDescription = item;
    this.resumenesService.showPreventiveMassive(item.id).then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.currentDetail = resp.data;
      this.massiveDescritionUpdate = item.description
      console.log(this.selectedRegionalId);
      this.restService.getUserRegional(this.selectedRegionalId.id,this.selectedBusinessId.id).then(data => {
        const resp: any = data;
        if (resp.error) {
          swal({
            title: 'Error',
            text: 'Ha ocurrido un error',
            type: 'error'
          });
        } else {
          console.log(data);
          swal.close();
          this.technician = resp.data;
          // console.log(JSON.parse(this.technician));
          for (let item of this.technician) {
            console.log(item); // 1, "string", false
            // item = JSON.parse(item);
            this.technicianSelected = {
              id: item.id,
              item: item.name,
              select: false
            }
            this.technicianSelecteds.push(this.technicianSelected);

          }
          console.log(this.technicianSelecteds);
          console.log(this.technician);
          this.updateDateMassive(this.currentDetail,this.massiveDescritionUpdate);
        }
      }).catch(error => {
        swal.close();
        swal({
          title: 'Error',
          text: 'Ha ocurrido un error',
          type: 'error'
        });
        console.log(error);
      });
    }).catch(error => {
      swal.close();
      swal({
        title: 'Error',
        text: 'Ha ocurrido un error',
        type: 'error'
      });
      console.log(error);
    });
  }

  createPreventiveMassive(massive: any) {
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();

    //var fromD = this.fromDate.year+'-'+this.fromDate.month+'-'+this.fromDate.day; //31 de diciembre de 2015
    // var untilD = this.untilDate.year+'-'+this.untilDate.month+'-'+this.untilDate.day;


    console.log('entro');
    console.log(this.dateMassiveSelecteds);
    console.log(this.consecutive);

    for (let item of this.dateMassiveSelecteds) {
      this.resumenesService.storePreventiveMassive(massive, this.selectedForkliftId.id, this.selectedBusinessId.id, this.selectedBranchOfficeId.id, item.routine, item.technician, Number(this.consecutive), item.date).then(data => {
        const resp: any = data;
        console.log(data);
        if (resp.success == false) {
          swal({
            title: 'Error',
            text: 'Ha ocurrido un error',
            type: 'error'
          });
        } else {
          swal.close();

          let result = resp.data;
          console.log(result);

          this.resumenesService.updateConsecutivePreventive().then(data => {
            const resp: any = data;
            console.log(data);


            // this.rowsClient = resp.data;
            // this.rowStatic =  resp.data;
            // this.rowsTemp = resp.data;
            // console.log( this.rowsClient);
          }).catch(error => {
            swal({
              title: 'Se presento un problema, para guardar este encabezado de mantenimiento preventivo',
              type: 'error'
            });
            console.log(error);
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
      });
    }
    document.getElementById('assignPrevetiveHideMassive').click();
    
    this.getPreventiveRoutines();
    swal({
      title: 'Guardado con exito',
      type: 'success'
    });

    this.cleanSelectRoutines();
    // this.cleanSelectTechnician();
    this.routineSelecteds.length = 0;
    this.technicianSelecteds.length = 0;
    this.dateMassiveSelecteds = [];
    this.technicianMassiveSelecteds = [];
    this.routineMassiveSelecteds = [];
    console.log('llego hasta aqui');

    swal.close();
  }

  getPreventiveRoutines() {
    // Llenar información de cliente  
    if (this.selectedForkliftId == 0 || this.selectedRegionalId == 0 || this.selectedBusinessId == 0 || this.selectedBranchOfficeId == 0) {
      swal({
        title: 'Importante',
        text: 'Debes seleccionar todos los filtros.',
        type: 'warning'
      });
    } else {
      swal({
        title: 'Validando información ...',
        allowOutsideClick: false
      });
      swal.showLoading();

      this.resumenesService.getWorkForkliftPreventive(this.selectedForkliftId.id).then(data => {
        const resp: any = data;
        console.log(data);
        swal.close();
        this.currentPreventive = resp.data;
        this.getMassive();

      }).catch(error => {
        console.log(error);
      });
    }
  }
  getMassive() {
    this.resumenesService.getForkliftMassive(this.selectedForkliftId.id).then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.currentMassive = resp.data;


    }).catch(error => {
      swal.close();
      swal({
        title: 'Error',
        text: 'Ha ocurrido un error',
        type: 'error'
      });
      console.log(error);
    });
  }

  getUpdateDetail(row: any) {
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    this.getWorksFilters(this.selectedRegionalId, this.selectedBusinessId);
    this.update(row);
  }

  update(row: any) {

    console.log('entro');
    // this.getTechnician(this.selectedRegionalId);
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    console.log(this.selectedRegionalId);
    this.restService.getUserRegional(this.selectedRegionalId.id,this.selectedBusinessId.id).then(data => {
      const resp: any = data;
      if (resp.error) {
        swal({
          title: 'Error',
          text: 'Ha ocurrido un error',
          type: 'error'
        });
      } else {
        console.log(data);
        swal.close();
        this.technician = resp.data;
        // console.log(JSON.parse(this.technician));
        for (let item of this.technician) {
          console.log(item); // 1, "string", false
          // item = JSON.parse(item);
          this.technicianSelected = {
            id: item.id,
            item: item.name,
            select: false
          }
          this.technicianSelecteds.push(this.technicianSelected);

        }
        console.log(this.technicianSelecteds);
        console.log(this.technician);
        this.updateDate(row);
      }
    }).catch(error => {
      swal.close();
      swal({
        title: 'Error',
        text: 'Ha ocurrido un error',
        type: 'error'
      });
      console.log(error);
    });

  }

  updateDate(row: any) {
    // this.getTechnician(this.selectedRegionalId);
    console.log(row);
    this.preventiveUpdate = row.result.preventiveRoutines;
    this.technicianUpdate = row.result.technicians;
    this.oldDate = row.date;


    let date = row.date;
    console.log(date)
    let dateComplete = date.substring(0, 10);
    let dateArray = dateComplete.split('-');

    let hourComplete = date.substring(10, 19);
    let hourArray = hourComplete.split(':');
    this.selectedHourUpdatePreventive = Number(hourArray[0]);
    this.selectedMinutUpdatePreventive = Number(hourArray[1]);

    console.log(hourComplete);
    let year = Number(dateArray[0]);
    let mounth = Number(dateArray[1]);
    let day = Number(dateArray[2]);
    var news: NgbDateStruct = { year: year, month: mounth, day: day };
    console.log(news);
    this.untilDate = news;

    for (let elemento of this.preventiveUpdate) {
      console.log('ingreso a mirar checks');
      this.SelectItemRoutines(elemento);
    }

    for (let elemento of this.technicianUpdate) {
      console.log('ingreso a mirar checks');
      this.SelectItemTechnician(elemento);
    }

    document.getElementById('showUpdatePreventive').click();
  }

  updateDateMassive(row: any, description: any) {
    // this.getTechnician(this.selectedRegionalId);
    console.log(row);
    this.preventiveUpdate = row.preventiveRoutines;
    this.technicianUpdate = row.technicians;
    this.oldDate = row.date;
    // let swith = false;

    for(let item of row){
        console.log(item);
        for(let value of item.preventiveRoutines){
          for( let data of this.routineSelecteds){
            if (Number(data.id) === Number(value.preventive_routines_id)) {
              this.routineMassiveSelected = {
                id: data.id,
                item: data.item
              };
              this.routineMassiveSelecteds.push(this.routineMassiveSelected);
            }
          }
        }

        for (let value of item.technicians) {
          for(let data of this.technicianSelecteds){
            if (data.id == value.user_id) {
              this.technicianMassiveSelected = {
              id: data.id,
              item: data.item
            };
            this.technicianMassiveSelecteds.push(this.technicianMassiveSelected);
            }
          }
        }
      this.dateMassiveSelected = {
        date: item.date,
        technician: this.technicianMassiveSelecteds,
        routine: this.routineMassiveSelecteds
      }
      this.dateMassiveSelecteds.push(this.dateMassiveSelected)
      console.log(this.dateMassiveSelecteds);
      this.routineMassiveSelecteds = [];
      this.technicianMassiveSelecteds = [];
    }
    document.getElementById('showUpdatePreventiveMassive').click();
  }

  deleteEstimateDetail(item: any) {
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
          this.elementDelete = item;
          console.log(item);
          console.log(this.elementDelete);
          console.log(this.elementDelete.result);
          console.log(this.elementDelete.result.technicians);
          var rout = '';
          var tech = '';
          for (let routin of this.elementDelete.result.preventiveRoutines) {

            rout = rout + routin.id + ','

          }

          for (let tec of this.elementDelete.result.technicians) {

            tech = tech + tec.id + ','

          }

          console.log(rout);
          console.log(tech);
          swal.showLoading();
          this.resumenesService.deletePreventive(Number(this.selectedForkliftId.id), rout, tech)
            .then(data => {
              swal.showLoading();
              const resp: any = data;
              console.log(resp);

              if (resp.success === false) {
                swal({
                  title: 'Esta rutina presenta problemas',
                  text: 'Esta rutina no se puede eliminar',
                  type: 'error'
                });
              } else {
                // this.router.navigateByUrl('master/registerBrand');
                swal({
                  title: 'Elemento eliminado',
                  type: 'success'
                });

                this.getPreventiveRoutines();
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

  deleteMassiveDescription(item: any) {
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
          this.elementDelete = item;
          console.log(item);
          console.log(this.elementDelete);

          swal.showLoading();
          this.resumenesService.deletePreventiveMassive(this.elementDelete.id).then(data => {
            swal.showLoading();
            const resp: any = data;
            console.log(resp);

            if (resp.success === false) {
              swal({
                title: 'Esta rutina presenta problemas',
                text: 'Esta rutina no se puede eliminar',
                type: 'error'
              });
            } else {
              // this.router.navigateByUrl('master/registerBrand');
              swal({
                title: 'Elemento eliminado',
                type: 'success'
              });

              this.getPreventiveRoutines();
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

  updatePreventiveMassive(row: any) {
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    console.log(row);
    this.resumenesService.deleteRoutineMassiveDetail(row.id).then(data => {
      const resp: any = data;
      console.log(data);
      if (resp.success == false) {
        swal({
          title: 'Error',
          text: 'Ha ocurrido un error',
          type: 'error'
        });
      } else {
        swal({
          title: 'Obteniendo información ...',
          allowOutsideClick: false
        });
        swal.showLoading();


        let result = resp.data;
        console.log(result);

        console.log('entro');
        console.log(this.dateMassiveSelecteds);
        console.log(this.consecutive);

        for (let item of this.dateMassiveSelecteds) {
          this.resumenesService.storePreventiveMassive(row.id, this.selectedForkliftId.id, this.selectedBusinessId.id, this.selectedBranchOfficeId.id, item.routine, item.technician, Number(this.consecutive), item.date).then(data => {
            const resp: any = data;
            console.log(data);
            if (resp.success == false) {
              swal({
                title: 'Error',
                text: 'Ha ocurrido un error',
                type: 'error'
              });
            } else {
              swal.close();

              let result = resp.data;
              console.log(result);

              this.resumenesService.updateConsecutivePreventive().then(data => {
                const resp: any = data;
                console.log(data);

              }).catch(error => {
                swal({
                  title: 'Se presento un problema, para guardar este  mantenimiento preventivo',
                  type: 'error'
                });
                console.log(error);
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
          });
        }
        document.getElementById('assingUpdatePrevetiveHideMassive').click();
        
        this.getPreventiveRoutines();
        swal({
          title: 'Guardado con exito',
          type: 'success'
        });

        this.cleanSelectRoutines();
        // this.cleanSelectTechnician();
        this.routineSelecteds.length = 0;
        this.technicianSelecteds.length = 0;
        this.dateMassiveSelecteds = [];
        this.technicianMassiveSelecteds = [];
        this.routineMassiveSelecteds = [];
        console.log('llego hasta aqui');

        swal.close();
        // document.getElementById('assingUpdatePrevetiveHide').click();

        // this.getPreventiveRoutines();
        swal({
          title: 'Guardado con exito',
          type: 'success'
        });
      }
      this.cleanSelectRoutines();
      // this.cleanSelectTechnician();
      this.routineSelecteds.length = 0;
      this.technicianSelecteds.length = 0;
      this.preventiveList = '';
      this.technicianList = '';
    }).catch(error => {
      swal.close();
      swal({
        title: 'Error',
        text: 'Ha ocurrido un error',
        type: 'error'
      });
      console.log(error);
    });
  }

  updatePreventive() {
    swal({
      title: 'Obteniendo información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    let params;
    // poner los 0
    var day = (this.untilDate.day < 10 ? '0' : '') + this.untilDate.day;
    // 01, 02, 03, ... 10, 11, 12
    let month = ((this.untilDate.month) < 10 ? '0' : '') + (this.untilDate.month);
    // 1970, 1971, ... 2015, 2016, ...
    var year = this.untilDate.year;

    console.log(this.selectedHourUpdatePreventive);
    console.log(this.selectedMinutUpdatePreventive);

    var hour = this.selectedHourUpdatePreventive;
    var minut = this.selectedMinutUpdatePreventive;


    console.log(hour);
    console.log(minut);


    var fromD = year + '-' + month + '-' + day + ' ' + hour + ':' + minut + ':00';
    console.log(fromD);
    //var fromD = this.fromDate.year+'-'+this.fromDate.month+'-'+this.fromDate.day; //31 de diciembre de 2015
    // var untilD = this.untilDate.year+'-'+this.untilDate.month+'-'+this.untilDate.day;
    params = fromD;

    console.log('entro');
    console.log(this.routineSelecteds);

    for (let item of this.routineSelecteds) {
      console.log('entro');
      if (item.select) {
        console.log(item);
        console.log('entro');
        this.preventiveList = this.preventiveList + item.id + ',';
        console.log('entro');
      }
    }
    if (this.preventiveList == '') {
      swal({
        title: 'Error',
        text: 'Debes saleccionar al menos una rutina',
        type: 'error'
      });
    } else {
      let tec = [];
      console.log(this.technicianSelecteds);
      for (let item of this.technicianSelecteds) {
        console.log('entro');
        if (item.select) {
          console.log(item);
          console.log('entro');
          this.technicianList = this.technicianList + item.id + ',';
          tec.push(item.id)
        }
      }

      if (this.technicianList == '') {
        swal({
          title: 'Error',
          text: 'Debes saleccionar al menos un tecnico',
          type: 'error'
        });
      } else {
        console.log(this.forklift);
        this.resumenesService.updatePreventive(this.selectedForkliftId.id, this.selectedBusinessId.id, this.selectedBranchOfficeId.id, this.preventiveList, this.technicianList, this.oldDate, params).then(data => {
          const resp: any = data;
          console.log(data);
          if (resp.success == false) {
            swal({
              title: 'Error',
              text: 'Ha ocurrido un error',
              type: 'error'
            });
          } else {
            swal.close();

            let result = resp.data;
            console.log(result);
            this.resumenesService.updateConsecutivePreventive().then(data => {
              const resp: any = data;
              console.log(data);
              let message = 'Se ha realizado una asignación de mantenimiento preventivo  en: ' + this.selectedBusinessId.business_name + ' para el: ' + params;
              // this.notificationTechnician(tec, message);
              this.cleanSelectRoutines();
              // this.cleanSelectTechnician();
              this.routineSelecteds.length = 0;
              this.technicianSelecteds.length = 0;
              this.preventiveList = '';
              this.technicianList = '';
              swal({
                title: 'Guardado con exito',
                type: 'success'
              });
              document.getElementById('assingUpdatePrevetiveHide').click();

              this.getPreventiveRoutines();
            }).catch(error => {
              swal({
                title: 'Se presento un problema, para guardar este  mantenimiento preventivo',
                type: 'error'
              });
              console.log(error);
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
        });
      }
    }
  }

  cleanSelectRoutines() {
    this.routineSelecteds.map(function (dato) {
      //if(dato.Modelo == modelo){
      dato.select = false;
      //}

      return dato;
    });
  }

  cleanSelectTechnician() {
    this.technicianSelecteds.map(function (dato) {
      //if(dato.Modelo == modelo){
      dato.select = false;
      //}

      return dato;
    });
  }

  SelectItemRoutines(idItem: any) {// Falta organizarlo
    var item = idItem.preventive_routines_id;
    this.routineSelecteds.map(function (dato) {

      console.log(idItem);
      console.log(dato);
      if (Number(dato.id) === Number(item)) {
        dato.select = true;
        console.log('hacer cambio');
      }

      return dato;
    });
  }

  SelectItemTechnician(idTechnician: any) {// Falta organizarlo
    var tech = idTechnician.user_id
    console.log('jajaja');
    console.log(this.technicianSelecteds);
    this.technicianSelecteds.map(function (dato) {
      if (dato.id == tech) {
        dato.select = true;
        console.log('ingreso');
      }
      return dato;
    });
  }

  addCancelDate() {
    //If exist, remove the date


    this.cleanSelectRoutines();
    // this.cleanSelectTechnician();
    this.routineSelecteds.length = 0;
    this.technicianSelecteds.length = 0;
    document.getElementById('assignPrevetiveHide').click();
  }
  addCancelDateMassive() {
    //If exist, remove the date


    this.cleanSelectRoutines();
    // this.cleanSelectTechnician();
    this.routineSelecteds.length = 0;
    this.technicianSelecteds.length = 0;
    this.dateMassiveSelecteds = [];
    this.technicianMassiveSelecteds = [];
    this.routineMassiveSelecteds = [];
    this.selectedHourPreventiveMassive = 0;
    this.selectedMinutPreventiveMassive = 0;
    document.getElementById('assignPrevetiveHideMassive').click();
  }
  addCancelUpdateDate() {
    //If exist, remove the date


    this.cleanSelectRoutines();
    // this.cleanSelectTechnician();
    this.routineSelecteds.length = 0;
    this.technicianSelecteds.length = 0;
    document.getElementById('assingUpdatePrevetiveHide').click();
  }
  addCancelUpdateDateMassive() {
    //If exist, remove the date


    this.cleanSelectRoutines();
    // this.cleanSelectTechnician();
    this.routineSelecteds.length = 0;
    this.technicianSelecteds.length = 0;
    this.dateMassiveSelecteds = [];
    this.technicianMassiveSelecteds = [];
    this.routineMassiveSelecteds = [];
    this.selectedHourUpdatePreventiveMassive = 0;
    this.selectedMinutUpdatePreventiveMassive = 0;
    document.getElementById('assingUpdatePrevetiveHideMassive').click();
  }


  ngOnInit() {
  }

  getWeekdayShortName(weekday: number): string {
    return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
  }
  getMonthShortName(month: number): string {
    return I18N_VALUES[this._i18n.language].months[month - 1];
  }
  getMonthFullName(month: number): string {
    return this.getMonthShortName(month);
  }

}
