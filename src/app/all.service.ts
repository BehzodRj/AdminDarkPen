import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor() { }


  reventCales() {
    return [
      {date: new Date().toISOString(), invoice: 'INV-0123', customer: 'Behzod Rajabaliev', amount: Math.round(Math.random() * 150), status: 'Paid'},
      {date: new Date().toISOString(), invoice: 'INV-0124', customer: 'Vafo Boqiev', amount: Math.round(Math.random() * 150), status: 'Paid'},
      {date: new Date().toISOString(), invoice: 'INV-0125', customer: 'Hasanzoda Muhammad', amount: Math.round(Math.random() * 150), status: 'Paid'},
      {date: new Date().toISOString(), invoice: 'INV-0126', customer: 'Jake Pratt', amount: Math.round(Math.random() * 150), status: 'Paid'},
      {date: new Date().toISOString(), invoice: 'INV-0127', customer: 'Manuchehr Shamolov', amount: Math.round(Math.random() * 150), status: 'Paid'},
      {date: new Date().toISOString(), invoice: 'INV-0128', customer: 'Nekruz Sattorov', amount: Math.round(Math.random() * 150), status: 'Paid'},
      {date: new Date().toISOString(), invoice: 'INV-0129', customer: 'Munis Umedzoda', amount: Math.round(Math.random() * 150), status: 'Paid'},
      {date: new Date().toISOString(), invoice: 'INV-0130', customer: 'Samar Salimov', amount: Math.round(Math.random() * 150), status: 'Paid'},
      {date: new Date().toISOString(), invoice: 'INV-0131', customer: 'Jahongir Davlatov', amount: Math.round(Math.random() * 150), status: 'Paid'},
      {date: new Date().toISOString(), invoice: 'INV-0132', customer: 'Rustam Boboev', amount: Math.round(Math.random() * 150), status: 'Paid'},
      {date: new Date().toISOString(), invoice: 'INV-0133', customer: 'Ozod Davronov', amount: Math.round(Math.random() * 150), status: 'Paid'},
      {date: new Date().toISOString(), invoice: 'INV-0134', customer: 'Davron Sultonov', amount: Math.round(Math.random() * 150), status: 'Paid'}
    ]
  }

}
