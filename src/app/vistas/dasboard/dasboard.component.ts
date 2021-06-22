import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { Router } from '@angular/router';
import { listweatherforecastI } from 'src/app/modelos/weatherforecast.intaface';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit {
  weathers:listweatherforecastI[] = [];
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
  }

}
