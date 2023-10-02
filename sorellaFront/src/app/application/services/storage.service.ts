import { Injectable } from '@angular/core';
import { AbstractStorageService } from '../abstractions';
import { Observable } from 'rxjs';
import { Product } from 'src/app/domain/models';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService implements AbstractStorageService {
  private _storage!:Storage;

  constructor(
    private readonly storage: Storage
  ) { 
    this.init();
  }

  async init(): Promise<void> {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public async get(key: string) {
    if(!await this.keyExists(key)) {return null;}

    const jsonData = await this._storage.get(key);
    const products:Product[] = JSON.parse(jsonData);

    return products;
  }

  public async set(key: string, value: any) {
    const jsonData = JSON.stringify(value);
    return await this._storage.set(key, jsonData);
  }

  public async remove(key: string){
    if(!await this.keyExists(key)) {return;}

    return await this._storage.remove(key);
  }

  private async keyExists(key: string): Promise<boolean> {
    const keys = await this._storage.keys();
    return keys.includes(key);
  }
}
