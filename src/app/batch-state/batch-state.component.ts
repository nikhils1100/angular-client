import { Component, OnInit } from '@angular/core';
import { faCheckCircle, faArrowCircleLeft, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { of } from 'rxjs';
import { batchRowData } from '../models/batchRowData';
import Swal from 'node_modules/sweetalert';


@Component({
  selector: 'app-batch-state',
  templateUrl: './batch-state.component.html',
  styleUrls: ['./batch-state.component.css']
})
export class BatchStateComponent implements OnInit {
  // @ts-ignore
  batchRows: Observable<batchRowData[]>;
  batchesData: batchRowData;
  // @ts-ignore
  batchDataArray: batchRowData[];
  faCheckCircle = faCheckCircle;
  faArrowCircleLeft = faArrowCircleLeft;
  faTimesCircle = faTimesCircle;
  modalDisplay: boolean = false;
  displayMessage: string = "Do you want to delete ?";

  constructor(){
    this.batchesData = {
      "batch": 1,
        "carrier": "Carrier1",
        "yymm": this.formatDate("2015-03-25"),
        "type": "Type1",
        "description": "Something...",
        "tasknState": "TaskState1",
        "action": "check",
        "changedBy": "ChangedBy1",
        "firstMailer": "FirstMailer1",
        "reasonDesc": "Reason1"
    }
    this.batchDataArray = [this.batchesData];
    this.batchesData = {
      "batch": 2,
      "carrier": "Carrier2",
      "yymm": this.formatDate("2015-03-25"),
      "type": "Type2",
      "description": "Something...",
      "tasknState": "TaskState2",
      "action": "check",
      "changedBy": "ChangedBy2",
      "firstMailer": "FirstMailer2",
      "reasonDesc": "Reason2"
    }
    this.batchDataArray.push(this.batchesData);
  }
  ngOnInit(): void {
    of<batchRowData[]>(this.batchDataArray).subscribe(res => this.batchRows = res);
    console.log(this.batchRows);
  }

  formatDate(date:any):string {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  }

  modalToggle = () => {
    this.modalDisplay = !this.modalDisplay;
  }

  checkButtonWindow1(){
    Swal({
      text: this.displayMessage,
      buttons:[
        'cancel','ok',
      ]
  }).then((result)=>{
    Swal({
      text:'You chose '+String(result)
    })
  });
  }

}
