import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { ModulesService } from '../../master-services/modules/modules.service';
import { RestService } from '../../master-services/Rest/rest.service';

@Component({
  selector: 'app-master-routes',
  templateUrl: './master-routes.component.html',
  styleUrls: ['./master-routes.component.scss',
  '../../../assets/icon/icofont/css/icofont.scss'],
})
export class MasterRoutesComponent implements OnInit {

  rowsClient: any;
  currentRoute: any;
  description: any;

  constructor(private restService: RestService,private moduleService: ModulesService) {
    this.getRotues();
  }


  getRotues() {
    //selectedCostCenterId
    swal({
          title: 'Validando información ...',
          allowOutsideClick: false
        });
    this.moduleService.getRoute('j').then(data => {
      const resp: any = data;
      console.log(data);
      swal.close();
      this.rowsClient = resp.data;
    }).catch(error => {
      console.log(error);
    });
  }

  updateRoute(row) {
    console.log(row);
    this.currentRoute = row;
    console.log(this.currentRoute);
    this.description = this.currentRoute.description;
    document.getElementById('updateRoutes').click();

  }

  updateRoutes() {

      if (this.description.trim()!='') {
        swal({
          title: 'Validando información ...',
          allowOutsideClick: false
        });
        swal.showLoading();
        console.log('kakakaka');
        this.restService.updateRoutes(Number(this.currentRoute.id), this.description.toUpperCase())
          .then(data => {
            const resp: any = data;
            if (resp.success === false) {
              swal({
                title: 'Falla en la actualizacion',
                text: 'Esta ruta no se pudo actualizar',
                type: 'error'
              });
            } else {
              console.log('Cambio');
              document.getElementById('updateWarehousesHide').click();
              this.getRotues();
              swal({
                title: 'Ruta actualizada.',
                type: 'success'
              });
            }
          }).catch(error => {
            console.log(error);
          });
      
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

}
