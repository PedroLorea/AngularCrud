import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Item } from './item.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  baseUrl = 'http://localhost:3001/itens'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  
  mostrarMensagem(msg: string, temErro: boolean = false): void {
    const style = temErro ? 'background-color:red;' : 'background-color:green;'

    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: [style]
    })
  }

  criar(item: Item): Observable<Item> {
    return this.http.post<Item>(this.baseUrl, item)
  }

  lista(): Observable<Item[]> {
    return this.http.get<Item[]>(this.baseUrl)
  }

  procuraItemPorId(id: string): Observable<Item> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Item>(url);
  }

  atualizar(item: Item): Observable<Item> {
    const url = `${this.baseUrl}/${item.id}`
    return this.http.put<Item>(url, item)
  }

  excluir(id: string): Observable<Item> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Item>(url)
  }
}
