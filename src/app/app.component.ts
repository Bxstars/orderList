import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavUserComponent } from './shared/components/nav-user/nav-user.component';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, NavUserComponent, CommonModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  showHeader = true;
  hiddenRoutes = ['/customers', '/setting']

  constructor(
    private router: Router,
    private titleService: Title,
  ) {}

  ngOnInit() {
    const titlePage = 'Tokyo King';

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const route = this.router.routerState.root;
        let routeTitle = this.getTitle(route);
        if (routeTitle) {
          this.titleService.setTitle(routeTitle + ' | ' + titlePage);
        }
        this.showHeader = !this.hiddenRoutes.includes(this.router.url);
      });



  }

  getTitle(route: any): string {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route.snapshot.data['title'];
  }
}
