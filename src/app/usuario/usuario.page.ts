import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { CrudService } from '../crud.service';
import { ApirestService } from '../apirest.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  constructor(private alertController: AlertController,
              private toastController: ToastController,
              private crud: CrudService,
              private api: ApirestService) { }

  ngOnInit() {
    this.api.getUsers();
  }

  async validar(nombre: HTMLInputElement, clave: HTMLInputElement)
  {
    let listado = this.api.listado;
    let usuario = nombre.value;
    let contraseña = clave.value;
    for (let usuarios of listado)
    {
      if (usuarios.username == usuario || contraseña == "1234")
      {
        const toast = await this.toastController.create({
          message: 'Usuario encontrado con éxito',
          duration: 3000,
          color: "success"
        });
        toast.present();
      }

      else if (usuario.trim().length == 0)
      {
        const toast = await this.toastController.create({
          message: 'Debe ingresar su nombre de usuario',
          duration: 3000,
          color: "danger"
        });
        toast.present();
      }

      else if (contraseña.trim().length == 0)
      {
        const toast = await this.toastController.create({
          message: 'Debe ingresar su contraseña',
          duration: 3000,
          color: "danger"
        });
        toast.present()
      }
      else
      {
        const toast = await this.toastController.create({
          message: 'Usuario no encontrado',
          duration: 3000,
          color: "danger"
        });
        toast.present();
      }
    }
  }

}
