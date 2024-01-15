import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { customdirevtive } from './publicdirective/customdirevtive';
import { Lengthcheckpipe } from './Custompipes/lenghtpipe.pipe';
import { Hostlisting } from './publicdirective/Hostlisting';
import { customModule } from './Modules/custom.module';
import { ViewChildComponent } from './viewChild/viewChild.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    customdirevtive,
    Lengthcheckpipe,
    ViewChildComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    customModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }