import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { ApirestService } from '../apirest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  listado = [];
  datos: any;
  constructor( private crud: CrudService,
              private apirestService: ApirestService,
              private activatedRouter: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }

  listar()
  {
    for (let i; i <= localStorage.length; i++)
    {
      this.datos = localStorage.getItem(i.toString())
    }
    this.apirestService.getPost(this.datos);
    this.listado = this.apirestService.listado;
  }

  salir()
  {
    localStorage.clear();
    this.router.navigateByUrl('/usuario')
  }

}
