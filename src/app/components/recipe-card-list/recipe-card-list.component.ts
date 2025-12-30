import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { RecipeModel } from 'src/app/models/recipe.model';
import { FavoriteService } from 'src/app/services/favorite-service';
import { SearchRecipesService } from 'src/app/services/search-recipes-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'recipe-card-list',
  templateUrl: './recipe-card-list.component.html',
  styleUrls: ['./recipe-card-list.component.scss'],
  imports: [RecipeCardComponent, CommonModule],
})
export class RecipeCardListComponent implements OnInit {
  favoriteRecipes$!: Observable<RecipeModel[]>;
  recipeList$!: Observable<RecipeModel[]>;

  constructor(
    private favoriteService: FavoriteService,
    private searchRecipesService: SearchRecipesService
  ) {
    this.favoriteRecipes$ = this.favoriteService.favorites$;
    this.recipeList$ = this.searchRecipesService.reciepes$;
  }

  ngOnInit() {}
}
