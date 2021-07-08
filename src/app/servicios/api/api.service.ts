import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tipoActivoI } from 'src/app/modelos/tipoActivo.interface';
import { entityTipoActivoI } from 'src/app/modelos/entityTipoActivo.inteface';
import { tipoActivoPostI } from 'src/app/modelos/tipoActivoPost.interface';
import { tipoActivoPutI } from 'src/app/modelos/tipoActivoPut.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  initialValueNombre: string ="Estoy vacio";
  constructor(private HttpClient: HttpClient) { 

  }

  cargarUsuarios (url:string ) {
  
    return this.HttpClient.get<tipoActivoI[]>(url);

  }

  getTipoActivos(url:string){
    return this.HttpClient.get<entityTipoActivoI[]>(url);
  }

  postTipoActivos(url:string, entiyTipoActivo:tipoActivoPostI){
    return this.HttpClient.post(url,entiyTipoActivo);
  }

  putTipoActivos(url:string, entiyTipoActivo:tipoActivoPutI){
    return this.HttpClient.put(url,entiyTipoActivo);
  }

}


/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
}*/