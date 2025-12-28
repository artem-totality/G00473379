import { Component, Input, OnInit } from '@angular/core';
import { IonButton, IonIcon } from '@ionic/angular/standalone';
import { RecipeModel } from 'src/app/models/recipe.model';
import { addIcons } from 'ionicons';
import { heart } from 'ionicons/icons';

@Component({
  selector: 'recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
  imports: [IonButton, IonIcon],
})
export class RecipeCardComponent implements OnInit {
  @Input()
  recipe!: RecipeModel;
  constructor() {
    addIcons({ heart });
  }

  ngOnInit() {}
}
