import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { entityTipoActivoI } from 'src/app/modelos/entityTipoActivo.inteface';
import { tipoActivoPostI } from 'src/app/modelos/tipoActivoPost.interface';
import { ApiService } from '../../servicios/api/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { entityActivoI, entityActivoPostI } from 'src/app/modelos/entityActivo.interface';


@Component({
  selector: 'app-nuevo-activos',
  templateUrl: './nuevo-activos.component.html',
  styleUrls: ['./nuevo-activos.component.css']
})
export class NuevoActivosComponent implements OnInit {
  createNewActivo: FormGroup;
  submitted = false;
  itemActivos=<entityActivoPostI>{};
  itemTipoActivosAll:entityTipoActivoI[] = [];
  itemTipoActivos:entityActivoI[] = [];
  constructor(
    private formB:FormBuilder, 
    private usuarioService:ApiService, 
    private router:Router, 
    private arouter:ActivatedRoute) { 
      this.createNewActivo = this.formB.group({
        nombre:['',Validators.required],
        modelo: ['',Validators.required],
        serial: ['',Validators.required],
        nroActivo: ['',Validators.required],
        procesador:['',Validators.required],
        disco: ['',Validators.required],
        color: ['',Validators.required],
        nombreEquipo:['',Validators.required],
        asignado: ['',Validators.required],
        estado: ['',Validators.required],
        idTipo: ['',Validators.required]
      })
    }

  ngOnInit(): void {
    this.usuarioService.getTipoActivos('/api/Activos')
    .subscribe(data => {
      this.itemTipoActivosAll = data;
    });
  }

  agregarActivo(){
    
    this.itemActivos= {
      nombre:this.createNewActivo.value.nombre,
      modelo: this.createNewActivo.value.modelo,
      serial: this.createNewActivo.value.serial,
      nroActivo:this.createNewActivo.value.nroActivo,
      procesador: this.createNewActivo.value.procesador,
      disco: this.createNewActivo.value.disco,
      color: this.createNewActivo.value.color,
      nombreEquipo:this.createNewActivo.value.nombreEquipo,
      asignado: "DISPONIBLE",
      estado: "BUENO",
      idTipo: this.createNewActivo.value.idTipo
    }
    
    this.usuarioService.postActivos('/api/mActivos', this.itemActivos)
    .subscribe(data => {
      console.log(this.itemActivos);
      this.router.navigate(['dashboar_activos']);
    });
    
  }

}
