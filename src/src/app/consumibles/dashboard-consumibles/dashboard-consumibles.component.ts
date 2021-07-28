import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { entityConsumiblesGetI } from 'src/app/modelos/Consumibles.interface';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-dashboard-consumibles',
  templateUrl: './dashboard-consumibles.component.html',
  styleUrls: ['./dashboard-consumibles.component.css']
})
export class DashboardConsumiblesComponent implements OnInit {
  itemCosumibles:entityConsumiblesGetI[] = [];
  status:string = '';
  errorMessage:string = '';

  constructor(private usuarioService:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.usuarioService.getConsumibles('/api/Consumibles')
      .subscribe(data => {
      this.itemCosumibles = data;
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
    this.usuarioService.deleteConsumibles(url)
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
