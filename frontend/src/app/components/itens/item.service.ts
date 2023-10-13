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

  mostrarMensagem(msg: string): void {
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  criar(item: Item): Observable<Item> {
    return this.http.post<Item>(this.baseUrl, item)
  }

  lista(): Observable<Item[]> {
    return this.http.get<Item[]>(this.baseUrl)
  }
}
