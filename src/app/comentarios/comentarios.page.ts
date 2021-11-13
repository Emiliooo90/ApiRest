import { Component, OnInit } from '@angular/core';
import { ApirestService } from '../apirest.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.page.html',
  styleUrls: ['./comentarios.page.scss'],
})
export class ComentariosPage implements OnInit {

  constructor(private apirestService: ApirestService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(p => {
      const id = p.get('id');
      console.log(id);
      this.apirestService.getUser(id);
    })
  }

}
