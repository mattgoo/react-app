import { Directive, ElementRef, HostListener, Input, OnDestroy, inject } from '@angular/core';
import { gsap } from 'gsap';

@Directive({
  selector: '[appHover]',
  standalone: true,
})
export class HoverScaleDirective implements OnDestroy {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  @Input() scale = 1.1;
  @Input() duration = 0.3;
  @Input() color: string | null = '#61dafb';
  @Input() grayscale = false;
  @Input() hoverFilter: string | null = null;
  @Input() liftZ = true;

  private originalColor: string | null = null;
  private originalFilter: string | null = null;

  private readonly hoverCapable =
    typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches;
  private readonly reducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  private static readonly HOVER_PROPS = 'scale,filter,color,zIndex';

  @HostListener('mouseenter')
  onEnter(): void {
    if (!this.hoverCapable) return;
    const el = this.host.nativeElement;
    const cs = getComputedStyle(el);
    if (this.originalColor === null) this.originalColor = cs.color;
    if (this.originalFilter === null) this.originalFilter = cs.filter && cs.filter !== 'none' ? cs.filter : 'none';

    const filter = this.hoverFilter ?? (this.grayscale ? 'grayscale(0%)' : null);

    gsap.killTweensOf(el, HoverScaleDirective.HOVER_PROPS);
    const tween = this.reducedMotion ? gsap.set : gsap.to;
    tween(el, {
      scale: this.scale,
      ...(filter !== null ? { filter } : {}),
      ...(this.color ? { color: this.color } : {}),
      ...(this.liftZ ? { zIndex: 1 } : {}),
      duration: this.duration,
      ease: 'power2.out',
    });
  }

  @HostListener('mouseleave')
  onLeave(): void {
    if (!this.hoverCapable) return;
    const el = this.host.nativeElement;
    const restoreFilter = this.hoverFilter !== null
      ? this.originalFilter ?? 'none'
      : (this.grayscale ? 'grayscale(100%)' : null);

    gsap.killTweensOf(el, HoverScaleDirective.HOVER_PROPS);
    if (this.reducedMotion) {
      gsap.set(el, {
        scale: 1,
        ...(restoreFilter !== null ? { filter: restoreFilter } : {}),
        ...(this.color && this.originalColor ? { color: this.originalColor } : {}),
        ...(this.liftZ ? { zIndex: 0 } : {}),
      });
      return;
    }
    gsap.to(el, {
      scale: 1,
      ...(restoreFilter !== null ? { filter: restoreFilter } : {}),
      ...(this.color && this.originalColor ? { color: this.originalColor } : {}),
      duration: this.duration,
      ease: 'power2.inOut',
      onComplete: () => {
        if (this.liftZ) gsap.set(el, { zIndex: 0 });
      },
    });
  }

  ngOnDestroy(): void {
    gsap.killTweensOf(this.host.nativeElement, HoverScaleDirective.HOVER_PROPS);
  }
}
