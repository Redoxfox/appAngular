import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { listweatherforecastI } from 'src/app/modelos/weatherforecast.intaface';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private HttpClient: HttpClient) { 

  }

  cargarUsuarios (url:string ) {
  
    return this.HttpClient.get<listweatherforecastI[]>(url);

  }

}
