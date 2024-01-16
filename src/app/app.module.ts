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
import { OndestoryComponent } from './Common/onDestory/ondestory.component';
import { FormsModule } from '@angular/forms';
import { OperatorComponent } from './Common/RXJS/operators.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomServive } from './service/custom.service';
import { TestComponent } from './Common/Test/test.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    customdirevtive,
    Lengthcheckpipe,
    ViewChildComponent,
    OndestoryComponent,
    OperatorComponent,
    TestComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    customModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [CustomServive],
  bootstrap: [AppComponent]
})
export class AppModule { }
