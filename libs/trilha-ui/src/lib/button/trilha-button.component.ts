import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  Signal,
  signal,
  ViewChild,
} from '@angular/core';
import { textColorByBackground } from '@pineorg/shared';

type ColorStyles =
  | 'base'
  | 'contrast'
  | 'highlight'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark';

type RoundedStyles = 'full' | 'sm' | 'none';

const Colors: Record<ColorStyles, { bg: string; text: string }> = {
  base: {
    bg: 'bg-base-300',
    text: 'text-base-300',
  },
  contrast: {
    bg: 'bg-contrast-300',
    text: 'text-contrast-300',
  },
  highlight: {
    bg: 'bg-highlight-300',
    text: 'text-highlight-300',
  },
  success: {
    bg: 'bg-success-300',
    text: 'text-success-300',
  },
  danger: {
    bg: 'bg-danger-300',
    text: 'text-danger-300',
  },
  warning: {
    bg: 'bg-warning-300',
    text: 'text-warning-300',
  },
  dark: {
    bg: 'bg-dark',
    text: 'text-dark',
  },
  light: {
    bg: 'bg-light',
    text: 'text-light',
  },
  info: {
    bg: 'bg-info-300',
    text: 'text-info-300',
  },
};

@Component({
  selector: 'trilha-button',
  templateUrl: './trilha-button.component.html',
  styleUrls: ['./trilha-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrilhaButtonComponent {
  @Input()
  public rounded: RoundedStyles = 'sm';

  @Input()
  public color: ColorStyles = 'dark';

  @Input()
  public backgroundColor: ColorStyles = 'base';

  @ViewChild('button')
  public button: ElementRef<HTMLButtonElement>;

  get backgroundColorStyle(): string {
    return `${
      Colors[this.backgroundColor].bg
    } hover:brightness-[1.15] transition ease-in delay-150`;
  }

  get colorStyle(): string {
    return `${
      Colors[this.color].text
    } hover:brightness-[1.15] transition ease-in delay-150`;
  }

  get roundedStyle(): string {
    const roundedStyle: Record<RoundedStyles, string> = {
      full: 'rounded-full min-w-[42px]',
      sm: 'rounded-md px-4 w-full',
      none: 'rounded-none px-4',
    };

    return `${roundedStyle[this.rounded]}`;
  }

  get buttonStyle(): string {
    return `${this.roundedStyle} ${this.backgroundColorStyle} ${this.colorStyle}`;
  }
}
