import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { faBrandGithub, faBrandGithubAlt } from '@ng-icons/font-awesome/brands';
import { faSolidHouse } from '@ng-icons/font-awesome/solid';
import { HoverScaleDirective } from '../../shared/hover-scale.directive';
import { revealOnEnter } from '../../shared/reveal';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, NgIcon, HoverScaleDirective],
  viewProviders: [
    provideIcons({ faSolidHouse, faBrandGithub, faBrandGithubAlt }),
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements AfterViewInit {
  private readonly router = inject(Router);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  goHome(): void {
    this.router.navigate(['/']);
  }

  openUrl(url: string): void {
    window.open(url, '_blank', 'noopener');
  }

  ngAfterViewInit(): void {
    const root = this.host.nativeElement;
    const title = root.querySelector<HTMLElement>('.git-title');
    const cards = root.querySelectorAll<HTMLElement>('.git-page');

    if (title) revealOnEnter(title, { y: -20, duration: 0.7 });
    revealOnEnter(Array.from(cards), { y: 40, stagger: 0.15, duration: 0.6, delay: 0.3 });
  }
}
