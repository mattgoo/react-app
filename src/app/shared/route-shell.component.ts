import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { faSolidHouse } from '@ng-icons/font-awesome/solid';
import { HoverScaleDirective } from './hover-scale.directive';
import { revealOnEnter } from './reveal';

@Component({
  selector: 'app-route-shell',
  standalone: true,
  imports: [CommonModule, NgIcon, HoverScaleDirective],
  viewProviders: [provideIcons({ faSolidHouse })],
  templateUrl: './route-shell.component.html',
  styleUrl: './route-shell.component.css',
})
export class RouteShellComponent implements AfterViewInit {
  @Input({ required: true }) title!: string;
  @Input() subtitle?: string;

  private readonly router = inject(Router);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  goHome(): void {
    this.router.navigate(['/']);
  }

  ngAfterViewInit(): void {
    const root = this.host.nativeElement;
    const titleEl = root.querySelector<HTMLElement>('.route-title');
    const subtitleEl = root.querySelector<HTMLElement>('.route-subtitle');
    if (titleEl) revealOnEnter(titleEl, { y: -16, duration: 0.55 });
    if (subtitleEl) revealOnEnter(subtitleEl, { y: -8, duration: 0.45, delay: 0.15 });
  }
}
