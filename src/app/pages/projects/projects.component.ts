import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { faBrandGithub, faBrandGithubAlt } from '@ng-icons/font-awesome/brands';
import { faSolidHouse } from '@ng-icons/font-awesome/solid';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, NgIcon],
  viewProviders: [
    provideIcons({ faSolidHouse, faBrandGithub, faBrandGithubAlt }),
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  constructor(private readonly router: Router) {}

  goHome(): void {
    this.router.navigate(['/']);
  }

  openUrl(url: string): void {
    window.open(url, '_blank', 'noopener');
  }
}
