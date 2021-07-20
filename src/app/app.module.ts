import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
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
/*import { DashboardPerifericosComponent } from './perifericos/dashboard-perifericos/dashboard-perifericos.component';
import { EditarPerifericosComponent } from './perifericos/editar-perifericos/editar-perifericos.component';
import { NuevoPerifericosComponent } from './perifericos/nuevo-perifericos/nuevo-perifericos.component';
import { NuevoUsuariosComponent } from './usuarios/nuevo-usuarios/nuevo-usuarios.component';
import { EditarUsuariosComponent } from './usuarios/editar-usuarios/editar-usuarios.component';
import { DashboardUsuariosComponent } from './usuarios/dashboard-usuarios/dashboard-usuarios.component';
import { NuevoComponent } from './activos/nuevo/nuevo.component';
import { EditarComponent } from './activos/editar/editar.component';
import { DashboardComponent } from './activos/dashboard/dashboard.component';
import { DashboardActivosComponent } from './activos/dashboard-activos/dashboard-activos.component';
import { EditarActivosComponent } from './activos/editar-activos/editar-activos.component';
import { NuevoActivosComponent } from './activos/nuevo-activos/nuevo-activos.component';
import { NuevoConsumiblesComponent } from './consumibles/nuevo-consumibles/nuevo-consumibles.component';
import { EditarConsumiblesComponent } from './consumibles/editar-consumibles/editar-consumibles.component';
import { DashboardConsumiblesComponent } from './consumibles/dashboard-consumibles/dashboard-consumibles.component';*/


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AppRoutingComponent,
    
    /*DashboardPerifericosComponent,
    EditarPerifericosComponent,
    NuevoPerifericosComponent,
    NuevoUsuariosComponent,
    EditarUsuariosComponent,
    DashboardUsuariosComponent,
    NuevoComponent,
    EditarComponent,
    DashboardComponent,
    DashboardActivosComponent,
    EditarActivosComponent,
    NuevoActivosComponent,
    NuevoConsumiblesComponent,
    EditarConsumiblesComponent,
    DashboardConsumiblesComponent*/
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
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './vistas/dashboard/dashboard.component';
import { LoginComponent } from './vistas/login/login.component';
import { EditarComponent } from './vistas/editar/editar.component';
import { NuevoComponent } from './vistas/nuevo/nuevo.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    DashboardComponent,
    LoginComponent,
    EditarComponent,
    NuevoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }*/
