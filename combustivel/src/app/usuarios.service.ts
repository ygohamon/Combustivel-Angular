import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs';
import { UsuariosModel } from './usuarios/usuarios.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  cadastrarUsuario(usuario: UsuariosModel) :  Observable<any> {
    return this.http.post("https://combustivelapp.herokuapp.com/api/usuarios",usuario);

  }

  listarUsuarios() : Observable<any> {
      return this.http.get("https://combustivelapp.herokuapp.com/api/usuarios");
  }

  atualizarUsuario(id: any, usuario: UsuariosModel) : Observable<any>{
    return this.http.put("https://combustivelapp.herokuapp.com/api/usuarios/".concat(id), usuario);
  }

  removerUsuario(id:any): Observable<any>{
    return this.http.delete("https://combustivelapp.herokuapp.com/api/usuarios/".concat(id));

  }
  
}
