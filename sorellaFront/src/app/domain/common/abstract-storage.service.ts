export abstract class AbstractStorageService<T> {
    abstract get(key: string): Promise<T | null>;
    abstract set(key: string, value:T): Promise<void>;
    abstract remove(key: string):Promise<void>;
}