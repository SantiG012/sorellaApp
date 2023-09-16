import { Observable } from 'rxjs';

export abstract class AbstractTextTransferService<T> {
  abstract getText(): Observable<T>;
  abstract setText(text: T): void;
}