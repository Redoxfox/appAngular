import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { entityTipoActivoCategoriaI, tipoActivoI } from 'src/app/modelos/tipoActivo.interface';
import { entityTipoActivoI } from 'src/app/modelos/entityTipoActivo.inteface';
import { tipoActivoPostI } from 'src/app/modelos/tipoActivoPost.interface';
import { tipoActivoPutI } from 'src/app/modelos/tipoActivoPut.interface';
import { entityActivoGetIdI, entityActivoI, entityActivoPostI, entityActivoPutI } from 'src/app/modelos/entityActivo.interface';
import { entityConsumiblesGetI, entityConsumiblesGetIdI, entityConsumiblesPostI, entityConsumiblesPutI } from 'src/app/modelos/Consumibles.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  initialValueNombre: string ="Estoy vacio";
  constructor(private HttpClient: HttpClient) { 

  }

  //Metodos api tipo activos
  /*cargarUsuarios (url:string ) {
  
    return this.HttpClient.get<tipoActivoI[]>(url);

  }*/

  getTipoActivos(url:string){
    return this.HttpClient.get<entityTipoActivoI[]>(url);
  }

  getTipoActivosId(url:string){
    return this.HttpClient.get<tipoActivoPutI>(url);
  }

  postTipoActivos(url:string, entiyTipoActivo:tipoActivoPostI){
    return this.HttpClient.post(url,entiyTipoActivo);
  }

  putTipoActivos(url:string, entiyTipoActivo:tipoActivoPutI){
    return this.HttpClient.put(url,entiyTipoActivo);
  }

  deleteTipoActivos(url:string){
    return this.HttpClient.delete(url);
  }

  //Metodos api activos

  getActivos(url:string){
    return this.HttpClient.get<entityActivoI[]>(url);
  }

  getActivosId(url:string){
    return this.HttpClient.get<entityActivoGetIdI>(url);
  }

  postActivos(url:string, entiyActivo:entityActivoPostI){
    return this.HttpClient.post(url,entiyActivo);
  }

  putActivos(url:string, entiyTipoActivo:entityActivoPutI){
    return this.HttpClient.put(url,entiyTipoActivo);
  }

  deleteActivos(url:string){
    return this.HttpClient.delete(url);
  }

  //Metodos api consumibles

  getConsumibles(url:string){
    return this.HttpClient.get<entityConsumiblesGetI[]>(url);
  }

  getConsumiblesId(url:string){
    return this.HttpClient.get<entityConsumiblesGetIdI>(url);
  }

  postConsumibles(url:string, entityCosumible:entityConsumiblesPostI){
    return this.HttpClient.post(url,entityCosumible);
  }

  putConsumibles(url:string, entityCosumible:entityConsumiblesPutI){
    return this.HttpClient.put(url,entityCosumible);
  }

  deleteConsumibles(url:string){
    return this.HttpClient.delete(url);
  }

  //Metodos api usuarios

  getUsuarios(url:string){
    return this.HttpClient.get<entityConsumiblesGetI[]>(url);
  }

  getUsuariosId(url:string){
    return this.HttpClient.get<entityConsumiblesGetIdI>(url);
  }

  postUsuarios(url:string, entityCosumible:entityConsumiblesPostI){
    return this.HttpClient.post(url,entityCosumible);
  }

  putUsuarios(url:string, entityCosumible:entityConsumiblesPutI){
    return this.HttpClient.put(url,entityCosumible);
  }

  deleteUsuarios(url:string){
    return this.HttpClient.delete(url);
  }

  getCategoriaActivos(url:string){
    return this.HttpClient.get<entityTipoActivoCategoriaI[]>(url);
  }

}


/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
}*/