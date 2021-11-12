import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { ApirestService } from '../apirest.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  listado = []
  constructor( private crud: CrudService,
              private api: ApirestService) { }

  ngOnInit() {
  }

  listar()
  {
    this.api.getPost;
    this.listado = this.api.listado;
  }

}
