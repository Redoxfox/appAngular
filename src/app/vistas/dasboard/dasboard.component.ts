import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit {

  constructor(private usuarioService:ApiService) { }

  ngOnInit(): void {
    this.usuarioService.cargarUsuarios('/weatherforecast')
    .subscribe(resp => {
      console.log(resp)
    });
  }

}
