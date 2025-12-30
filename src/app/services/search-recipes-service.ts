import { Injectable } from '@angular/core';
import { HttpService } from './http-service';
import { BehaviorSubject } from 'rxjs';
import { RecipeModel } from '../models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class SearchRecipesService {
  private reciepts = new BehaviorSubject<RecipeModel[]>([]);

  recieptes$ = this.reciepts.asObservable();

  constructor(private httpService: HttpService) {}

  loadRecieptsByIngredients(ingredients: string[]) {
    this.httpService.getRecipesByIngredients(ingredients).subscribe({
      next: (data) => {
        this.reciepts.next(data as RecipeModel[]);
        console.log(data);
      },
      error: (err) => {
        this.reciepts.next([]);
        console.error(err);
      },
    });
  }
}
