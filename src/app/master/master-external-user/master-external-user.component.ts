import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CustomValidators } from "ng2-validation";
import { UserService } from "../../master-services/User/user.service";
import { RestService } from "../../master-services/Rest/rest.service";
import swal from "sweetalert2";
import { UserInternalInterface } from "../../master-models/user-internal";
import { Router } from "@angular/router";
import { empty } from "rxjs/Observer";
import { Console } from "console";

// Esta interfaz es para listar las sedes
interface UserOfficesInterface {
  idCustomer: number;
  id: number;
  officeName: string;
  status: boolean;
}

interface UserOfficesInterfaceUpdate {
  id: number;
  officeName: string;
  status: boolean;
}

// this.officesTemp = {
//   id: 1,
//   officeName: 'Medellin',
//   status: true
// };

// Esta interfaz es para llevar rastreo de relaciones
interface UserOfficesClienteInterface {
  idClient?: number;
  idBranchs?: string;
}

interface regionalSelectInterface {
  // item para mostrar selccionados
  id?: number;
  code?: string;
  description?: string;
  cheked?: boolean;
}

@Component({
  selector: "app-master-external-user",
  templateUrl: "./master-external-user.component.html",
  styleUrls: [
    "./master-external-user.component.scss",
    "../../../assets/icon/icofont/css/icofont.scss",
  ],
})
export class MasterExternalUserComponent implements OnInit {
  myForm: FormGroup;
  myUpdateForm: FormGroup;
  mynumberForm: FormGroup;
  mytooltipForm: FormGroup;
  checkdropForm: FormGroup;
  loading: boolean;
  name: string;
  a: "aaa";
  load = true;
  errorProfile = false;
  userInternal: UserInternalInterface;
  officesUpdated: Array<UserOfficesInterface> = [];
  userOfficeRelationShips: Array<UserOfficesInterface> = []; // Enfocado a las suscursales
  clientOfficeRelationShips: Array<UserOfficesClienteInterface> = []; // Enfocado a los clientes y sedes
  clientOfficeRelationShip: UserOfficesClienteInterface;
  clientOfficeRelationShipUpdate: UserOfficesClienteInterface;
  officesTemp: UserOfficesInterface;
  officesTempUpdate: UserOfficesInterfaceUpdate;
  userOfficeRelationShipsUpdate: Array<UserOfficesInterfaceUpdate> = [];
  submitted = false;
  submittedUpload = false;
  rowsUser: any;
  currentUser: any;
  elementDelete: any;
  enabledUpdated = true;
  change = true;
  selectedProfileId = 0;
  selectedProfileIdUpdate = 0;
  showButtonUpdated = 0;
  customers: any;
  selectedBusinessId: any = 0;
  customerOffices: any;
  customerOfficesUpdate: any;
  idBranchOffices = [1];
  idBranchOfficesUpdate = [1];
  idUserBranchOffice: any;
  userId;
  rowsClient: any;
  currentCustomer: any;
  nameCustomer: any;
  statusTempUpdate;
  currentCustomerUpdated;

  checkAllRegional = false;
  regional = [];
  regionals: Array<regionalSelectInterface> = [];
  itemRegional: regionalSelectInterface;
  rowsRegionals: any;
  rowsRegional: any;
  selectRegional: Array<regionalSelectInterface> = [];
  valor: any;
  regionalCustomer = [];
  profiles: any;
  userProfile: any;

  constructor(
    private userService: UserService,
    private router: Router,
    private restService: RestService
  ) {
    this.userProfile = localStorage.getItem("profile");

    this.loading = true;
    this.loadingData();
    this.getUser();
    // this.getProfile();
    const name = new FormControl("", Validators.required);
    const lastname = new FormControl("", Validators.required);
    const username = new FormControl("", Validators.required);
    const cellphone = new FormControl("");
    const telephone = new FormControl("");
    const password = new FormControl("", [
      Validators.required,
      Validators.minLength(6),
    ]);
    // const identification = new FormControl('', Validators.required);
    const email = new FormControl("", [Validators.required, Validators.email]);
    const profile = new FormControl("", Validators.required);
    const rpassword = new FormControl("", [
      Validators.required,
      CustomValidators.equalTo(password),
    ]);
    this.myForm = new FormGroup({
      name: name,
      lastname: lastname,
      username: username,
      cellphone: cellphone,
      telephone: telephone,
      email: email,
      password: password,
      rpassword: rpassword,
      profile: profile,
    });

    const updatename = new FormControl("", Validators.required);
    const updatelastname = new FormControl("", Validators.required);
    const updateusername = new FormControl("", Validators.required);
    const updatecellphone = new FormControl("");
    const updatetelephone = new FormControl("");
    const updateemail = new FormControl("", [
      Validators.required,
      Validators.email,
    ]);
    const updateprofile = new FormControl("", Validators.required);
    this.myUpdateForm = new FormGroup({
      updatename: updatename,
      updatelastname: updatelastname,
      updateusername: updateusername,
      updatecellphone: updatecellphone,
      updatetelephone: updatetelephone,
      updateemail: updateemail,
      updateprofile: updateprofile,
    });
  }

  onChangeActive(check: any) {
    const id = this.currentUser.data.id;

    this.change = check;
    this.enabledUpdated = check;
  }

  ngOnInit() {}

  getUser() {
    swal({
      title: "Obteniendo información ...",
      allowOutsideClick: false,
    });
    swal.showLoading();
    this.userService
      .getUsers()
      .then((data) => {
        const resp: any = data;
        if (resp.error) {
          swal({
            title: "Error",
            text: "Ha ocurrido un error",
            type: "error",
          });
        } else {
          swal.close();
          this.rowsUser = resp.data;
        }
      })
      .catch((error) => {
        swal.close();
        swal({
          title: "Error",
          text: "Ha ocurrido un error",
          type: "error",
        });
        console.log(error);
      });
  }

  loadingData() {
    this.restService
      .getCustomer()
      .then((data) => {
        const resp: any = data;
        this.customers = resp.data;
        swal.close();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  sendUser() {
    this.submitted = true;
    if (!this.myForm.invalid) {
      swal({
        title: "Validando información ...",
        allowOutsideClick: false,
      });
      swal.showLoading();
      this.errorProfile = false;

      let active = 0;

      if (this.change === false) {
        active = 1;
      }

      this.userService
        .createUserInternal(
          this.myForm.get("name").value,
          this.myForm.get("lastname").value,
          this.myForm.get("name").value +
            " " +
            this.myForm.get("lastname").value,
          this.myForm.get("username").value,
          this.myForm.get("cellphone").value,
          this.myForm.get("telephone").value,
          this.myForm.get("password").value,
          this.myForm.get("rpassword").value,
          this.myForm.get("email").value,
          this.myForm.get("profile").value,
          active
        )
        .then((data) => {
          const resp: any = data;
          if (resp.error) {
            let msg = "";
            if (resp.error.message === "The username already exists.") {
              msg = "El usuario ya existe";
            } else {
              msg = "El correo electrónico ya existe";
            }
            swal({
              title: msg,
              text: "Este usuario no se puede registrar",
              type: "error",
            });
          } else {
            swal({
              title: "Usuario agregado",
              type: "success",
            }).then((varAlert) => {
              // this.getUser();

              this.currentUser = data;
              this.showButtonUpdated = 1;

              this.myUpdateForm
                .get("updatename")
                .setValue(this.myForm.get("name").value);
              this.myUpdateForm
                .get("updatelastname")
                .setValue(this.myForm.get("lastname").value);
              this.myUpdateForm
                .get("updateusername")
                .setValue(this.myForm.get("username").value);
              this.myUpdateForm
                .get("updatecellphone")
                .setValue(this.myForm.get("cellphone").value);
              this.myUpdateForm
                .get("updatetelephone")
                .setValue(this.myForm.get("telephone").value);
              this.myUpdateForm
                .get("updateemail")
                .setValue(this.myForm.get("email").value);
              this.selectedProfileIdUpdate = Number(
                this.myForm.get("profile").value
              );
              if (this.myForm.get("profile").value == 4) {
                this.getRegionals();
              }
            });
            // this.router.navigateByUrl('master');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      this.errorProfile = true;
    }
  }

  onChangeActiveUpdated(check: any) {
    const id = this.currentUser.data.id;

    if (check) {
      this.userService
        .ActivateateUser(id)
        .then((data) => {
          const resp: any = data;
          if (resp.error) {
            swal({
              title: "Error",
              text: "Ha ocurrido un error",
              type: "error",
            });
          } else {
            swal.close();
            this.rowsUser = resp.data;
          }
        })
        .catch((error) => {
          swal.close();
          swal({
            title: "Error",
            text: "Ha ocurrido un error",
            type: "error",
          });
          console.log(error);
        });
    } else {
      this.userService
        .inactivateUser(id)
        .then((data) => {
          const resp: any = data;
          if (resp.error) {
            swal({
              title: "Error",
              text: "Ha ocurrido un error",
              type: "error",
            });
          } else {
            swal.close();
            this.rowsUser = resp.data;
          }
        })
        .catch((error) => {
          swal.close();
          swal({
            title: "Error",
            text: "Ha ocurrido un error",
            type: "error",
          });
          console.log(error);
        });
    }
  }

  updateUser() {
    this.submittedUpload = true;
    if (!this.myUpdateForm.invalid) {
      swal({
        title: "Validando información ...",
        allowOutsideClick: false,
      });
      swal.showLoading();
      this.errorProfile = false;

      let active = 0;

      if (this.enabledUpdated === false) {
        active = 1;
      }

      this.userService
        .updateUser(
          this.myUpdateForm.get("updatename").value,
          this.myUpdateForm.get("updatelastname").value,
          this.myUpdateForm.get("updatename").value +
            " " +
            this.myUpdateForm.get("updatelastname").value,
          this.myUpdateForm.get("updateusername").value,
          this.myUpdateForm.get("updatecellphone").value,
          this.myUpdateForm.get("updatetelephone").value,
          this.myUpdateForm.get("updateemail").value,
          this.currentUser.data.id,
          this.myUpdateForm.get("updateprofile").value,
          active
        )
        .then((data) => {
          const resp: any = data;
          if (resp.error) {
            let msg = "";
            console.log(resp.error);
            if (resp.error.message == "The username already exists.") {
              msg = "El usuario ya existe";
            }
            if (resp.error.message == "The email already exists.") {
              msg = "El correo electrónico ya existe";
            } else {
              msg = "ocurrio un error";
            }
            swal({
              title: msg,
              text: "Este usuario no se puede actualizar",
              type: "error",
            });
          } else {
            swal({
              title: "Usuario actualizado",
              type: "success",
            }).then((data) => {
              this.getUser();
              if (this.myUpdateForm.get("updateprofile").value == 4) {
                this.getRegionals();
              }
            });
            // this.router.navigateByUrl('master');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      this.errorProfile = true;
    }
  }

  getRegionals() {
    if (this.regionals.length >= 1) {
    }
    this.restService
      .getRegional()
      .then((data) => {
        const resp: any = data;
        this.rowsRegional = resp.data;
        this.rowsRegional.forEach((item) => {
          this.itemRegional = {
            id: item.id,
            code: item.code,
            description: item.description,
            cheked: false,
          };
          this.regionals.push(this.itemRegional);
        });

        this.getRegionalId(this.currentUser.data.id);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getRegionalId(id: number) {
    this.userService.getRegionalId(id).then((data) => {
      const resp: any = data;
      this.rowsRegionals = resp.data_userRegionals;
      this.regional = [];
      this.rowsRegionals.forEach((value) => {
        let index = this.regionals.indexOf(
          this.regionals.find((x) => x.id == value.regional_id)
        );
        if (index != -1) {
          this.itemRegional = {
            id: this.regionals[index].id,
            code: this.regionals[index].code,
            description: this.regionals[index].description,
            cheked: true,
          };

          this.regionals.splice(index, 1);
          this.regionals.push(this.itemRegional);
        }
      });
    });
  }

  finalRegional() {
    this.selectRegional = [];
    if (this.showButtonUpdated === 0) {
      swal({
        title: "Falla en la asignación",
        text: "Debes crear un cliente",
        type: "error",
      });
    } else {
      for (let i = 0; i < this.regionals.length; i++) {
        if (this.regionals[i].cheked) {
          this.selectRegional.push(this.regionals[i]);
        }
      }
      let regionalSelec = "";
      for (let i = 0; i < this.selectRegional.length; i++) {
        regionalSelec = regionalSelec + "@" + this.selectRegional[i].id;
      }

      if (regionalSelec != "") {
        swal({
          title: "Validando información ...",
          allowOutsideClick: false,
        });
        swal.showLoading();

        this.userService
          .technicianRegionalSelect(regionalSelec)
          .then((data) => {
            const resp: any = data;
            if (resp.success === false) {
              swal({
                title: "Falla en la asignación",
                text: "No se pudo asignar la sucursal",
                type: "error",
              });
            } else {
              swal({
                title: "Sucursales guardadas",
                type: "success",
              });
            }
          })
          .catch((error) => {
            swal.close();
            swal({
              title: "Falla en la asignación",
              text: "No se pudo asignar la sucursal",
              type: "error",
            });
          });
      } else {
        swal({
          title: "Se presentó un problema",
          text: "Favor selecionar al menos una opcion.",
          type: "error",
        });
      }
    }
  }

  partChangeActive(event: any, item: any) {
    for (let i = 0; i < this.regionals.length; i++) {
      if (this.regionals[i].id == item.id) {
        this.regionals[i].cheked = event.target.checked;
      }
    }
  }

  checkUncheckAllPart(event: any) {
    this.checkAllRegional = event.target.checked;
    for (let i = 0; i < this.regionals.length; i++) {
      this.regionals[i].cheked = event.target.checked;
    }
  }

  get checkForm() {
    return this.myForm.controls;
  }

  get checkUpdateForm() {
    return this.myUpdateForm.controls;
  }

  public saveEmail(email: string): void {}

  public handleRefusalToSetEmail(dismissMethod: string): void {
    // dismissMethod can be 'cancel', 'overlay', 'close', and 'timer'
    // ... do something
  }

  openAjaxSwal() {
    swal({
      title: "Estás seguro?",
      // text: 'Once deleted, you will not be able to recover this imaginary file!',
      type: "warning",
      showConfirmButton: true,
      showCancelButton: true,
    }).then((willDelete) => {
      if (willDelete.value) {
        swal(this.a);
        this.kilo();
      } else {
        swal("Fail");
      }
    });
  }

  changeCheckUpdate(item: any) {}

  deleteUser(row: any) {
    swal({
      title: "Estás seguro de eliminar este elemento?",
      type: "warning",
      showCancelButton: true,
      showConfirmButton: true,
      cancelButtonText: "No",
      confirmButtonText: "Si",
    }).then((willDelete) => {
      swal.showLoading();
      if (willDelete.value) {
        this.elementDelete = row;
        this.userService
          .deleteUsers(Number(this.elementDelete.id))
          .then((data) => {
            swal.showLoading();
            const resp: any = data;

            if (resp.success === false) {
              swal({
                title: "Este Usuario presenta problemas",
                text: "Este Usuario no se puede eliminar",
                type: "error",
              });
            } else {
              swal({
                title: "Usuario eliminada",
                type: "success",
              }).then((data) => {
                this.getUser();
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        // swal('Fail');
      }
    });
  }

  showUpdateUser(row) {
    this.currentUser = row;
    this.myUpdateForm.get("updatename").setValue(row.first_name);
    this.myUpdateForm.get("updatelastname").setValue(row.last_name);
    this.myUpdateForm.get("updateusername").setValue(row.username);
    this.myUpdateForm.get("updatecellphone").setValue(row.cellphone);
    this.myUpdateForm.get("updatetelephone").setValue(row.telephone);
    this.myUpdateForm.get("updateemail").setValue(row.email);
    this.myUpdateForm.get("updateprofile").setValue(row.profile_id);

    // Hay que un for y llenar el array para mostrar

    if (this.currentUser.status === "0") {
      this.enabledUpdated = true;
    } else {
      this.enabledUpdated = false;
    }

    document.getElementById("uploadUser").click();
  }

  selectOffices(event: any) {
    this.userOfficeRelationShips.map(function (dato) {
      if (Number(dato.id) === Number(event.id)) {
        if (dato.status === false) {
          dato.status = true;
        } else {
          dato.status = false;
        }
      }
      return dato;
    });

    const search = this.idBranchOffices.indexOf(event.id);
    if (search == -1) {
      this.idBranchOffices.push(event.id);
    } else {
      const pos = this.idBranchOffices.indexOf(event.id);
      this.idBranchOffices.splice(pos, 1);
    }
  }

  selectOfficesUpdate(event: any) {
    this.userOfficeRelationShipsUpdate.map(function (dato) {
      if (Number(dato.id) === Number(event.id)) {
        if (dato.status === false) {
          dato.status = true;
        } else {
          dato.status = false;
        }
      }
      return dato;
    });

    const search = this.idBranchOfficesUpdate.indexOf(event.id);
    if (search == -1) {
      this.idBranchOfficesUpdate.push(event.id);
    } else {
      const pos = this.idBranchOfficesUpdate.indexOf(event.id);
      this.idBranchOfficesUpdate.splice(pos, 1);
    }
  }

  relationshipUserOffice() {
    this.idBranchOffices = [1];

    for (let office of this.userOfficeRelationShips) {
      if (office.status === true) {
        this.idBranchOffices.push(office.id);
      }
    }

    if (this.idBranchOffices.length == 1) {
      swal({
        title: "Importante",
        text: "Debes seleccionar al menos una sede.",
        type: "warning",
      });
    } else {
      for (let i = 0; i < this.clientOfficeRelationShips.length; i++) {
        if (
          this.clientOfficeRelationShips[i].idClient === this.selectedBusinessId
        ) {
          this.clientOfficeRelationShips.splice(i, 1);
        }
      }

      this.idBranchOffices.splice(0, 1);
      let itemsOffice = this.idBranchOffices.toString();
      this.clientOfficeRelationShip = {
        idClient: this.selectedBusinessId,
        idBranchs: itemsOffice,
      };
      this.clientOfficeRelationShips.push(this.clientOfficeRelationShip);
      this.selectedBusinessId = 0;
      this.userOfficeRelationShips = [];
    }
  }

  relationshipUserOfficeUpdate() {
    this.idBranchOfficesUpdate = [1];

    for (let office of this.userOfficeRelationShipsUpdate) {
      if (office.status === true) {
        this.idBranchOfficesUpdate.push(office.id);
      }
    }

    if (this.idBranchOffices.length == 1) {
      swal({
        title: "Importante",
        text: "Debes seleccionar al menos una sede.",
        type: "warning",
      });
    } else {
      this.idBranchOfficesUpdate.splice(0, 1);
      let itemsOffice = this.idBranchOfficesUpdate.toString();
      this.clientOfficeRelationShipUpdate = {
        idClient: this.currentCustomerUpdated,
        idBranchs: itemsOffice,
      };

      let numOffices = this.clientOfficeRelationShipUpdate.idBranchs.split(",");
      let branchOfficesNumbeUpdate = [1];

      if (numOffices.length > 0) {
        for (let branch of numOffices) {
          branchOfficesNumbeUpdate.push(Number(branch));
        }
      }

      branchOfficesNumbeUpdate.splice(0, 1);
      //Borrar sedes y volver agregar
      this.deleteAllOfficesBranchUser(
        this.currentUser.data.id,
        this.currentCustomerUpdated,
        branchOfficesNumbeUpdate
      );
    }
  }

  getCustomerOffice() {
    this.idBranchOffices = [1];
    this.userOfficeRelationShips = [];
    this.restService
      .getCustomerOffice(this.selectedBusinessId)
      .then((data) => {
        const resp: any = data;

        let idCustomer = resp.customer.id;

        this.customerOffices = resp.data_branchoffices;

        for (let customerOffice of this.customerOffices) {
          let resultCustomer;
          let statusTemp = false;
          if (this.clientOfficeRelationShips.length > 0) {
            resultCustomer = this.clientOfficeRelationShips.filter(
              (word) => word.idClient === idCustomer
            );

            if (resultCustomer.length > 0) {
              let officesBranchTemp = resultCustomer[0].idBranchs;
              officesBranchTemp = officesBranchTemp.split(",");

              for (let office of officesBranchTemp) {
                if (office === customerOffice.id.toString()) {
                  statusTemp = true;
                }
              }
            }

            this.officesTemp = {
              idCustomer: idCustomer,
              id: customerOffice.id,
              officeName: customerOffice.branch_name,
              status: statusTemp,
            };
            this.userOfficeRelationShips.push(this.officesTemp);
          } else {
            this.officesTemp = {
              idCustomer: idCustomer,
              id: customerOffice.id,
              officeName: customerOffice.branch_name,
              status: statusTemp,
            };
            this.userOfficeRelationShips.push(this.officesTemp);
          }
        }

        swal.close();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  goAdminUsers() {
    this.router.navigateByUrl("master/register");
  }

  updateCustomerOffices(customer) {
    this.currentCustomer = customer;

    this.idBranchOffices = [1];

    swal({
      title: "Obteniendo información ...",
      allowOutsideClick: false,
    });
    swal.showLoading();
    this.restService
      .getRelationshipUserOffices(this.currentUser.data.id)
      .then((data) => {
        const resp: any = data;
        if (resp.error) {
          swal({
            title: "Error",
            text: "Ha ocurrido un error",
            type: "error",
          });
        } else {
          this.idUserBranchOffice = resp.data.customers;
          //--------------------
          this.restService
            .getCustomerOffice(this.currentCustomer.id)
            .then((data) => {
              const resp: any = data;

              this.customerOfficesUpdate = resp.data_branchoffices;
              this.currentCustomerUpdated = resp.customer.id;
              let idbranchOfficesTemp = [1];
              this.userOfficeRelationShipsUpdate = [];
              let globalOfficeBranch: any;
              for (let clientOfficeUpdate of this.idUserBranchOffice) {
                for (let clientOfficeUpdateBranch of clientOfficeUpdate.branch_offices) {
                  idbranchOfficesTemp.push(clientOfficeUpdateBranch.id);
                }
              }

              for (let customerOffices of this.customerOfficesUpdate) {
                this.statusTempUpdate = false;
                for (let office of idbranchOfficesTemp) {
                  if (office === customerOffices.id) {
                    this.statusTempUpdate = true;
                    break;
                  }
                }

                this.officesTempUpdate = {
                  id: customerOffices.id,
                  officeName: customerOffices.branch_name,
                  status: this.statusTempUpdate,
                };
                this.userOfficeRelationShipsUpdate.push(this.officesTempUpdate);
              }

              swal.close();
            })
            .catch((error) => {
              console.log(error);
            });

          //-----------------------
        }
      })
      .catch((error) => {
        swal.close();
        swal({
          title: "Error",
          text: "Ha ocurrido un error",
          type: "error",
        });
        console.log(error);
      });

    document.getElementById("relationShipUpdate").click();
  }

  getRelationshipUserOffices() {
    swal({
      title: "Obteniendo información ...",
      allowOutsideClick: false,
    });
    swal.showLoading();
    this.restService
      .getRelationshipUserOffices(this.currentUser.data.id)
      .then((data) => {
        const resp: any = data;
        if (resp.error) {
          swal({
            title: "Error",
            text: "Ha ocurrido un error",
            type: "error",
          });
        } else {
          this.rowsClient = resp.data.customers;
          swal.close();
        }
      })
      .catch((error) => {
        swal.close();
        swal({
          title: "Error",
          text: "Ha ocurrido un error",
          type: "error",
        });
        console.log(error);
      });
  }

  public kilo() {}

  createRelationShip() {}

  closeModalRelationship() {
    document.getElementById("createBrandHide").click();
    // poner vector con numeros enteros
    for (let clientOffice of this.clientOfficeRelationShips) {
      let numOffices = clientOffice.idBranchs.split(",");
      let branchOfficesNumber = [1];

      if (numOffices.length > 0) {
        for (let branch of numOffices) {
          branchOfficesNumber.push(Number(branch));
        }
      }

      branchOfficesNumber.splice(0, 1);

      if (branchOfficesNumber.length > 0) {
        this.restService
          .createRelationshipUserOffices(
            this.currentUser.data.id,
            branchOfficesNumber,
            clientOffice.idClient
          )
          .then((data) => {
            const resp: any = data;
            this.getRelationshipUserOffices();
          })
          .catch((error) => {
            swal({
              title: "Error",
              text: "Alguna de las relaciones que quieres crear, ya esta creada",
              type: "error",
            });

            console.log(error);
          });
      }
    }

    this.officesUpdated = [];
    this.userOfficeRelationShips = []; // Enfocado a las suscursales
    this.clientOfficeRelationShips = [];
  }

  showClient() {
    if (this.showButtonUpdated === 0) {
      swal({
        title: "Error",
        text: "Debes crear un usuario",
        type: "error",
      });
    } else {
      document.getElementById("relationShipCustomer").click();
    }
  }

  deleteAllOfficesBranchUser(
    idUser: number,
    idCustomer: number,
    branchOfficesNumbeUpdate: Array<number>
  ) {
    this.userService
      .deleteOfficesBranchUser(idUser, idCustomer)
      .then((data) => {
        const resp: any = data;

        if (branchOfficesNumbeUpdate.length > 0) {
          this.restService
            .createRelationshipUserOffices(
              this.currentUser.data.id,
              branchOfficesNumbeUpdate,
              this.currentCustomerUpdated
            )
            .then((data) => {
              const resp: any = data;
              swal({
                title: "Sedes actualizadas",
                type: "success",
              });

              swal.close();
            })
            .catch((error) => {
              swal({
                title: "Error",
                text: "Alguna de las relaciones que quieres crear, ya esta creada",
                type: "error",
              });

              console.log(error);
            });
        }

        document.getElementById("updateBranchHide").click();

        this.selectedBusinessId = 0;
        this.idBranchOfficesUpdate = [];
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getProfile() {
    this.userService
      .showProfile()
      .then((data) => {
        const resp: any = data;
        this.profiles = resp.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteCustomerOffices(customer) {}
}
