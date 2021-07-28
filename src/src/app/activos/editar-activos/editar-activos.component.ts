import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router } from '@angular/router';
import { entityActivoPutI } from 'src/app/modelos/entityActivo.interface';
import { tipoActivoPutI } from 'src/app/modelos/tipoActivoPut.interface';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-editar-activos',
  templateUrl: './editar-activos.component.html',
  styleUrls: ['./editar-activos.component.css']
})
export class EditarActivosComponent implements OnInit {
  updateActivo: FormGroup;
  submitted = false;
  itemActivos=<entityActivoPutI>{};
  id:number = 0 ;

  constructor(private formB:FormBuilder, 
    private usuarioService:ApiService, 
    private router:Router, 
    private arouter:ActivatedRoute,
    public dataService:ApiService) {
      this.updateActivo = this.formB.group({
        id:['',Validators.required],
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
    this.id=Number(this.arouter.snapshot.params.id);
    const url = `/api/mActivos/${this.id}`;
    this.usuarioService.getActivosId(url)
    .subscribe(data => {
      this.updateActivo.controls["nombre"].setValue(data.nombre);
      this.updateActivo.controls["modelo"].setValue(data.modelo);
      this.updateActivo.controls["serial"].setValue(data.serial);
      this.updateActivo.controls["nroActivo"].setValue(data.nroActivo);
      this.updateActivo.controls["procesador"].setValue(data.procesador);
      this.updateActivo.controls["disco"].setValue(data.disco);
      this.updateActivo.controls["color"].setValue(data.color);
      this.updateActivo.controls["nombreEquipo"].setValue(data.nombreEquipo);
      this.updateActivo.controls["asignado"].setValue(data.asignado);
      this.updateActivo.controls["estado"].setValue(data.estado);
      console.log(url);
    });
  }

  updataActivo(){
    this.itemActivos= {
      id:this.id,
      nombre:this.updateActivo.value.nombre,
      modelo:this.updateActivo.value.modelo,
      serial:this.updateActivo.value.serial,
      nroActivo:this.updateActivo.value.nroActivo,
      procesador:this.updateActivo.value.procesador,
      disco:this.updateActivo.value.disco,
      color:this.updateActivo.value.color,
      nombreEquipo:this.updateActivo.value.nombreEquipo,
      asignado:this.updateActivo.value.asignado,
      estado:this.updateActivo.value.nombre
    }
    const url = `/api/mActivos/${this.id}`;
    this.usuarioService.putActivos(url, this.itemActivos)
    .subscribe(data => {
      console.log(data);
      this.router.navigate(['dashboar_activos']);
    }); 
  }

}
