import { Component, OnInit } from '@angular/core';
import { ApirestService } from '../apirest.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.page.html',
  styleUrls: ['./comentarios.page.scss'],
})
export class ComentariosPage implements OnInit {
  listado = [];
  idPersona: String;

  constructor(private apirestService: ApirestService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(async p => {
      this.idPersona = p.get('id');
    })
    this.leer();
  }

  async leer()
  {
    this.apirestService.getComment(this.idPersona);
    this.listado = this.apirestService.listado;
    console.log("metodo leer" + this.listado);
    console.log(this.idPersona);
  }

}
