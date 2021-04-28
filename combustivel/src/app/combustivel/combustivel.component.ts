import { Component, OnInit } from '@angular/core';
import { CombustivelService } from '../combustivel.service';
import { CombustivelModel } from './combustivel.model';

@Component({
  selector: 'app-combustivel',
  templateUrl: './combustivel.component.html',
  styleUrls: ['./combustivel.component.css'], 
  preserveWhitespaces: true
})
export class CombustivelComponent implements OnInit {
  combustivel: CombustivelModel = new CombustivelModel();
  combustiveis: Array<any> = new Array();

  constructor(private combustivelService: CombustivelService) {}


  ngOnInit() {
    this.listarCombustivel();    

  }
  atualizar(id: string) {
    this.combustivelService.atualizarCombustivel(id, this.combustivel).subscribe(combustivel => {
      this.combustivel = new CombustivelModel();
      this.listarCombustivel();
    }, err => {
      console.log('Error ao atualizar o historico', err);
    }
    )

  }
  remover(id:number){
    this.combustivelService.removerCombustivel(id).subscribe(combustivel => {
      this.combustivel = new CombustivelModel();
      this.listarCombustivel();
    }, err => {
      console.log('Error ao remover o historico', err);
    }
    )
  }
  cadastrar() {
    console.log(this.combustivel)
    this.combustivelService.cadastrarCombustivel(this.combustivel).subscribe(combustivel => {
      this.combustivel = new CombustivelModel();
      this.listarCombustivel();
    }, err => {
      console.log('Error ao cadastrar um historico', err);
    }
    )

  }
  

  listarCombustivel() {
    this.combustivelService.listarCombustivel().subscribe(combustiveis => {
        this.combustiveis = combustiveis;
    }, err => {
      console.log('Erro ao listar os historico', err);
    }
    )
}
}
