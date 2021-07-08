import { RouterModule, Routes } from '@angular/router';
//Lineas para importar rutas para componentes
import { LoginComponent } from './vistas/login/login.component';
import { EditarComponent } from './vistas/editar/editar.component';
import { DasboardComponent } from './vistas/dashboard/dashboard.component';
import { NuevoComponent } from './vistas/nuevo/nuevo.component';
import { NgModule } from '@angular/core';
const routes: Routes = [
  //Agregar ruta por defecto login
  {path:'',redirectTo:'login', pathMatch:'full'},
  //Agregar path de rutas
  {path:'login', component:LoginComponent},
  {path:'editar/:id', component:EditarComponent},
  {path:'dashboard', component:DasboardComponent},
  {path:'nuevo', component:NuevoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//Esta linea es para simplificar el codigo en archivo app.module.ts
export const AppRoutingComponent =[LoginComponent, EditarComponent, DasboardComponent,NuevoComponent];


/*import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }*/