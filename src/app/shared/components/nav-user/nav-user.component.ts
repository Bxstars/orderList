import { Component } from '@angular/core';

@Component({
    selector: 'app-nav-user',
    imports: [],
    templateUrl: './nav-user.component.html',
    styleUrl: './nav-user.component.css'
})
export class NavUserComponent {
  today: any = "";

  ngOnInit(): void {
    let date = new Date();
    this.today = date.toLocaleDateString(
      'en-US',
      {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }
    )
  }


}
