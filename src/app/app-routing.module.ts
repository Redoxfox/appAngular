import { RouterModule, Routes } from '@angular/router';
//Lineas para importar rutas para componentes
import { LoginComponent } from './vistas/login/login.component';
import { EditarComponent } from './vistas/editar/editar.component';
import { DasboardComponent } from './vistas/dashboard/dashboard.component';
import { NuevoComponent } from './vistas/nuevo/nuevo.component';
import { DashboardActivosComponent} from './activos/dashboard-activos/dashboard-activos.component';
import { EditarActivosComponent } from './activos/editar-activos/editar-activos.component';
import { NuevoActivosComponent } from './activos/nuevo-activos/nuevo-activos.component';
import { DashboardConsumiblesComponent } from './consumibles/dashboard-consumibles/dashboard-consumibles.component';
import { EditarConsumiblesComponent } from './consumibles/editar-consumibles/editar-consumibles.component';
import { NuevoConsumiblesComponent } from './consumibles/nuevo-consumibles/nuevo-consumibles.component';
import { DashboardPerifericosComponent } from './perifericos/dashboard-perifericos/dashboard-perifericos.component';
import { EditarPerifericosComponent } from './perifericos/editar-perifericos/editar-perifericos.component';
import { NuevoPerifericosComponent } from './perifericos/nuevo-perifericos/nuevo-perifericos.component';
import { DashboardUsuariosComponent } from './usuarios/dashboard-usuarios/dashboard-usuarios.component';
import { EditarUsuariosComponent } from './usuarios/editar-usuarios/editar-usuarios.component';
import { NuevoUsuariosComponent } from './usuarios/nuevo-usuarios/nuevo-usuarios.component';
import { NgModule } from '@angular/core';
const routes: Routes = [
  //Agregar ruta por defecto login
  {path:'',redirectTo:'login', pathMatch:'full'},
  //Agregar path de rutas
  {path:'login', component:LoginComponent},
  {path:'editar/:id', component:EditarComponent},
  {path:'dashboard', component:DasboardComponent},
  {path:'nuevo', component:NuevoComponent},
  {path:'dashboar_activos', component:DashboardActivosComponent},
  {path:'editar_activos/:id', component:EditarActivosComponent},
  {path:'nuevo_activos', component:NuevoActivosComponent},
  {path:'dashboard_comsumibles', component:DashboardConsumiblesComponent},
  {path:'editar_comsumibles/:id', component:EditarConsumiblesComponent},
  {path:'nuevo_comsumibles', component:NuevoConsumiblesComponent},
  {path:'dashboard_perifericos', component:DashboardPerifericosComponent},
  {path:'editar_perifericos/:id', component:EditarPerifericosComponent},
  {path:'nuevo_perifericos', component:NuevoPerifericosComponent},
  {path:'dashboard_usuarios', component:DashboardUsuariosComponent},
  {path:'editar_usuarios/:id', component:EditarUsuariosComponent},
  {path:'nuevo_usuarios', component:NuevoUsuariosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//Esta linea es para simplificar el codigo en archivo app.module.ts
export const AppRoutingComponent =[
  LoginComponent, EditarComponent, DasboardComponent,NuevoComponent,
  DashboardActivosComponent, EditarActivosComponent, NuevoActivosComponent,
  DashboardConsumiblesComponent, EditarConsumiblesComponent, NuevoConsumiblesComponent
];


/*import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }*/