import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { Styles } from '../../interfaces';
import chroma from 'chroma-js';
import { getContrastingTextColor } from '@pineorg/shared';

const ColorSchema: Record<Styles, string> = {
  base: 'bg-base-300',
  contrast: 'bg-contrast-300 ',
  highlight: 'bg-highlight-300 ',
  success: 'bg-success-300 ',
  danger: 'bg-danger-300',
  warning: 'bg-warning-300 ',
  info: 'bg-info-300',
  dark: 'bg-dark',
  light: 'bg-light',
  transparent: 'bg-transparent',
};

const TextColorSchema: Record<'dark' | 'light', string> = {
  dark: 'text-dark',
  light: 'text-light',
};

@Component({
  selector: 'trilha-icon-badge',
  templateUrl: './icon-badge.component.html',
  styleUrls: ['./icon-badge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconBadgeComponent implements AfterViewInit {
  @Input({ required: true }) icon: string;

  @Input()
  public set colorSchema(value: Styles) {
    if (value) {
      this.color = ColorSchema[value];
    }
  }

  @ViewChild('badge', { static: true })
  public badge: ElementRef<HTMLSpanElement>;

  color: string;

  ngAfterViewInit() {
    const computedStyle = getComputedStyle(this.badge.nativeElement);
    const backgroundColor = computedStyle.backgroundColor;
    const hexadecimalColor = chroma(backgroundColor).hex();
    this.badge.nativeElement.classList.add(
      TextColorSchema[getContrastingTextColor(hexadecimalColor)]
    );
  }
}
