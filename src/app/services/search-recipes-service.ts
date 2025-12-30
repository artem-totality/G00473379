import { Injectable } from '@angular/core';
import { HttpService } from './http-service';
import { BehaviorSubject } from 'rxjs';
import { RecipeModel } from '../models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class SearchRecipesService {
  private reciepes = new BehaviorSubject<RecipeModel[]>([]);

  reciepes$ = this.reciepes.asObservable();

  constructor(private httpService: HttpService) {}

  loadRecieptsByIngredients(ingredients: string[]) {
    this.httpService.getRecipesByIngredients(ingredients).subscribe({
      next: (data) => {
        this.reciepes.next(data as RecipeModel[]);
      },
      error: (err) => {
        this.reciepes.next([]);
        console.error(err);
      },
    });
  }
}
