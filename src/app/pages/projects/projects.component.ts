import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, inject } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { faBrandGithub } from '@ng-icons/font-awesome/brands';
import { faSolidArrowUpRightFromSquare, faSolidLock } from '@ng-icons/font-awesome/solid';
import { HoverScaleDirective } from '../../shared/hover-scale.directive';
import { revealOnEnter } from '../../shared/reveal';
import { RouteShellComponent } from '../../shared/route-shell.component';
import { PROJECTS, Project } from './projects.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, NgIcon, HoverScaleDirective, RouteShellComponent],
  viewProviders: [
    provideIcons({ faBrandGithub, faSolidArrowUpRightFromSquare, faSolidLock }),
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements AfterViewInit {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  protected readonly current: Project[] = PROJECTS.filter((p) => p.era === 'current');
  protected readonly older: Project[] = PROJECTS.filter((p) => p.era === 'older');

  openUrl(url: string | undefined): void {
    if (!url) return;
    window.open(url, '_blank', 'noopener');
  }

  ngAfterViewInit(): void {
    const root = this.host.nativeElement;
    const sectionLabels = root.querySelectorAll<HTMLElement>('.section-label');
    const cards = root.querySelectorAll<HTMLElement>('.project-card');
    revealOnEnter(Array.from(sectionLabels), { y: 10, stagger: 0.05, duration: 0.4, delay: 0.05 });
    revealOnEnter(Array.from(cards), { y: 30, stagger: 0.08, duration: 0.5, delay: 0.2 });
  }
}
