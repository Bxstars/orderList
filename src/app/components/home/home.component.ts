import { Component } from '@angular/core';
import { CarouselComponent } from "../../shared/components/carousel/carousel.component";
import { CardsComponent } from '../../shared/components/cards/cards.component';


@Component({
    selector: 'app-home',
    imports: [CarouselComponent, CardsComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {

}
