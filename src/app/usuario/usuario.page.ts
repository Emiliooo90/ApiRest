import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { CrudService } from '../crud.service';
import { ApirestService } from '../apirest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  constructor(private alertController: AlertController,
              private toastController: ToastController,
              private crud: CrudService,
              private apirestService: ApirestService,
              private activatedRouter: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.apirestService.getUsers();
  }

  async validar(nombre: HTMLInputElement, clave: HTMLInputElement)
  {
    let listado = this.apirestService.listado;
    let usuario = nombre.value;
    let contraseña = clave.value;
    let validar = false;

     if (usuario.trim().length == 0 && contraseña.trim().length == 0)
    {
       const toast = await this.toastController.create({
        message: 'Debe ingresar información',
        duration: 3000,
        color: "danger"
      });
      toast.present();
      return;
    }

    else if (usuario.trim().length == 0)
    {
      const toast = await this.toastController.create({
        message: 'Debe ingresar un nombre',
        duration: 3000,
        color: "danger"
      });
      toast.present();
      return;
    }

    else if (contraseña.trim().length == 0)
    {
      const toast = await this.toastController.create({
        message: 'Debe ingresar una contraseña',
        duration: 3000,
        color: "danger"
      });
      toast.present();
      return;
    }

    else if (contraseña != "1234")
    {
      const toast = await this.toastController.create({
        message: 'La contraseña ingresada es inválida',
        duration: 3000,
        color: "danger"
      });
      toast.present();
      return;
    }
    for (let usuarios of listado)
    {

      if (usuarios.username == nombre.value)
      {
        validar = true;
        const cantidad = localStorage.length + 1;
        localStorage.setItem(usuarios.id, nombre.value)
      }
    }
    
    if (validar == false || usuario != nombre.value)
    {
      //this.crud.set(nombre.value, clave.value)

      const toast = await this.toastController.create({
        message: 'Usuario no encontrado',
        duration: 3000,
        color: "danger"
      });
      toast.present();
      return;
    }

    else
    {
      const toast = await this.toastController.create({
        message: 'Usuario encontrado con éxito',
        duration: 3000,
        color: "success"
      });
      toast.present()
      nombre.value = "";
      clave.value = "";
      this.router.navigateByUrl('/detalle')
      return;
    }
  }

}
