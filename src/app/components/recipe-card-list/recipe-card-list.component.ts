import { Component, Input, OnInit } from '@angular/core';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { RecipeModel } from 'src/app/models/recipe.model';
import { StorageService } from 'src/app/services/storage-service';
import { FAVORITE_STORAGE_KEY } from 'src/app/common/constants/constants';

@Component({
  selector: 'recipe-card-list',
  templateUrl: './recipe-card-list.component.html',
  styleUrls: ['./recipe-card-list.component.scss'],
  imports: [RecipeCardComponent],
})
export class RecipeCardListComponent implements OnInit {
  favoriteRecipes: RecipeModel[] = [];

  @Input()
  recipeList!: RecipeModel[];

  constructor(private storageService: StorageService) {}
  ngOnInit() {
    const storageData =
      this.storageService.getItem(FAVORITE_STORAGE_KEY) ?? '[]';
    const parsedData = JSON.parse(storageData);
    this.favoriteRecipes = Array.isArray(parsedData) ? parsedData : [];
  }
}
