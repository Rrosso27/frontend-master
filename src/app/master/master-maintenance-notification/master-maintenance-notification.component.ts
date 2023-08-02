import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { ResumenesService } from '../../master-services/resumenes/resumenes.service';

@Component({
  selector: 'app-master-maintenance-notification',
  templateUrl: './master-maintenance-notification.component.html',
  styleUrls: ['./master-maintenance-notification.component.scss',
  '../../../assets/icon/icofont/css/icofont.scss'],
})
export class MasterMaintenanceNotificationComponent implements OnInit {

  days: number = 0;
  rowClient: any;

  constructor( private resumenesService: ResumenesService) {this.getDays() }

  getDays(){
    
    this.resumenesService.getNotificationDay().then(data => {
      const resp: any = data;
      console.log(data);
      this.rowClient = resp.data;
      swal.close();
      if(resp.error){
        swal({
          title:'Oops',
          text: 'Hubo un error en al cargar el día.',
          type: 'error'
          });
      }
    }).catch(error => {
      console.log(error);
      swal({
        title:'Oops',
        text: 'Hubo un error en al cargar el día.',
        type: 'error'
        });
    });
  }

  saveDay(){
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    console.log(this.days);
    this.resumenesService.createNotificationDay(this.days).then(data => {
      const resp: any = data;
      console.log(data);
      // this.rowClient = resp.data;
      this.getDays();
      console.log(resp.error);
      swal.close();
      if(resp.error){
        swal({
          title:'Oops',
          text: 'Hubo un error en al guardar el día.',
          type: 'error'
          });
      }
      else{
        swal({
          title: 'Se ha guardado correctamente',
          type: 'success'
        });
        document.getElementById('createBrandHide').click();
      }
    }).catch(error => {
      console.log(error);
      swal({
        title:'Oops',
        text: 'Hubo un error en al guardar el día.',
        type: 'error'
        });
    });  

  }

  assingNumber(){
    this.days = this.rowClient[0].day
  }

  ngOnInit() {
  }

}
