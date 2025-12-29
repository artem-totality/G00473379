import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FavoriteCardListComponent } from 'src/app/components/favorite-card-list copy/favorite-card-list.component';
import { RecipeModel } from 'src/app/models/recipe.model';
import { StorageService } from 'src/app/services/storage-service';
import { FAVORITE_STORAGE_KEY } from 'src/app/common/constants/constants';

@Component({
  selector: 'app-favorite',
  templateUrl: 'favorite.page.html',
  styleUrls: ['favorite.page.scss'],
  imports: [IonContent, FavoriteCardListComponent, HeaderComponent],
})
export class HomePage {
  recipeList: RecipeModel[] = [];

  constructor(private storageService: StorageService) {}

  ngOnInit() {
    const storageData =
      this.storageService.getItem(FAVORITE_STORAGE_KEY) ?? '[]';
    const parsedData = JSON.parse(storageData);
    this.recipeList = Array.isArray(parsedData) ? parsedData : [];
  }
}
