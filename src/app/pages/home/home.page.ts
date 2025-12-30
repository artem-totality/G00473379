import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { RecipeCardListComponent } from 'src/app/components/recipe-card-list/recipe-card-list.component';
import { SearchComponent } from 'src/app/components/search/search.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonContent,
    RecipeCardListComponent,
    SearchComponent,
    HeaderComponent,
    FooterComponent,
  ],
})
export class HomePage {
  constructor() {}

  ngOnInit() {}
}
