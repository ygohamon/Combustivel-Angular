import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { CombustivelModel } from './combustivel/combustivel.model';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CombustivelService {


  constructor(private http: HttpClient) { }
  private api = 'https://combustivelapp.herokuapp.com/api/historico';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  
  cadastrarCombustivel(combustivel: CombustivelModel) :  Observable<any> {
    return this.http.post("https://combustivelapp.herokuapp.com/api/historico",combustivel);

  }

  listarCombustivel() : Observable<any> {
      return this.http.get("https://combustivelapp.herokuapp.com/api/historico");
  }

  atualizarCombustivel(id: string, combustivel: CombustivelModel) : Observable<any>{
    return this.http.put("https://combustivelapp.herokuapp.com/api/historico/".concat(id), combustivel);
  }

  removerCombustivel(id:any): Observable<any>{
    return this.http.delete("https://combustivelapp.herokuapp.com/api/historico/".concat(id));

  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
  
}
