import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { tipoActivoI } from 'src/app/modelos/tipoActivo.interface';
import { entityTipoActivoI } from 'src/app/modelos/entityTipoActivo.inteface';
import { Router } from '@angular/router';
import { entityActivoI } from 'src/app/modelos/entityActivo.interface';

@Component({
  selector: 'app-dashboard-activos',
  templateUrl: './dashboard-activos.component.html',
  styleUrls: ['./dashboard-activos.component.css']
})
export class DashboardActivosComponent implements OnInit {

  itemActivos:entityActivoI[] = [];
  status:string = '';
  errorMessage:string = '';

  constructor(private usuarioService:ApiService, private router:Router) {
    
  }

  ngOnInit(): void {

    this.usuarioService.getActivos('/api/mActivos')
    .subscribe(data => {
      this.itemActivos = data;
    });
  }

  EditarFila(id:number){
    this.router.navigate(['editar_activos', id]);
  }

  nuevoElemento(){
    this.router.navigate(['nuevo_activos']);
  }

  deleteActivosId(id:number){
    const url = `/api/mActivos/${id}`;
    this.usuarioService.deleteActivos(url)
    .subscribe({
          next: data => {
            this.status = 'Delete successful';
            this.ngOnInit();
          },
          error: error => {
            this.errorMessage = error.message;
            console.error('There was an error!', error);
         }
    });
  }

}


