import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { Router } from '@angular/router';
import { tipoActivoI } from 'src/app/modelos/tipoActivo.interface';
import { entityTipoActivoI } from 'src/app/modelos/entityTipoActivo.inteface';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DasboardComponent implements OnInit {
  weathers:tipoActivoI[] = [];
  itemActivos:entityTipoActivoI[] = [];
  constructor(private usuarioService:ApiService, private router:Router) { }

  ngOnInit(): void {
    /*this.usuarioService.cargarUsuarios('/weatherforecast')
    .subscribe(resp => {
      console.log(resp)
    });*/
    
    this.usuarioService.cargarUsuarios('/weatherforecast') 
    .subscribe(data => {
      this.weathers = data;
      //console.log(data)
    });

    this.usuarioService.getTipoActivos('/api/Activos')
    .subscribe(data => {
      this.itemActivos = data;
    });
  }
  
  EditarFila(id:number){
    this.router.navigate(['editar', id]);
  }

  nuevoElemento(){
    this.router.navigate(['nuevo']);
  }
}





/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/
