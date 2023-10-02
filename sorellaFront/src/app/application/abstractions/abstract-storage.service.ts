export abstract class AbstractStorageService {
    abstract get(key: string): any;
    abstract set(key: string, value:any): Promise<any>;
    abstract remove(key: string):Promise<void>;
}