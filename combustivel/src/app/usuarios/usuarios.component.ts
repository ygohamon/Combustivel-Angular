import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import {UsuariosModel} from './usuarios.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'], 
  preserveWhitespaces: true

})

export class UsuariosComponent implements OnInit {

  usuario: UsuariosModel = new UsuariosModel();
  usuarios: Array<any> = new Array();

  constructor(private usuariosService: UsuariosService) {}


  ngOnInit() {
    this.listarUsuarios();    

  }

  atualizar(id: string){
    this.usuariosService.atualizarUsuario(id, this.usuario).subscribe(usuario => {
      this.usuario = new UsuariosModel();
      this.listarUsuarios();
    }, err => {
      console.log('Error ao atualizar o usuario', err);
    }
    )

  }
  remover(id:number){
    this.usuariosService.removerUsuario(id).subscribe(usuario => {
      this.usuario = new UsuariosModel();
      this.listarUsuarios();
    }, err => {
      console.log('Error ao remover o usuario', err);
    }
    )
  }
  cadastrar() {
    console.log(this.usuario)
    this.usuariosService.cadastrarUsuario(this.usuario).subscribe(usuario => {
      this.usuario = new UsuariosModel();
      this.listarUsuarios();
    }, err => {
      console.log('Error ao cadastrar um usuario', err);
    }
    )

  }
  

  listarUsuarios() {
    this.usuariosService.listarUsuarios().subscribe(usuarios => {
        this.usuarios = usuarios;
    }, err => {
      console.log('Erro ao listar os Usuarios', err);
    }
    )
  }

}
