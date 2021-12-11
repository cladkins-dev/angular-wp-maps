import { NgModule, VERSION } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';




import {  MatButtonModule } from '@angular/material/button';
import { CustomTableComponent } from './custom-table/custom-table.component';


console.log("Angular Verison:"+VERSION.full);  


@NgModule({
  declarations: [
    AppComponent,
    CustomTableComponent
  ],
  imports: [ 
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule, 
    MatButtonModule, 
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
