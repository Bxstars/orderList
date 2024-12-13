import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { CardsComponent } from "../../shared/components/cards/cards.component";
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { CarouselComponent } from "../../shared/components/carousel/carousel.component";
import { NavUserComponent } from "../../shared/components/nav-user/nav-user.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CardsComponent, FooterComponent, CarouselComponent, NavUserComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
