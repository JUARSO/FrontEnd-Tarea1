import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './appcomponet/app.component';
import {FormsModule} from '@angular/forms';
import { FormComponent } from './form/form.component';
import { PostsComponent } from './posts/posts.component';
import {Route, RouterModule, Routes} from '@angular/router';
import { VistaAdministradorComponent } from './vista-administrador/vista-administrador.component';
import { VistaChefComponent } from './vista-chef/vista-chef.component';
import { NavbarAdministradorComponent } from './navbar-administrador/navbar-administrador.component';
import { NavbarCheftComponent } from './navbar-cheft/navbar-cheft.component';

const rutas: Routes = [
  {path: '', component: FormComponent},
  {path: 'administrador', component: VistaAdministradorComponent},
  {path: 'chef' , component: VistaChefComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    PostsComponent,
    VistaAdministradorComponent,
    VistaChefComponent,
    NavbarAdministradorComponent,
    NavbarCheftComponent,
  ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(rutas)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
