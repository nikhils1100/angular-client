import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BatchStateComponent } from './batch-state/batch-state.component';
import { BatchRowsComponent } from './batch-rows/batch-rows.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MessageMonitorComponent } from './message-monitor/message-monitor.component';
import { ProcessMonitorComponent } from './process-monitor/process-monitor.component';

@NgModule({
  declarations: [
    AppComponent,
    BatchStateComponent,
    BatchRowsComponent,
    SearchBarComponent,
    MessageMonitorComponent,
    ProcessMonitorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
