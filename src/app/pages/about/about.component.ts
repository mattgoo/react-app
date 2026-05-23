import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, inject } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  faBrandGithub,
  faBrandHtml5,
  faBrandJava,
  faBrandJs,
  faBrandNodeJs,
  faBrandPython,
  faBrandReact,
  faBrandSwift,
} from '@ng-icons/font-awesome/brands';
import {
  simpleAngular,
  simpleDjango,
  simpleGreensock,
  simpleMysql,
  simpleTypescript,
  simpleVercel,
} from '@ng-icons/simple-icons';
import { HoverScaleDirective } from '../../shared/hover-scale.directive';
import { revealOnEnter } from '../../shared/reveal';
import { RouteShellComponent } from '../../shared/route-shell.component';

interface Skill {
  name: string;
  icon: string;
  url: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, NgIcon, HoverScaleDirective, RouteShellComponent],
  viewProviders: [
    provideIcons({
      simpleAngular,
      simpleTypescript,
      simpleVercel,
      simpleGreensock,
      simpleDjango,
      simpleMysql,
      faBrandNodeJs,
      faBrandPython,
      faBrandSwift,
      faBrandReact,
      faBrandJs,
      faBrandHtml5,
      faBrandGithub,
      faBrandJava,
    }),
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements AfterViewInit {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  protected readonly daily: Skill[] = [
    { name: 'Angular', icon: 'simpleAngular', url: 'https://angular.io/' },
    { name: 'TypeScript', icon: 'simpleTypescript', url: 'https://www.typescriptlang.org/' },
    { name: 'Node', icon: 'faBrandNodeJs', url: 'https://nodejs.org/' },
    { name: 'Vercel', icon: 'simpleVercel', url: 'https://vercel.com/' },
    { name: 'GSAP', icon: 'simpleGreensock', url: 'https://gsap.com/' },
    { name: 'Python', icon: 'faBrandPython', url: 'https://www.python.org/' },
    { name: 'Swift', icon: 'faBrandSwift', url: 'https://www.swift.org/' },
    { name: 'HTML/CSS', icon: 'faBrandHtml5', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'Git', icon: 'faBrandGithub', url: 'https://github.com/mattgoo' },
  ];

  protected readonly also: Skill[] = [
    { name: 'React', icon: 'faBrandReact', url: 'https://react.dev/' },
    { name: 'JavaScript', icon: 'faBrandJs', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'Java', icon: 'faBrandJava', url: 'https://www.java.com/' },
    { name: 'SQL', icon: 'simpleMysql', url: 'https://www.mysql.com/' },
    { name: 'Django', icon: 'simpleDjango', url: 'https://www.djangoproject.com/' },
  ];

  openUrl(url: string): void {
    window.open(url, '_blank', 'noopener');
  }

  ngAfterViewInit(): void {
    const root = this.host.nativeElement;
    const hero = root.querySelector<HTMLElement>('.hero-line');
    const bio = root.querySelector<HTMLElement>('.bio');
    const sections = root.querySelectorAll<HTMLElement>('.skills-section');
    const skillCells = root.querySelectorAll<HTMLElement>('.skill-cell');

    if (hero) revealOnEnter(hero, { y: 18, duration: 0.5, delay: 0.1 });
    if (bio) revealOnEnter(bio, { y: 20, duration: 0.55, delay: 0.25 });
    revealOnEnter(Array.from(sections), { y: 12, stagger: 0.1, duration: 0.4, delay: 0.45 });
    revealOnEnter(Array.from(skillCells), { y: 16, stagger: 0.03, duration: 0.4, delay: 0.55 });
  }
}
