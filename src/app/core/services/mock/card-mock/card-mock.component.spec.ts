import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMockComponent } from './card-mock.component';

describe('CardMockComponent', () => {
  let component: CardMockComponent;
  let fixture: ComponentFixture<CardMockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
