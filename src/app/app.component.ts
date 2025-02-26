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
export class AppComponent {
  title = 'pax-horizon';


 
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
}
