import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { RecipeModel } from 'src/app/models/recipe.model';
import { FavoriteService } from 'src/app/services/favorite-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'recipe-card-list',
  templateUrl: './recipe-card-list.component.html',
  styleUrls: ['./recipe-card-list.component.scss'],
  imports: [RecipeCardComponent, CommonModule],
})
export class RecipeCardListComponent implements OnInit {
  @Input()
  recipeList!: RecipeModel[];

  favoriteRecipes$!: Observable<RecipeModel[]>;

  constructor(private favoriteService: FavoriteService) {
    this.favoriteRecipes$ = this.favoriteService.favorites$;
  }

  ngOnInit() {}
}
