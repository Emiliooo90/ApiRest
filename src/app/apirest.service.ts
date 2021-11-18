import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {
  listado = []
  datos: any;
  private apiURL = 'https://jsonplaceholder.typicode.com/'

  constructor(private http: HttpClient,
              private crud: CrudService) { }

  getUsers()
  {
    let url = this.apiURL + 'users';
    return new Promise((resolve, reject) => 
    {
      this.http.get(url).subscribe((data : []) =>
      {
        data.forEach(item => {this.listado.push(item) });
        console.table(this.listado);
      },
      error => { console.log("error en la solicitud" )}
      )
    })
  }

  getUser(id: String)
  {
    let url = this.apiURL + 'users' + id;
    return new Promise((resolve, reject) =>
    {
      this.http.get(url).subscribe((data: any) =>
      {
        this.datos = data;
        console.log(this.datos);
      },
      error => { console.log("error en la solicitud")
      })
    })
  }

  getPost(id: String)
  {
    this.listado = [];
    this.datos = "";
    let url = this.apiURL + 'users/' + id +'/posts';
    return new Promise((resolve, reject) =>
    {
      this.http.get(url).subscribe((data: []) =>
      {
        data.forEach(item => {this.listado.push(item) });
        //console.table(this.listado);
        for (let i = 0; i < this.listado.length; i++)
        {
          const elemento = i;
          this.crud.set(String(elemento), this.listado[elemento]);
        }
      },
      error => {
        for (let i = 0; i < 10; i++)
        {
          const elemento = i;
          this.crud.get(String(elemento)).then(item => {this.listado.push(item)});
        }
        console.log(this.listado);
      })
    })
  }

  async getComment(id: String)
  {
    this.listado = [];
    this.datos = "";
    let url  = this.apiURL + 'posts/' + id + '/comments';
    return new Promise ((resolve, reject) => {
      this.http.get(url).subscribe((data: []) => {
        resolve(data)
        data.forEach(item => {this.listado.push(item) });
        for (let i = 0; i < this.listado.length; i++)
        {
          const elemento = i;
          this.crud.set("post" + elemento, this.listado[i]);
        }
      },
      error => {
        for (let i = 0; i < 5; i++)
        {
          const elemento = i;
          this.crud.get("post" + String(elemento)).then(item => {this.listado.push(item)});
        }
        console.log(this.listado)
      })
    })
  }
}
