import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { RestService } from '../../master-services/Rest/rest.service';

import swal from 'sweetalert2';


const I18N_VALUES = {
  'fr': {
    weekdays: ['Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb', 'Dom'],
    months: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Agos', 'Sep', 'Oct', 'Nov', 'Dic'],
  }
};


@Component({
  selector: 'app-master-log-trm',
  templateUrl: './master-log-trm.component.html',
  styleUrls: ['./master-log-trm.component.scss',
  '../../../assets/icon/icofont/css/icofont.scss']
})
export class MasterLogTrmComponent implements OnInit {

  fromDate: NgbDateStruct;
  untilDate: NgbDateStruct;
  today = this.calendar.getToday();

  considerDate=true;

  rowsClient:any;


  constructor(private calendar: NgbCalendar, private restService: RestService, 
    public formatter: NgbDateParserFormatter,) {

    var date = new Date();
    var ngbDateStruct = { day: date.getDate(), month: date.getMonth(), year: date.getFullYear()};
    var ngDateStruct = { day: date.getDate(), month: date.getMonth()+1, year: date.getFullYear()};
    
       this.fromDate=ngbDateStruct;
       this.untilDate=ngDateStruct;

       this.loadingData();
       this.getEstimateFiltersInitial();
   }

   loadingData() {
    swal({
      title: 'Validando información ...',
      allowOutsideClick: false
    });
    swal.showLoading();
   }


  onDateSelectionFrom(date: any) {

    if(this.untilDate){
    var fromD = new Date(this.fromDate.year, this.fromDate.month, this.fromDate.day); //31 de diciembre de 2015
    var untilD = new Date(this.untilDate.year, this.untilDate.month, this.untilDate.day);
 
    console.log(this.fromDate.day);
      if(fromD> untilD){
        console.log('es mayor');
        this.untilDate=this.fromDate;
      }
    }
  }

  onDateSelectionUntil(date: any) {
    var fromD = new Date(this.fromDate.year, this.fromDate.month, this.fromDate.day); //31 de diciembre de 2015
    var untilD = new Date(this.untilDate.year, this.untilDate.month, this.untilDate.day);
    if( untilD< fromD){
      console.log('es mayor');
      this.fromDate=this.untilDate;
    }
}

changeConsiderDate(event: any){
  if(this.considerDate==true){
    this.considerDate=false;
  }else{
    this.considerDate=true;
  }
 
  console.log('------');
  console.log(this.considerDate);
 
  }

  getEstimateFiltersInitial() {

    let params='';
    let cont=0;
 
    var day = (this.fromDate.day < 10 ? '0' : '') +this.fromDate.day;
    // 01, 02, 03, ... 10, 11, 12
    let month = ((this.fromDate.month) < 10 ? '0' : '') + (this.fromDate.month);
    // 1970, 1971, ... 2015, 2016, ...
    var year = this.fromDate.year;
 
    // until poner los ceros
    var dayUntil = (this.untilDate.day < 10 ? '0' : '') +this.untilDate.day;
    // 01, 02, 03, ... 10, 11, 12
    let monthUntil = ((this.untilDate.month) < 10 ? '0' : '') + (this.untilDate.month);
    // 1970, 1971, ... 2015, 2016, ...
    var yearUntil = this.untilDate.year;    
 
    var fromD = year +'-'+ month+'-'+ day;
    var untilD = yearUntil +'-'+ monthUntil+'-'+ dayUntil;
 
    //  var fromD = this.fromDate.year+'-'+this.fromDate.month+'-'+this.fromDate.day; //31 de diciembre de 2015
    //  var untilD = this.untilDate.year+'-'+this.untilDate.month+'-'+this.untilDate.day;
      params='from_date='+ fromD+' 00:00:00'+'&&'+'to_date=' +untilD+' 23:59:59';
 
    console.log('.---------->'+params);
    this.restService.showLogFilter(params).then(data => {
      const resp: any = data;
      console.log('info de filter');
      console.log(data);
      swal.close();

      for (let item of  resp.data) {
        console.log(item.value);
        item.value = this.finalFormatStandard(Number(item.value).toFixed(2));
        console.log(resp.data.value);
      }
      console.log(resp.data);
     // this.customers  = resp.data;
       this.rowsClient = resp.data;
      // this.rowStatic =  resp.data;
      // this.rowsTemp = resp.data;
      // console.log( this.rowsClient);
    }).catch(error => {
      console.log(error);
    });
   }

   finalFormatStandard(priceUpdate:any){
    var num = priceUpdate; // this.changeFormatDecimal(this.workforceHourValue);
    console.log('num');
    console.log(num);
    num +='';
    var splitStr = num.split('.');
    var splitLeft = splitStr[0];
    var splitRight = splitStr.length > 1 ? ',' + splitStr[1] : '';
    var regx = /(\d+)(\d{3})/;
    while (regx.test(splitLeft)) {
    splitLeft = splitLeft.replace(regx, '$1' + '.' + '$2');
    console.log(splitLeft);
    }
    console.log('Importante oleole');
    console.log(splitLeft +splitRight);
    num=splitLeft +splitRight;
    console.log('Boom');
    console.log(num);
    return num;  
  }
  ngOnInit() {
  }

}
