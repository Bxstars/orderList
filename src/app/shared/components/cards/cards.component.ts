import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CardService } from '../../../core/services/mock/card/card-data.service';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  data: any[] = [];

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cardService.getCardData().subscribe((response) => {
      this.data = response;
    });
  }
}

