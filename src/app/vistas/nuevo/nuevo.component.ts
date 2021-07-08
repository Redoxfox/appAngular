import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { entityTipoActivoI } from 'src/app/modelos/entityTipoActivo.inteface';
import { tipoActivoPostI } from 'src/app/modelos/tipoActivoPost.interface';
import { ApiService } from '../../servicios/api/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  createNewTipoActivo: FormGroup;
  submitted = false;
  itemActivos=<tipoActivoPostI>{};

  constructor(private formB:FormBuilder, private usuarioService:ApiService, private router:Router, private arouter:ActivatedRoute) {
    this.createNewTipoActivo = this.formB.group({
      nombre:['',Validators.required]
    })
   }

  ngOnInit(): void {

  }
  
  agregarTipoActivo(){
    
    this.itemActivos= {
      nombre:this.createNewTipoActivo.value.nombre,
    }

    this.usuarioService.postTipoActivos('/api/Activos', this.itemActivos)
    .subscribe(data => {
      console.log(data);
      this.router.navigate(['dashboard']);
    });
    
  }
}
