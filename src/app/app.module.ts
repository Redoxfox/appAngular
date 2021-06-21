import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
//Estas lineas se comentan para sustituir por variable AppRoutingComponent en imports
/*import { LoginComponent } from './vistas/login/login.component';
import { DasboardComponent } from './vistas/dasboard/dasboard.component';
import { EditarComponent } from './vistas/editar/editar.component';
import { NuevoComponent } from './vistas/nuevo/nuevo.component';*/
import { AppRoutingComponent } from './app-routing.module';
//importar para formularios
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AppRoutingComponent
    //Sustituido por variable AppRoutingComponent
    /*LoginComponent,
    DasboardComponent,
    EditarComponent,
    NuevoComponent*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
