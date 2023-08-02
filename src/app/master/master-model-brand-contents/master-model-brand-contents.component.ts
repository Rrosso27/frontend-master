import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { BrandService } from '../../master-services/brand/brand.service';
import { ForkliftService } from '../../master-services/Forklift/forklift.service';
import { RestService } from '../../master-services/Rest/rest.service';
import { UploadService } from '../../master-services/services/upload.service';



@Component({
  selector: 'app-master-model-brand-contents',
  templateUrl: './master-model-brand-contents.component.html',
  styleUrls: ['./master-model-brand-contents.component.scss',
  '../../../assets/icon/icofont/css/icofont.scss']
})
export class MasterModelBrandContentsComponent implements OnInit {

  elementDelete: any;

  brands: any;
  model: any;
  catalogue: any;

  customers: any;
  customerOffices: any = 0;
  selectedBusinessId: any = 0;
  selectedOfficeId: any = 0;

  constructor(private restService: RestService,private brandService:BrandService, private router: Router, private uploadService: UploadService,
    private forkliftService: ForkliftService) {


    // this.getCatalogue();
    this.loadingData();

  }


  getCatalogue() {
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();

    this.brandService.getCatalogue().then(data => {
      const resp: any = data;
      console.log('tipos');
      console.log(data);
      this.catalogue = resp.data;
      swal.close();

      console.log(this.brands);
    }).catch(error => {
      console.log(error);
      swal({
        title: 'Falla al cargar la información',
        text: 'No se pudo cargar las marcas',
        type: 'error'
      });
    });
  }

  loadingData() {
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();

    this.brandService.getBrandAll().then(data => {
      const resp: any = data;
      console.log('marcas');
      console.log(data);
      swal.close();
      this.brands = resp.data;
      // this.rowStatic = resp.data;
      // this.rowsTemp = resp.data;
      console.log(this.brands);
    }).catch(error => {
      console.log(error);
      swal({
        title: 'Falla al cargar la información',
        text: 'No se pudo cargar las marcas',
        type: 'error'
      });
    });
  }

  loadingModel() {
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();

    this.brandService.getModel(this.selectedBusinessId).then(data => {
      const resp: any = data;
      console.log('modelos');
      console.log(data);
      this.model = resp.data_models
      swal.close();

      // console.log(this.rowsClient);
    }).catch(error => {
      console.log(error);
      swal({
        title: 'Falla al cargar la información',
        text: 'No se pudo cargar los modelos',
        type: 'error'
      });
    });
  }


  updateFuel(row) {
    console.log(row);
    this.router.navigateByUrl('master/cataloguePdfUpdate/'+row.modelBrand.model_contents_id);
  }

  deleteCatalogue(fuel: any) {
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
          this.brandService.deleteCatalogue(Number(this.elementDelete.modelBrand.model_contents_id))
            .then(data => {
              swal.showLoading();
              const resp: any = data;
              console.log(resp);

              if (resp.success === false) {
                swal({
                  title: 'Se presento un problema',
                  text: 'Estos archivos no se pueden eliminar',
                  type: 'error'
                });
              } else {
                // this.router.navigateByUrl('master/registerBrand');
                this.getCatalogue();
                swal({
                  title: 'Archivos eliminados',
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

  getCustomerOffice() {
    console.log(this.selectedBusinessId);
    this.getCustomersForklift(this.selectedBusinessId,'');
    this.loadingModel();

  }

  getCustomersForklift(idCustomer:number,model) {
    this.brandService.getCatalogueFilter(model,idCustomer).then(data => {
      const resp: any = data;
      console.log('forklifts');
      console.log(data);
      swal.close();
      this.catalogue = resp.data;
      console.log( this.catalogue);
    }).catch(error => {
      console.log(error);
    });
   }


  uploadFiles() {
    this.router.navigateByUrl('master/createCataloguePdf');
  }



  ngOnInit() {
  }
}
