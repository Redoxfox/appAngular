import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { entityConsumiblesGetI } from 'src/app/modelos/Consumibles.interface';
import { entityActivoI } from 'src/app/modelos/entityActivo.interface';
import { ApiService } from 'src/app/servicios/api/api.service';
import { entityTipoActivoI } from 'src/app/modelos/entityTipoActivo.inteface';
import { entityTipoActivoCategoriaI } from 'src/app/modelos/tipoActivo.interface';

@Component({
  selector: 'app-dashboard-usuarios',
  templateUrl: './dashboard-usuarios.component.html',
  styleUrls: ['./dashboard-usuarios.component.css']
})

export class DashboardUsuariosComponent implements OnInit {
  Mostrar=false;
  itemActivos:entityTipoActivoCategoriaI[] = [];
  itemCosumibles:entityConsumiblesGetI[] = [];
  Activos:string = "Activos";
  Perifericos:string = "Perifericos";
  Consumibles = "Consumibles";
  Id:number=0;
  SelectedTipoActivo:entityTipoActivoI = {
    id:0,
    nombre:"",
    activos:[],
    consumibles:[],
    perifericos:[]
  }


  constructor(private usuarioService:ApiService, private router:Router) { 
   
  }

  ngOnInit(): void {
     
      
  }

  TipoActivo(){
    console.log(this.Activos);
    this.Mostrar=true;
    /*this.usuarioService.getActivos('/api/mActivos')
    .subscribe(data => {
      this.itemActivos = data;
    });*/
    const url = `/api/Activos/TipoActivos?TipoActiv_o=${this.Activos}`;
    console.log(url);
    this.usuarioService.getCategoriaActivos(url)
    .subscribe(data => {
      this.itemActivos = data;
      console.log(this.itemActivos);
    });
  }

  TipoPerifericos(){
    console.log(this.Activos);
  }

  TipoCosumibles(){
    console.log(this.Activos);
  }

  ListarItem(){
    this.SelectedTipoActivo.nombre= (<HTMLInputElement>document.getElementById("TipoActivos")).value;
    console.log(this.SelectedTipoActivo.nombre)
  }
}
