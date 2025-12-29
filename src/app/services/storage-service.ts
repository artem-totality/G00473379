import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private storage: globalThis.Storage;

  constructor() {
    this.storage = localStorage;
  }

  public getItem(key: string): string | null {
    return this.storage.getItem(key);
  }

  public setItem(key: string, value: string): void {
    return this.storage.setItem(key, value);
  }

  public removeItem(key: string): void {
    return this.storage.removeItem(key);
  }

  public clear(): void {
    return this.storage.clear();
  }
}
