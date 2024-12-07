import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private cardData = [
    { value: 134, title: 'Total order', comparison: 'Compare to yesterday', percentage: 14, icon: 'receipt' },
    { value: 21, title: 'Order on process', comparison: 'Compare to yesterday', percentage: -14, icon: 'layers' },
    { value: 113, title: 'Order done', comparison: 'Compare to yesterday', percentage: -14, icon: 'check_circle' },
    { value: 2.096, title: 'Total income', comparison: 'Compare to yesterday', percentage: 14, icon: 'paid' },
  ];

  constructor() { }

  getCardData(): Observable<any[]> {
    return of(this.cardData)
  }
}
