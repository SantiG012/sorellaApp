import { Injectable } from '@angular/core';
import { CarProductDto } from "src/app/domain/DTO/product";
import { AbstractStorageService } from "src/app/domain/common/abstractions";
import { Storage } from "@ionic/storage-angular";
import { AbstractProductStorageService } from 'src/app/domain/services/storage/abstract-product-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProductStorageService implements AbstractProductStorageService  {
    private _storage!: Storage;

    constructor(private storage: Storage) {
        this.init();
    }

    private async init() {
        const storage = await this.storage.create();
        this._storage = storage;
    }
    


    public async get(key: string): Promise<CarProductDto[] | null> {
        if (!await this.keyExists(key)) {return null;}

        return await this._storage.get(key);
    }

    public async set(key: string, value: CarProductDto[]): Promise<void> {
        const jsonData = this.convertToJSON(value);

        return await this._storage.set(key, jsonData);
    }

    public async remove(key: string): Promise<void> {
        if (!await this.keyExists(key)) {return;}

        return await this._storage.remove(key);
    }

    private async keyExists(key: string): Promise<boolean> {
        const keys = await this._storage.keys();
        return keys.includes(key);
    }

    private convertToJSON(products: CarProductDto[]): string {
        return JSON.stringify(products);
    }

}