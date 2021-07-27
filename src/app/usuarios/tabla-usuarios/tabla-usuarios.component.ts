import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.scss']
})
export class TablaUsuariosComponent implements OnInit {

  url = 'http://localhost:8000/'
  users: any

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get(`${this.url}users`).toPromise().then(
      response => {
        this.users = response
      }
    ).catch(
      error => {
        console.log('Error', error)

        alert('Ocurrió un error inesperado, intenta nuevamente.')
      }
    )
  }

}
