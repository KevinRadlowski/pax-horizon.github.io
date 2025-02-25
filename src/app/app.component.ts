import { AfterViewInit, Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { GamesComponent } from './components/games/games.component';
import { EventsComponent } from './components/events/events.component';
import { TeamComponent } from './components/team/team.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './components/contact/contact.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    NavbarComponent,
    PresentationComponent,
    GamesComponent,
    EventsComponent,
    TeamComponent,
    TestimonialsComponent,
    ContactComponent,
    RouterModule
  ],styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'pax-horizon';

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.revealElements();
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Exécuter après un court délai pour éviter un problème de timing
      setTimeout(() => {
        this.revealElements();
      }, 100);
    }
  }

  private revealElements() {
    if (isPlatformBrowser(this.platformId)) {
      const elements = document.querySelectorAll('.hidden');
      elements.forEach((el: Element) => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
          el.classList.add('visible');
        }
      });
    }
  }
  
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
}
