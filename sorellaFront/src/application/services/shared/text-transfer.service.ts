import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AbstractTextTransfer } from 'src/domain/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TextTransferService<T> implements AbstractTextTransfer<T>{

  private text: Subject<T> = new Subject<T>();

  constructor() { }

  getText(): Observable<T> {
    return this.text.asObservable();
  }
  setText(text: T): void {
    this.text.next(text);
  }
}
