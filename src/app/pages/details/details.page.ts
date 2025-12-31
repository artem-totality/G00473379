import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonText } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http-service';
import { FavoriteService } from 'src/app/services/favorite-service';
import { RecipeDetailsModel } from 'src/app/models/recipe-details.model';
import { RecipeDetailsComponent } from 'src/app/components/recipe-details/recipe-details.component';
import { RecipeModel } from 'src/app/models/recipe.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favorite',
  templateUrl: 'details.page.html',
  styleUrls: ['details.page.scss'],
  imports: [
    IonContent,
    IonText,
    HeaderComponent,
    RecipeDetailsComponent,
    CommonModule,
  ],
})
export class DetailsPage {
  recipeId: string | null = null;
  recipeDetails!: RecipeDetailsModel;
  favoriteRecipes$!: Observable<RecipeModel[]>;

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
    private favoriteService: FavoriteService
  ) {
    this.favoriteRecipes$ = this.favoriteService.favorites$;
    this.recipeId = this.route.snapshot.paramMap.get('id');
    this.httpService.getRecipeDetails(Number(this.recipeId)).subscribe({
      next: (data) => {
        this.recipeDetails = data as RecipeDetailsModel;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  ngOnInit() {}
}
