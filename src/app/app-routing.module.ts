import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PrincipalComponent } from './components/principal/principal.component';

const routes: Routes = [
  
  {path: 'principal', component: PrincipalComponent},
  {path: 'contacto', component: ContactoComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
