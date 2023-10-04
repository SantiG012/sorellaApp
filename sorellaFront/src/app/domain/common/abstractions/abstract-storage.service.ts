export abstract class AbstractStorageService<T> {
    abstract get(key: string): Promise<T>;
    abstract set(key: string, value:any): Promise<void>;
    abstract remove(key: string):Promise<void>;
}