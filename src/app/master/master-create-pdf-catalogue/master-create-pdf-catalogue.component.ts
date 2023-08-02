import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { BrandService } from '../../master-services/brand/brand.service';
import { UploadService } from '../../master-services/services/upload.service';


interface FileCatalogueInterface {
  id?: number;
  url?: string;
  name?: string;
  save?: boolean;
  part?: boolean;
  service?: boolean;
  file?: File;
}

@Component({
  selector: 'app-master-create-pdf-catalogue',
  templateUrl: './master-create-pdf-catalogue.component.html',
  styleUrls: ['./master-create-pdf-catalogue.component.scss',
    '../../../assets/icon/icofont/css/icofont.scss']
})
export class MasterCreatePdfCatalogueComponent implements OnInit {

  fileCatalogue: FileCatalogueInterface;

  selectedFiles: Array<File> = [];
  urlsFiles = [];

  selectedValueUpdate: any = 0;
  selectedValue: any = 0;
  selectedModel: any = 0;
  selectedModelUpdate: any = 0;
  selectedUpdate: any = 0;
  selectType: any = 0;
  selectTypeUpdate: any = 0;


  brands: any;
  model: any;
  type: any;
  s3info: any;
  catalogue: any;

  constructor(private brandService: BrandService, private router: Router, private uploadService: UploadService) {
    this.loadingData();
  }

  loadingData() {
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();

    this.brandService.getBrandAll().then(data => {
      const resp: any = data;
      swal.close();
      this.brands = resp.data;
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

    this.brandService.getModel(this.selectedValue.id).then(data => {
      const resp: any = data;
      this.model = resp.data_models
      swal.close();

    }).catch(error => {
      console.log(error);
      swal({
        title: 'Falla al cargar la información',
        text: 'No se pudo cargar los modelos',
        type: 'error'
      });
    });
  }

  loadingCatalogueId() {
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
    this.brandService.getCatalogueIdCount(this.selectedModel.id).then(data => {
      const resp: any = data;
      swal.close();
      if (resp.success) {
        this.router.navigateByUrl('master/cataloguePdfUpdate/' + this.selectedModel.id);
      }
    }).catch(error => {
      console.log(error);
      swal({
        title: 'Falla al cargar la información',
        text: 'No se pudo cargar las marcas',
        type: 'error'
      });
    });
  }

  validateCreate() {
    if (this.selectedValue !== 0 && this.selectedModel != 0) {
      swal({
        title: 'Validando información ...',
        allowOutsideClick: false
      });
      swal.showLoading();

      this.brandService.getValidateCatalogue(this.selectedModel.id).then(data => {
        const resp: any = data;
        swal.close();

        if (!resp.success) {
          swal({
            title: 'No se puede guardar la información',
            text: 'Ya existen archivos creados para este modelo, por favor entre por "actualizar" para continuar',
            type: 'error'
          });
        } else {
          this.uploadFiles();
        }

      }).catch(error => {
        console.log(error);
        swal({
          title: 'Falla al cargar la información',
          text: 'No se pudo cargar los modelos',
          type: 'error'
        });
      });
    } else {
      swal({
        type: 'error',
        title: 'Falta información',
        text: 'Por favor escoja cada una de las opciones.',
      });
    }
  }

  uploadFiles() {

    if (this.urlsFiles.length > 0) {
      swal({
        title: 'Validando información ...',
        allowOutsideClick: false
      });
      swal.showLoading();
      let save = true;
      let count = 1;
      for (let fileCurrent of this.urlsFiles) {
        const file = fileCurrent;
        let type;
        if (fileCurrent.part) {
          type = 1;
        }
        if (fileCurrent.service) {
          type = 2;
        }
        let nameTemp;
        if (!fileCurrent.save) {
          nameTemp = this.removeAccents(this.normalizes(file.name.replace(/\s/g, "")));
        }
        this.uploadService.uploadFilesCatalogue(fileCurrent, this.selectedValue.id, this.selectedModel.id, type, nameTemp).then(res => {
          this.s3info = res;
          swal({
            title: 'Archivos guardados',
            type: 'success'
          });
          swal.close();
          if (count == this.urlsFiles.length) {
            this.router.navigateByUrl('master/cataloguePdfUpdate/' + this.selectedModel.id);
          }
          count++;
        }).catch(error => {
          save = false;
          swal({
            type: 'error',
            title: 'Oops a currido un error',
            text: 'Se ha presentado un error al subir la imagen',
            allowOutsideClick: false
          });
        });
      }
    } else {
      swal({
        type: 'error',
        title: 'Sin arvhivos',
        text: 'No se ha seleccionado ningun archivo para montar',
      });
    }
  }

  deleteFile(index: number, item: any) {
    swal({
      title: 'Estás seguro de eliminar este elemento?',
      // text: 'Once deleted, you will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      showConfirmButton: true,
      cancelButtonText: 'No',
      confirmButtonText: 'Si'

    }).then((willDelete) => {
      if (willDelete.value) {
        this.urlsFiles.splice(index, 1);
      } else {
      }
    });
  }

  onChangeType(index: number, type: number, event) {
    let even = event.target.checked;
    if (even == true && type == 1) {
      this.urlsFiles[index].service == true ? this.urlsFiles[index].service = false : this.urlsFiles[index].service = false;
    }
    if (even == true && type == 2) {
      this.urlsFiles[index].part == true ? this.urlsFiles[index].part = false : this.urlsFiles[index].part = false;
    }
  }

  onSelectFile(event) {
    let filesAmount = []
    filesAmount = event.target.files;

    for (let item of filesAmount) {

      let filename = item.name;

      this.fileCatalogue = {
        id: 0,
        name: filename,
        part: false,
        service: false,
        file: item,
        save: false
      };

      this.urlsFiles.push(this.fileCatalogue);
      // this.selectedFiles.push(['files'=>item,]);
    }
  }

  removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  normalizes = (function () {
    var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç$#+*%&!¡¿?|¬",
      to = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc",
      mapping = {};

    for (var i = 0, j = from.length; i < j; i++)
      mapping[from.charAt(i)] = to.charAt(i);

    return function (str) {
      var ret = [];
      for (var i = 0, j = str.length; i < j; i++) {
        var c = str.charAt(i);
        if (mapping.hasOwnProperty(str.charAt(i)))
          ret.push(mapping[c]);
        else
          ret.push(c);
      }
      return ret.join('');
    }

  })();

  ngOnInit() {
  }

}
