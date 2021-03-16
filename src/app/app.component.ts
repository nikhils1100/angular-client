import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { batchRowData } from './models/batchRowData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dashboardApp';

  constructor(){ 
  }
  
  ngOnInit(): void {
  }
}
