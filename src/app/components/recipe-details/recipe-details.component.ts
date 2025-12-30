import { Component, OnInit, Input } from '@angular/core';
import { IonText } from '@ionic/angular/standalone';
import { RecipeDetailsModel } from 'src/app/models/recipe-details.model';

@Component({
  selector: 'recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
  imports: [IonText],
})
export class RecipeDetailsComponent implements OnInit {
  @Input()
  recipeDetails!: RecipeDetailsModel;

  constructor() {}

  ngOnInit() {}
}
