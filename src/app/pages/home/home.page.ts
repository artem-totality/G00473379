import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';
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
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    RecipeCardListComponent,
    SearchComponent,
  ],
})
export class HomePage {
  recipeList = recipeListData as RecipeModel[];
  data: any[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getRecipeDetails(34).subscribe({
      next: (response) => {
        this.data = response;
        console.log(this.data[0]);
      },
      error: (error) => {
        console.error('Error: ', error);
      },
    });
  }
}
