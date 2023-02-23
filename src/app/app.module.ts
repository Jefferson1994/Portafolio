import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

//import { AngularFireModule} from '@angular/fire';
import { AngularFireModule } from '@angular/fire/compat';


import { AppComponent } from './app.component';
import { NavarComponent } from './components/navar/navar.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { environment } from 'src/environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import * as firebase from 'firebase/compat';
import { provideStorage, Storage } from '@angular/fire/storage';
import { getStorage } from 'firebase/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalcurriculumComponent } from './components/modalcurriculum/modalcurriculum.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NavarComponent,
    PrincipalComponent,
    ContactoComponent,
    ModalcurriculumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(()=>getStorage()),
    NgbModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule


  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
