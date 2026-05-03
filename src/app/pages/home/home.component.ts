import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  DestroyRef,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import dayjs from 'dayjs';
import { gsap } from 'gsap';
import { HoverScaleDirective } from '../../shared/hover-scale.directive';
import { revealOnEnter } from '../../shared/reveal';

interface AgeSlot {
  kind: 'digit' | 'literal';
  value: string;
  reelIndex?: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, HoverScaleDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, AfterViewInit {
  private readonly destroyRef = inject(DestroyRef);

  protected readonly beforeAgeChars = 'Hi, my name is Matt Goodwin and I am currently '.split('');
  protected readonly afterAgeChars = ' years old.'.split('');
  protected readonly digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  // Layout: 2 integer digits, '.', 9 decimal digits = 12 chars, 11 reels.
  protected readonly ageSlots: AgeSlot[] = (() => {
    const slots: AgeSlot[] = [];
    let reelIdx = 0;
    for (let i = 0; i < 12; i++) {
      if (i === 2) {
        slots.push({ kind: 'literal', value: '.' });
      } else {
        slots.push({ kind: 'digit', value: '0', reelIndex: reelIdx++ });
      }
    }
    return slots;
  })();

  @ViewChild('aboutTile') aboutTile!: ElementRef<HTMLElement>;
  @ViewChild('galleryTile') galleryTile!: ElementRef<HTMLElement>;
  @ViewChild('projectsTile') projectsTile!: ElementRef<HTMLElement>;
  @ViewChild('ageLine') ageLine!: ElementRef<HTMLElement>;
  @ViewChildren('reelStrip') reelStrips!: QueryList<ElementRef<HTMLElement>>;

  private currentAge = '00.000000000';
  private dropComplete = false;

  ngOnInit(): void {
    const update = () => {
      const years = dayjs().diff(dayjs('2000-01-01'), 'second') / (60 * 60 * 24 * 365.25);
      this.currentAge = years.toFixed(9);
      if (this.dropComplete && this.reelStrips) {
        this.spinToCurrent(0.25);
      }
    };
    update();
    const id = setInterval(update, 500);
    this.destroyRef.onDestroy(() => clearInterval(id));
  }

  ngAfterViewInit(): void {
    // Snap reels to the current age before the drop runs, so the line falls in already showing the value.
    this.reelStrips.forEach((strip, i) => {
      const strPos = i < 2 ? i : i + 1;
      const digit = parseInt(this.currentAge[strPos], 10);
      if (Number.isNaN(digit)) return;
      gsap.set(strip.nativeElement, { yPercent: -digit * 10 });
    });

    revealOnEnter(
      [this.aboutTile.nativeElement, this.galleryTile.nativeElement, this.projectsTile.nativeElement],
      { y: 40, stagger: 0.1, duration: 0.6 },
    );

    const chars = this.ageLine.nativeElement.querySelectorAll<HTMLElement>('.char');
    gsap.fromTo(
      chars,
      { opacity: 0, y: -40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.35,
        stagger: 0.012,
        ease: 'back.out(1.6)',
        delay: 0.5,
        clearProps: 'transform',
        onComplete: () => {
          this.dropComplete = true;
          this.spinToCurrent(0.25);
        },
      },
    );
  }

  private spinToCurrent(duration: number): void {
    this.reelStrips.forEach((strip, i) => {
      const strPos = i < 2 ? i : i + 1;
      const digit = parseInt(this.currentAge[strPos], 10);
      if (Number.isNaN(digit)) return;
      gsap.to(strip.nativeElement, {
        yPercent: -digit * 10,
        duration,
        ease: 'back.out(1.4)',
        overwrite: 'auto',
      });
    });
  }
}
