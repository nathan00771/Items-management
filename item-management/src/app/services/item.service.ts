import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';
import { BaseService } from './base.service';

@Injectable({ providedIn: 'root' })
export class ItemService extends BaseService {
  private endpoint = 'items';

  getItems(): Observable<Item[]> {
    return this.get<Item[]>(this.endpoint);
  }

  addItem(item: Item): Observable<Item> {
    return this.post<Item>(this.endpoint, item);
  }

  updateItem(item: Item): Observable<Item> {
    return this.put<Item>(`${this.endpoint}/${item.id}`, item);
  }

  softDelete(id: number): Observable<void> {
    return this.patch<void>(`${this.endpoint}/${id}`, { isDeleted: true });
  }
}