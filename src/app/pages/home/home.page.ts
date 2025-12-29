import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { RecipeCardListComponent } from 'src/app/components/recipe-card-list/recipe-card-list.component';
import recipeListData from 'src/app/mocked-data/recipe-list.json';
import { RecipeModel } from 'src/app/models/recipe.model';
import { SearchComponent } from 'src/app/components/search/search.component';
import { HttpService } from 'src/app/services/http-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonContent,
    RecipeCardListComponent,
    SearchComponent,
    HeaderComponent,
  ],
})
export class HomePage {
  recipeList = recipeListData as RecipeModel[];
  data: any[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit() {}
}
