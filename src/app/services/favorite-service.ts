import { Injectable } from '@angular/core';
import { StorageService } from './storage-service';
import { BehaviorSubject } from 'rxjs';
import { RecipeModel } from '../models/recipe.model';
import { FAVORITE_STORAGE_KEY } from '../common/constants/constants';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  private favoritesSubject = new BehaviorSubject<RecipeModel[]>([]);

  constructor(private storage: StorageService) {
    this.loadFromStorage();
  }

  favorites$ = this.favoritesSubject.asObservable();

  private loadFromStorage() {
    const raw = this.storage.getItem(FAVORITE_STORAGE_KEY);
    const data = raw ? JSON.parse(raw) : [];
    this.favoritesSubject.next(data);
  }

  setFavorites(favorites: RecipeModel[]) {
    this.storage.setItem(FAVORITE_STORAGE_KEY, JSON.stringify(favorites));
    this.favoritesSubject.next(favorites);
  }

  getFavoritesSnapshot(): RecipeModel[] {
    return this.favoritesSubject.value;
  }
}
