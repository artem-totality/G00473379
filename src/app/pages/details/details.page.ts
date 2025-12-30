import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http-service';

@Component({
  selector: 'app-favorite',
  templateUrl: 'details.page.html',
  styleUrls: ['details.page.scss'],
  imports: [IonContent, HeaderComponent],
})
export class DetailsPage {
  recipeId: string | null = null;

  constructor(private route: ActivatedRoute, private httpService: HttpService) {
    this.recipeId = this.route.snapshot.paramMap.get('id');
    this.httpService.getRecipeDetails(Number(this.recipeId)).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  ngOnInit() {}
}
