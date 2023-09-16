import { Observable } from 'rxjs';

export abstract class AbstractTextTransfer<T> {
  abstract getText(): Observable<T>;
  abstract setText(text: T): void;
}