import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router } from '@angular/router';
import { tipoActivoPutI } from 'src/app/modelos/tipoActivoPut.interface';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  updateTipoActivo: FormGroup;
  submitted = false;
  itemActivos=<tipoActivoPutI>{};
  id:number = 0 ;
  valueNombreS:string ="";
 
  constructor(private formB:FormBuilder, 
    private usuarioService:ApiService, 
    private router:Router, 
    private arouter:ActivatedRoute,
    public dataService:ApiService) 
    { 
    this.updateTipoActivo = this.formB.group({
      id:['',Validators.required],
      nombre:['',Validators.required]
    })
    
  }

  
  
 
  
   
  ngOnInit(): void {
    
    this.id=Number(this.arouter.snapshot.params.id);
    console.log(this.id, this.valueNombreS );
  }

  updataTipoActivo(){
    
    this.itemActivos= {
      id:this.id,
      nombre:this.updateTipoActivo.value.nombre
    }
    const url = `/api/Activos/${this.id}`;
    this.usuarioService.putTipoActivos(url, this.itemActivos)
    .subscribe(data => {
      console.log(data);
      this.router.navigate(['dashboard']);
    });
    
  }

}
