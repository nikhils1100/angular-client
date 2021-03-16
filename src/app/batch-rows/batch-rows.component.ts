import { Component, Input, OnInit } from '@angular/core';
import { faArrowCircleLeft, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Swal from 'node_modules/sweetalert';
import { batchRowData } from '../models/batchRowData';

@Component({
  selector: 'app-batch-rows',
  templateUrl: './batch-rows.component.html',
  styleUrls: ['./batch-rows.component.css']
})

export class BatchRowsComponent implements OnInit {
  // @ts-ignore
  @Input() batchRows: batchRowData;

  faCheckCircle = faCheckCircle;
  faArrowCircleLeft = faArrowCircleLeft;
  faTimesCircle = faTimesCircle;
  modalDisplay: boolean = false;
  displayMessage: string = "Do you want to delete ?";

  static modal: HTMLElement | null = document.getElementById('myModal');
  static btn: HTMLElement | null = document.getElementById('myBtn');
  // @ts-ignore 
  static span: HTMLElement | null = document.getElementsByClassName('close')[0];

  constructor() { }

  ngOnInit(): void {

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

  modalToggle = () => {
    this.modalDisplay = !this.modalDisplay;
  }

  checkButtonModal = function() {
    let outer = BatchRowsComponent;
    // @ts-ignore 
    outer.modal.style.display = "block";
  }

  // @ts-ignore 
  spanModalNone = function() {
    let outer = BatchRowsComponent;
    // @ts-ignore 
    outer.modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  // @ts-ignore 
  window = function(event:any) {
    let outer = BatchRowsComponent;
    if (event.target == outer.modal) {
      // @ts-ignore 
      outer.modal.style.display = "none";
    }
  } 

}