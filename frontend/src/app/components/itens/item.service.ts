import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Item } from './item.module';
import { EMPTY, Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  baseUrl = 'http://localhost:3001/itens'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  
  mostrarMensagem(msg: string, temErro: boolean = false): void {

    this.snackBar.open(msg, '', {
      duration: 10000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: temErro ? ["msg-error"] : ["msg-success"]
    })
  }

  criar(item: Item): Observable<Item> {
    return this.http.post<Item>(this.baseUrl, item).pipe(
      map((obj) => obj), catchError(e => this.handleError(e))
    )
  }

  lista(): Observable<Item[]> {
    return this.http.get<Item[]>(this.baseUrl).pipe(
      map((obj) => obj), catchError(e => this.handleError(e))
    )
  }

  procuraItemPorId(id: string): Observable<Item> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Item>(url).pipe(
      map((obj) => obj), catchError(e => this.handleError(e))
    );
  }

  atualizar(item: Item): Observable<Item> {
    const url = `${this.baseUrl}/${item.id}`
    return this.http.put<Item>(url, item).pipe(
      map((obj) => obj), catchError(e => this.handleError(e))
    )
  }

  excluir(id: string): Observable<Item> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Item>(url).pipe(
      map((obj) => obj), catchError(e => this.handleError(e))
    )
  }

  handleError(e: any): Observable<any> {
    console.log(e)
    this.mostrarMensagem('Ocorreu um erro', true)
    return EMPTY
  }
}
