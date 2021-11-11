import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private storage: Storage) {
    this.init();
   }

   async init()
   {
     await this.storage.create();
   }

   async set(key: String, valor: any)
   {
     await this.storage.set(valor[0].id, valor);
   }

   get(key:string)
   {
     return this.storage.get(key)
   }
}
