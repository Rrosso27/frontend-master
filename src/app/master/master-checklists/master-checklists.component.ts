import { Component, OnInit } from '@angular/core';
import { WorkService } from '../../master-services/Work/work.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { ChecklistService } from '../../master-services/checklist/checklist.service';

@Component({
  selector: 'app-master-checklists',
  templateUrl: './master-checklists.component.html',
  styleUrls: ['./master-checklists.component.scss',
    '../../../assets/icon/icofont/css/icofont.scss']
})
export class MasterChecklistsComponent implements OnInit {

  rowsWork: any;
  rowtodelete: any;

  constructor(private workService: WorkService, private router: Router, private checklistService: ChecklistService) {
    this.getChecklist();
  }

  getChecklist() {
    this.checklistService.showChecklist().then(data => {
      const resp: any = data;
      if (resp.error) {
        swal({
          title: 'Error',
          text: 'Ha ocurrido un error',
          type: 'error'
        });
      } else {
        this.rowsWork = resp.data;

      }
    }).catch(error => {
      swal({
        title: 'Error',
        text: 'Ha ocurrido un error',
        type: 'error'
      });
      console.log(error);
    });
  }

  redirecttodetails() {
    this.router.navigateByUrl('maintenance/registerChecklist');
  }

  goToTpdateView(row: any) {
    this.router.navigateByUrl('maintenance/updateChecklist/' + row.id);
  }
  deleteWorkHeader(workrow: any) {
    swal({
      title: "Confirmacion",
      text: "esta seguro que desea borrar este elemento?",
      cancelButtonText: "No",
      confirmButtonText: "Si",
      showCancelButton: true,
      showConfirmButton: true
    }).then(goingtodelete => {
      if (goingtodelete.value) {
        this.loader();
        this.rowtodelete = workrow;
        this.checklistService.deleteChecklist(this.rowtodelete.id).then(data => {
          const resp: any = data;
          if (resp.success == false) {
            this.generalAlert('Error', 'ocurrio un error durante el procesado', "error");
          } else {
            this.generalAlert('Rutina eliminada', 'Rutina eliminada correctamente', 'success');
            this.getChecklist();
          }
        }).catch(err => {
          console.log(err);
          this.generalAlert('Error', 'ocurrio un error durante el procesado', "error");
        });
      } else {
      }
    });
  }

  generalAlert(title: string, text: string, type: any) {
    swal({
      title: title,
      text: text,
      type: type
    })
  }

  loader() {
    swal({
      title: "procesando informacion",
      allowEscapeKey: false,
      allowOutsideClick: false
    });
    swal.showLoading();
  }


  ngOnInit() {
  }

}
