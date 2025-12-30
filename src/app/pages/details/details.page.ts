import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-favorite',
  templateUrl: 'details.page.html',
  styleUrls: ['details.page.scss'],
  imports: [IonContent, HeaderComponent],
})
export class DetailsPage {
  recipeId: string | null = null;

  constructor(private route: ActivatedRoute) {
    this.recipeId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {}
}
