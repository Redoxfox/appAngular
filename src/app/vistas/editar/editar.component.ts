import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private activaterouter:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    let elemento = this.activaterouter.snapshot.paramMap.get('id');
  }

}
