import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { NewService } from '../../master-services/new/new.service';

import { RestService } from '../../master-services/Rest/rest.service';
import { UploadService } from '../../master-services/services/upload.service';
import { UUID } from 'angular2-uuid';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-master-create-slider',
  templateUrl: './master-create-slider.component.html',
  styleUrls: ['./master-create-slider.component.scss',
    '../../../assets/icon/icofont/css/icofont.scss']
})
export class MasterCreateSliderComponent implements OnInit {

  imgURL: any;
  public imagePath;
  public newImagePath;
  myForm: FormGroup;
  public message: string;
  public newMessage: string;
  submitted = false;
  newinfo: any;
  imageinfo: any;
  s3info: any;
  selectedFiles: FileList = null;
  newSelectedFiles: FileList = null;
  rowsClientN: any;
  rowsTempN: any;
  rowStaticN: any;
  rowsClientI: any;
  rowsTempI: any;
  rowStaticI: any;
  currentNew: any;
  myFormUpdate: FormGroup;
  elementDelete: any;
  lastimage: any;
  enabledUpdated;
  enabled = true;
  newImgURL: any;
  numberPhoto: 0;
  numberUpdatePhoto: 0;

  constructor(private newsevice: NewService,
    private router: Router,
    private uploadService: UploadService) {
    this.loadingData();

    const title = new FormControl('', Validators.required);
    const subtitle = new FormControl('', Validators.required);
    const image = new FormControl();
    const active = new FormControl(true);
    const description = new FormControl('', Validators.required);

    this.myForm = new FormGroup({
      title: title,
      subtitle: subtitle,
      description: description,
      image: image,
      active: active
    });

    const titleUpdate = new FormControl('', Validators.required);
    const subtitleUpdate = new FormControl('', Validators.required);
    const imageUpdate = new FormControl();
    const activeUpdate = new FormControl();
    const descriptionUpdate = new FormControl('', Validators.required);


    this.myFormUpdate = new FormGroup({
      titleUpdate: titleUpdate,
      subtitleUpdate: subtitleUpdate,
      descriptionUpdate: descriptionUpdate,
      imageUpdate: imageUpdate,
      activeUpdate: activeUpdate
    });

  }

  ngOnInit() {
  }

  ngAfterContentInit() {
  }

  onChangeUpdate(check: any) {
    this.enabledUpdated = check;
  }

  onChangeCreate(check: any) {
    this.enabled = check;
  }

  loadingData() {
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();

    this.newsevice.getNews().then(data => {
      const resp: any = data;
      swal.close();
      this.rowsClientN = resp.data;
      this.rowStaticN = resp.data;
      this.rowsTempN = resp.data;

      this.newsevice.getNewsImages().then(data => {
        const resp: any = data;
        swal.close();
        this.rowsClientI = resp.data;
        this.rowStaticI = resp.data;
        this.rowsTempI = resp.data;
      }).catch(error => {
        swal.close();
        console.log(error);
        swal({
          type: 'error',
          title: 'oops a currido un error',
          text: 'se ha presentado un error al cargar la informacion',
          allowOutsideClick: false
        });
      });

    }).catch(error => {
      swal.close();
      console.log(error);
      swal({
        type: 'error',
        title: 'oops a currido un error',
        text: 'se ha presentado un error al cargar la informacion',
        allowOutsideClick: false
      });
    });
  }

  async upload() {
    const file = this.selectedFiles.item(0);
    const uuid = UUID.UUID();
    const extension = (file.name.substring(file.name.lastIndexOf('.'))).toLowerCase();
    this.uploadService.uploadFile(file).then(res => {
      this.s3info = res;
      this.insertNew();
    }).catch(error => {
      swal({
        type: 'error',
        title: 'oops a currido un error',
        text: 'se ha presentado un error al subir la imagen',
        allowOutsideClick: false
      });
    });
  }

  insertNew() {

    let active = 0;

    if (this.enabled === true) {
      active = 1;
    }


    this.newsevice.createNew(this.myForm.controls.title.value, this.myForm.controls.subtitle.value,
      this.myForm.controls.description.value, active.toString())
      .then(resp => {
        this.newinfo = resp;
        if (this.newinfo.success !== true) {
          swal.close();
          swal({
            type: 'error',
            title: 'oops a currido un error',
            text: 'se ha presentado un error al guardar la noticia',
            allowOutsideClick: false
          });
        } else {
          document.getElementById('createNewHide').click();

          /*  this.myForm.get('title').setValue('');
            this.myForm.get('subtitle').setValue('');
            this.myForm.get('description').setValue('');
            document.getElementById('createNewHide').value = '';*/
          this.imgURL = null;
          this.numberPhoto = 0;
          this.myForm.reset();
          this.insertNewImage();
          this.loadingData();
        }
      }).catch(error => {
        console.log(error);
        swal.close();
        swal({
          type: 'error',
          title: 'oops a currido un error',
          text: 'se ha presentado un error al guardar la noticia',
          allowOutsideClick: false
        });
      });
  }

  insertNewImage() {

    this.newsevice.createNewImage(this.newinfo.data.id, this.s3info.Location, this.s3info.ETag, this.s3info.Bucket, this.s3info.Location)
      .then(resp => {
        this.imageinfo = resp;
        if (this.imageinfo.success == true) {
          // this.loadingData();
          swal.close();
          swal({
            type: 'success',
            title: 'Se ha guardado la noticia',
            text: 'la noticia ha guardado correctamente',
            allowOutsideClick: false
          });
        } else {
          swal.close();
          swal({
            type: 'error',
            title: 'oops a currido un error',
            text: 'se ha presentado un error al guardar la imagen',
            allowOutsideClick: false
          });
        }
      }).catch(error => {
        console.log(error);
        swal.close();
        swal({
          type: 'error',
          title: 'oops a currido un error',
          text: 'se ha presentado un error al guardar la imagen',
          allowOutsideClick: false
        });
      });
  }

  preview(files, event) {

    this.numberPhoto = files.length;

    if (files.length === 0) {
      return 'a'
    }

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    this.selectedFiles = event.target.files;

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }

  newPreview(files, event) {
    this.numberUpdatePhoto = files.length;
    if (files.length === 0) {
      return 'no image';
    }


    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.newMessage = 'Only images are supported.';
      return;
    }

    this.newSelectedFiles = event.target.files;

    const reader = new FileReader();
    this.newImagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.newImgURL = reader.result;
    }
  }

  get checkForm() { return this.myForm.controls; }

  createNew() {

    this.submitted = true;

    if (!this.myForm.invalid) {
      if (this.numberPhoto > 0) {
        swal({
          title: 'Validando información ...',
          allowOutsideClick: false
        });

        swal.showLoading();
        this.upload();
        // this.numberPhoto = 0;
      } else {
        swal({
          title: 'Debes cargar una imagen',
          text: 'Es requerido cargar una imagen',
          type: 'error'
        });
      }
    }
  }

  deleteNew(row: any) {
    swal({
      title: 'Estás seguro de eliminar este elemento?',
      type: 'warning',
      showCancelButton: true,
      showConfirmButton: true,
      cancelButtonText: 'No',
      confirmButtonText: 'Si'

    })
      .then((willDelete) => {
        swal.showLoading();
        if (willDelete.value) {
          this.elementDelete = row;
          this.newsevice.deleteNew(Number(this.elementDelete.id))
            .then(data => {
              swal.showLoading();
              const resp: any = data;

              if (resp.success === false) {
                swal({
                  title: 'Esta noticia presenta problemas',
                  text: 'Esta noticia no se puede eliminar',
                  type: 'error'
                });
              } else {
                this.loadingData();
                swal({
                  title: 'noticia eliminada',
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


  get checkFormUpdate() { return this.myFormUpdate.controls; }

  showUpdateNew(row) {
    this.newImgURL = null;
    this.currentNew = row;
    this.lastimage = this.currentNew.image_url;
    this.myFormUpdate.get('titleUpdate').setValue(row.title);
    this.myFormUpdate.get('subtitleUpdate').setValue(row.subtitle);
    this.myFormUpdate.get('descriptionUpdate').setValue(row.text);
    this.myFormUpdate.get('imageUpdate').setValue(row.image);
    this.myFormUpdate.get('activeUpdate').setValue(row.status);
    if (this.currentNew.status == 0) {
      this.enabledUpdated = true;
    } else {
      this.enabledUpdated = false;
    }

    document.getElementById('uploadNew').click();

  }

  updateNew() {
    this.submitted = true;

    if (!this.myFormUpdate.invalid) {
      swal({
        title: 'Validando información ...',
        allowOutsideClick: false
      });
      swal.showLoading();

      let statusTemp = 1;
      if (this.enabledUpdated) {
        statusTemp = 0;
      }

      this.newsevice.updateNew(Number(this.currentNew.id), this.myFormUpdate.controls.titleUpdate.value,
        this.myFormUpdate.controls.subtitleUpdate.value, this.myFormUpdate.controls.descriptionUpdate.value,
        statusTemp)
        .then(data => {

          if (this.newImgURL == null) {

            const resp: any = data;
            if (resp.success === false) {
              document.getElementById('updateNewHide').click();
              swal.close();
              swal({
                title: 'oops ocurrio un error al actualizar',
                text: 'Esta noticia no se puede actualizar',
                type: 'error'
              });
            } else {
              document.getElementById('updateNewHide').click();
              swal.close();
              // this.router.navigateByUrl('master/registerBrand');
              document.getElementById('updateNewHide').click();
              swal({
                title: 'Noticia actualizada',
                type: 'success'
              });
              this.loadingData();
              // this.router.navigateByUrl('createSlider');
            }

          } else {

            this.updateImage();
          }

        }).catch(error => {
          document.getElementById('updateNewHide').click();
          swal.close();
          console.log(error);
          swal({
            title: 'oops ocurrio un error al actualizar',
            text: 'Esta noticia no se puede actualizar',
            type: 'error'
          });
        });
    }
  }

  updateImagedb() {

    this.newsevice.updateImage(this.currentNew.image_id, this.currentNew.id, this.s3info.Location, this.s3info.ETag, this.s3info.Bucket, this.s3info.Location)
      .then(resp => {
        this.imageinfo = resp;
        if (this.imageinfo.success == true) {
          document.getElementById('updateNewHide').click();
          swal.close();
          swal({
            type: 'success',
            title: 'Se ha guardado la noticia',
            text: 'la noticia ha guardado correctamente',
            allowOutsideClick: false
          }).then((willRefresh) => {
            this.router.navigateByUrl('createSlider');
          });
        } else {
          document.getElementById('updateNewHide').click();
          swal.close();
          swal({
            type: 'error',
            title: 'oops a currido un error',
            text: 'se ha presentado un error al guardar la imagen',
            allowOutsideClick: false
          });
        }
      }).catch(error => {
        console.log(error);
        document.getElementById('updateNewHide').click();
        swal.close();
        swal({
          type: 'error',
          title: 'oops a currido un error',
          text: 'se ha presentado un error al guardar la imagen',
          allowOutsideClick: false
        });
      });
  }

  async updateImage() {
    const file = this.newSelectedFiles.item(0);
    const uuid = UUID.UUID();
    const extension = (file.name.substring(file.name.lastIndexOf('.'))).toLowerCase();
    this.uploadService.uploadFile(file).then(res => {
      this.s3info = res;
      this.updateImagedb();
    }).catch(error => {
      console.log(error);
      swal({
        type: 'error',
        title: 'oops a currido un error',
        text: 'se ha presentado un error al subir la imagen',
        allowOutsideClick: false
      });
    });
  }


}
