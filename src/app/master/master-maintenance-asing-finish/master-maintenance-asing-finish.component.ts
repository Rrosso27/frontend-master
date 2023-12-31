import { Component, Injectable, OnInit } from "@angular/core";
import {
  NgbDateParserFormatter,
  NgbDatepickerI18n,
  NgbDateStruct,
} from "@ng-bootstrap/ng-bootstrap";
import swal from "sweetalert2";
import { ForkliftService } from "../../master-services/Forklift/forklift.service";
import { ReportsService } from "../../master-services/reports/reports.service";
import { RestService } from "../../master-services/Rest/rest.service";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
const EXCEL_TYPE =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
const EXCEL_EXTENSION = ".xlsx";

const I18N_VALUES = {
  fr: {
    weekdays: ["Lun", "Mar", "Mié", "Juv", "Vie", "Sáb", "Dom"],
    months: [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Agos",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ],
  },
  // other languages you would support
};

@Injectable()
export class I18n {
  language = "fr";
}

interface bussnessInterface {
  // item para mostrar clientes
  id?: number;
  name?: string;
  select?: boolean;
}

interface typeMaintenanceInterface {
  // item para mostrar clientes
  id?: number;
  name?: string;
  select?: boolean;
}

interface statusMaintenanceInterface {
  // item para mostrar clientes
  id?: number;
  name?: string;
  select?: boolean;
}

interface busnessOfficeInterface {
  // item para mostrar clientes
  customer?: string;
  office?: Array<officeInterface>;
}

interface officeInterface {
  // item para mostrar clientes
  id?: number;
  name?: string;
  select?: boolean;
}

interface OfficeForkliftInterface {
  // item para mostrar clientes
  office?: string;
  forklift?: Array<forkliftInterface>;
}

interface forkliftInterface {
  // item para mostrar clientes
  id?: number;
  name?: string;
  select?: boolean;
}

interface tableInterface {
  Consecutivo?: string;
  Cliente?: string;
  Sede?: string;
  Equipo?: string;
  Tipo?: string;
  Estado?: string;
  Fecha_Asignado?: string;
  Fecha_Inicio?: string;
  Fecha_Fin?: string;
  Duracion_Actividad?: string;
  Trabajo_Realizado?: string;
  Estado_Final?: string;
}

@Component({
  selector: "app-master-maintenance-asing-finish",
  templateUrl: "./master-maintenance-asing-finish.component.html",
  styleUrls: [
    "./master-maintenance-asing-finish.component.scss",
    "../../../assets/icon/icofont/css/icofont.scss",
  ],
  providers: [
    I18n,
    {
      provide: NgbDatepickerI18n,
      useClass: MasterMaintenanceAsingFinishComponent,
    },
  ],
})
export class MasterMaintenanceAsingFinishComponent extends NgbDatepickerI18n {
  selectsBusness: Array<bussnessInterface> = [];
  selectBusness: bussnessInterface;
  selectsBusnessOffices: Array<busnessOfficeInterface> = [];
  selectsBusnessOffice: busnessOfficeInterface;
  selectsOffices: Array<officeInterface> = [];
  selectOffice: officeInterface;
  selectsOfficeForklift: Array<OfficeForkliftInterface> = [];
  selectOfficeForklift: OfficeForkliftInterface;
  selectsForklift: Array<forkliftInterface> = [];
  selectForklift: forkliftInterface;
  selectsType: Array<typeMaintenanceInterface> = [];
  selectType: typeMaintenanceInterface;
  selectsStatus: Array<statusMaintenanceInterface> = [];
  selectStatus: statusMaintenanceInterface;
  dataExcels: Array<tableInterface> = [];
  dataExcel: tableInterface;

  selectedBusinessId: any = 0;
  selectedRegionalId: any = 0;
  selectedBranchOfficeId: any = 0;
  selectedForkliftId: any = 0;
  selectedStatus: any = 0;
  selectedType: any = 0;

  branchOffices: any;
  forklifts: any;
  customers: any;
  regional: any;
  rowsClient: any;
  type: any;
  status: any;
  checkAllType: boolean;
  checkAllStatus: boolean;

  fromDate: NgbDateStruct;
  untilDate: NgbDateStruct;

  constructor(
    private restService: RestService,
    public formatter: NgbDateParserFormatter,
    private _i18n: I18n,
    private forkliftService: ForkliftService,
    private reportService: ReportsService
  ) {
    super();

    var date = new Date();
    var ngbDateStruct = {
      day: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
    };

    this.fromDate = ngbDateStruct;
    this.untilDate = ngbDateStruct;

    console.log(this.fromDate);
    console.log(this.untilDate);
    swal({
      title: "Validando información ...",
      allowOutsideClick: false,
    });
    swal.showLoading();
    this.getRegional();
    this.getTyeMaintenance();
    this.getStatusMaintenance();
  }

  getRegional() {
    this.restService
      .getRegionalAll()
      .then((data) => {
        const resp: any = data;
        console.log(data);
        swal.close();
        this.regional = resp.data;
      })
      .catch((error) => {
        console.log(error);
        swal({
          title: "Error",
          text: "Ha ocurrido un error al cargar las Sucursales",
          type: "error",
        });
      });
  }

  getStatusMaintenance() {
    this.reportService
      .getStatusMaintenance()
      .then((data) => {
        const resp: any = data;
        console.log(data);
        swal.close();
        this.status = resp.data;
        for (let item of this.status) {
          this.selectStatus = {
            id: item.id,
            name: item.description,
            select: false,
          };
          this.selectsStatus.push(this.selectStatus);
        }
      })
      .catch((error) => {
        console.log(error);
        swal({
          title: "Error",
          text: "Ha ocurrido un error al cargar las Sucursales",
          type: "error",
        });
      });
  }

  getTyeMaintenance() {
    this.reportService
      .getTyeMaintenance()
      .then((data) => {
        const resp: any = data;
        console.log(data);
        swal.close();
        this.type = resp.data;
        for (let item of this.type) {
          this.selectType = {
            id: item.id,
            name: item.description,
            select: false,
          };
          this.selectsType.push(this.selectType);
        }
      })
      .catch((error) => {
        console.log(error);
        swal({
          title: "Error",
          text: "Ha ocurrido un error al cargar las Sucursales",
          type: "error",
        });
      });
  }

  getCustomerRegionals() {
    this.selectsBusness.length = 0;
    this.selectsBusness = [];
    console.log(this.selectsBusness);
    this.selectsBusnessOffices = [];
    this.selectsOfficeForklift = [];
    console.log(this.selectedRegionalId.id);
    if (this.selectedRegionalId != 0) {
      this.restService
        .getRegionalCustomers(this.selectedRegionalId.id)
        .then((data) => {
          const resp: any = data;
          console.log(data);
          swal.close();
          this.customers = resp.data;
          for (let item of this.customers) {
            this.selectBusness = {
              id: item.id,
              name: item.business_name,
              select: false,
            };
            this.selectsBusness.push(this.selectBusness);
          }

          //asignar valores customer;
        })
        .catch((error) => {
          console.log(error);
          swal({
            title: "Error",
            text: "Ha ocurrido un error al cargar a los clientes",
            type: "error",
          });
        });
    }
  }

  getBranchOffices() {
    this.selectsOffices = [];
    this.selectsBusnessOffices = [];
    console.log(this.selectsOffices);
    console.log(this.selectsBusness);
    // Llenar información de cliente
    for (let item of this.selectsBusness) {
      this.selectsOffices = [];
      console.log(this.selectsOffices);
      console.log("paso");
      console.log(item.select);
      if (item.select) {
        console.log(item);
        swal({
          title: "Validando información ...",
          allowOutsideClick: false,
        });
        swal.showLoading();

        this.restService
          .getOfficeWithRegional(item.id, this.selectedRegionalId.id)
          .then((data) => {
            const resp: any = data;
            console.log(data);

            if (resp.data.error) {
              swal({
                title: "Error",
                text: "Ha ocurrido un error las sedes",
                type: "error",
              });
            }
            for (let value of resp.data) {
              this.selectOffice = {
                id: value.id,
                name: value.branch_name,
                select: false,
              };
              this.selectsOffices.push(this.selectOffice);
            }
            console.log(item.id);
            console.log(item.name);
            console.log(this.selectsOffices);
            this.selectsBusnessOffice = {
              customer: item.name,
              office: this.selectsOffices,
            };
            this.selectsBusnessOffices.push(this.selectsBusnessOffice);
            this.selectsOffices = [];
            console.log(this.selectsBusnessOffices);
            swal.close();
          })
          .catch((error) => {
            console.log(error);
            swal({
              title: "Error",
              text: "Ha ocurrido un error las sedes",
              type: "error",
            });
          });
      }
    }
  }

  getForklifs() {
    this.selectsForklift = [];
    this.selectsOfficeForklift = [];
    console.log(this.selectsForklift);
    console.log(this.selectsOffices);
    console.log(this.selectsBusnessOffices);

    for (let value of this.selectsBusnessOffices) {
      console.log(value);
      for (let item of value.office) {
        console.log(item);

        if (item.select) {
          swal({
            title: "Validando información ...",
            allowOutsideClick: false,
          });
          swal.showLoading();
          this.forkliftService
            .getForkliftBranchOfficesFull(item.id)
            .then((data) => {
              const resp: any = data;
              console.log(data);

              this.forklifts = resp.data;
              for (let item of this.forklifts) {
                this.selectForklift = {
                  id: item.id,
                  name: item.full_name,
                  select: false,
                };
                this.selectsForklift.push(this.selectForklift);
              }
              this.selectOfficeForklift = {
                office: item.name,
                forklift: this.selectsForklift,
              };
              this.selectsOfficeForklift.push(this.selectOfficeForklift);
              this.selectsForklift = [];
              console.log(this.selectsOfficeForklift);
              swal.close();
            })
            .catch((error) => {
              console.log(error);
              swal({
                title: "Error",
                text: "Ha ocurrido un error al cargar los equipos",
                type: "error",
              });
            });
        }
      }
    }
    // swal.close();
  }

  checkUncheckAllType(event: any) {
    this.checkAllType = event.target.checked;
    for (let i = 0; i < this.selectsType.length; i++) {
      console.log("lo encontre" + i);
      this.selectsType[i].select = event.target.checked;
    }
  }

  checkUncheckAllStatus(event: any) {
    this.checkAllStatus = event.target.checked;
    for (let i = 0; i < this.selectsStatus.length; i++) {
      console.log("lo encontre" + i);
      this.selectsStatus[i].select = event.target.checked;
    }
  }

  getFilters() {
    swal({
      title: "Validando información ...",
      allowOutsideClick: false,
    });
    swal.showLoading();

    if (this.selectedRegionalId == 0) {
      swal({
        title: "Importante",
        text: "Debes seleccionar por lo menos una Sucuarsal.",
        type: "error",
      });
    } else {
      swal({
        title: "Validando información ...",
        allowOutsideClick: false,
      });
      swal.showLoading();

      let params = "";
      let cont = 0;

      // poner los 0
      var day = (this.fromDate.day < 10 ? "0" : "") + this.fromDate.day;
      // 01, 02, 03, ... 10, 11, 12
      let month = (this.fromDate.month < 10 ? "0" : "") + this.fromDate.month;
      // 1970, 1971, ... 2015, 2016, ...
      var year = this.fromDate.year;

      // until poner los ceros
      var dayUntil = (this.untilDate.day < 10 ? "0" : "") + this.untilDate.day;
      // 01, 02, 03, ... 10, 11, 12
      let monthUntil =
        (this.untilDate.month < 10 ? "0" : "") + this.untilDate.month;
      // 1970, 1971, ... 2015, 2016, ...
      var yearUntil = this.untilDate.year;

      var fromD = year + "-" + month + "-" + day;
      var untilD = yearUntil + "-" + monthUntil + "-" + dayUntil;
      //var fromD = this.fromDate.year+'-'+this.fromDate.month+'-'+this.fromDate.day; //31 de diciembre de 2015
      // var untilD = this.untilDate.year+'-'+this.untilDate.month+'-'+this.untilDate.day;
      params =
        "from_date=" +
        fromD +
        " 00:00:00" +
        "&to_date=" +
        untilD +
        " 23:59:59&regional=" +
        this.selectedRegionalId.id;

      if (this.selectsType[0].select) {
        params = params + "&battery=battery";
        cont++;
      }
      if (this.selectsType[1].select) {
        params = params + "&checklist=checklist";
        cont++;
      }
      if (this.selectsType[2].select) {
        params = params + "&corrective=corrective";
        cont++;
      }
      if (this.selectsType[3].select) {
        params = params + "&platform=platform";
        cont++;
      }
      if (this.selectsType[4].select) {
        params = params + "&preventive=preventive";
        cont++;
      }
      if (this.selectsType[5].select) {
        params = params + "&stevedore=stevedore";
        cont++;
      }

      if (cont >= 1) {
        let busness = "";
        let forklift = "";
        let office = "";

        if (this.selectsStatus[0].select) {
          params = params + "&pending=" + this.selectsStatus[0].name;
          cont++;
        }
        if (this.selectsStatus[1].select) {
          params = params + "&start=" + this.selectsStatus[1].name;
          cont++;
        }
        if (this.selectsStatus[2].select) {
          params = params + "&finish=" + this.selectsStatus[2].name;
          cont++;
        }
        if (this.selectsStatus[3].select) {
          params = params + "&firm=" + this.selectsStatus[3].name;
          cont++;
        }

        for (let item of this.selectsBusness) {
          console.log("entro");
          if (item.select) {
            console.log(item);
            console.log("entro");
            busness = busness + item.id + ",";
          }
        }
        if (busness != "") {
          console.log(params);
          params = params + "&customer=" + busness;
          console.log(params);
          for (let value of this.selectsBusnessOffices) {
            for (let item of value.office) {
              console.log("entro");
              if (item.select) {
                console.log(item);
                console.log("entro");
                office = office + item.id + ",";
              }
            }
          }
          if (office != "") {
            console.log(params);
            params = params + "&office=" + office;
            console.log(params);
            for (let value of this.selectsOfficeForklift) {
              for (let item of value.forklift) {
                console.log("entro");
                if (item.select) {
                  console.log(item);
                  console.log("entro");
                  forklift = forklift + item.id + ",";
                }
              }
              if (forklift != "") {
                params = params + "&forklift=" + forklift;
              }
            }
          }
        }

        console.log(".---------->" + params);
        this.reportService
          .showFilterDuration(params)
          .then((data) => {
            const resp: any = data;
            console.log("info de filter");
            console.log(data);
            console.log(resp);
            console.log(this.rowsClient);
            this.rowsClient = resp.data;
            for (let data of resp.data) {
              let status;
              let newStatus;
              if (data.status == 0) {
                status = "Pendiente";
                newStatus = "Sin Realizar";
              }
              if (data.status == 1) {
                status = "Iniciado";
                newStatus = "En Proceso";
              }
              if (data.status == 2) {
                status = "Finalizado";
                newStatus = "Realizado";
              }
              if (data.status == 3) {
                status = "Pendiente Por Firma";
                newStatus = "Realizado";
              }

              this.dataExcel = {
                Consecutivo: data.consecutive,
                Cliente: data.customer,
                Sede: data.office,
                Equipo: data.full_name,
                Tipo: data.type,
                Estado: status,
                Fecha_Asignado: data.date,
                Fecha_Inicio: data.start,
                Fecha_Fin: data.finish,
                Duracion_Actividad: data.duration_activity,
                Trabajo_Realizado: data.work,
                Estado_Final: newStatus,
              };
              this.dataExcels.push(this.dataExcel);
            }
            this.exportAsExcelFile(
              this.dataExcels,
              "Mantenimientos Asignados Vs Realizados " + fromD + " - " + untilD
            );
            swal.close();

            console.log(resp.error);
            if (resp.error) {
              console.log("entro");
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
            // this.rowStatic =  resp.data;
            // this.rowsTemp = resp.data;
            // console.log( this.rowsClient);
          })
          .catch((error) => {
            console.log(error);
            swal({
              title: "Oops",
              text: "Hubo un error en la consulta.",
              type: "error",
            });
          });
      } else {
        swal({
          title: "Error",
          text: "Debe seleccionar al menos un tipo de manteminiento.",
          type: "error",
        });
      }
    }
  }

  public exportAsExcelFile(rows: any[], excelFileName: string): void {
    if (rows.length > 0) {
      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(rows);
      const workbook: XLSX.WorkBook = {
        Sheets: { "Info-Asig-Vs-Realizados": worksheet },
        SheetNames: ["Info-Asig-Vs-Realizados"],
      };
      console.log(workbook.Sheets);
      console.log(workbook.SheetNames);
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

  getWeekdayShortName(weekday: number): string {
    return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
  }
  getMonthShortName(month: number): string {
    return I18N_VALUES[this._i18n.language].months[month - 1];
  }
  getMonthFullName(month: number): string {
    return this.getMonthShortName(month);
  }

  onDateSelectionFrom(date: any) {
    if (this.untilDate) {
      var fromD = new Date(
        this.fromDate.year,
        this.fromDate.month,
        this.fromDate.day
      ); //31 de diciembre de 2015
      var untilD = new Date(
        this.untilDate.year,
        this.untilDate.month,
        this.untilDate.day
      );

      console.log(this.fromDate.day);
      if (fromD > untilD) {
        console.log("es mayor");
        this.untilDate = this.fromDate;
      }
    }
  }

  onDateSelectionUntil(date: any) {
    var fromD = new Date(
      this.fromDate.year,
      this.fromDate.month,
      this.fromDate.day
    ); //31 de diciembre de 2015
    var untilD = new Date(
      this.untilDate.year,
      this.untilDate.month,
      this.untilDate.day
    );
    if (untilD < fromD) {
      console.log("es mayor");
      this.fromDate = this.untilDate;
    }
  }

  ngOnInit() {}
}
