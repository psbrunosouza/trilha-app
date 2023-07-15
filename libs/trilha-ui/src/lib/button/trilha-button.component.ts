import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ElementRef,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import chroma from 'chroma-js';
import { getContrastingTextColor } from '@pineorg/shared';

type ColorStyles =
  | 'base'
  | 'contrast'
  | 'highlight'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'transparent';

type RoundedStyles = 'full' | 'sm' | 'none';

const ColorSchema: Record<ColorStyles, string> = {
  base: 'bg-base-300 hover:bg-base-400 transition duration-200 ease-in',
  contrast:
    'bg-contrast-300 hover:bg-contrast-400 transition duration-200 ease-in',
  highlight:
    'bg-highlight-300 hover:bg-highlight-400 transition duration-200 ease-in',
  success:
    'bg-success-300 hover:bg-success-400 transition duration-200 ease-in',
  danger: 'bg-danger-300 hover:bg-danger-400 transition duration-200 ease-in',
  warning:
    'bg-warning-300 hover:bg-warning-400 transition duration-200 ease-in',
  info: 'bg-info-300 hover:bg-info-400 transition duration-200 ease-in',
  dark: 'bg-dark',
  light: 'bg-light',
  transparent: 'bg-transparent',
};

const TextColorSchema: Record<'dark' | 'light', string> = {
  dark: 'text-dark',
  light: 'text-light',
};

@Component({
  selector: 'trilha-button',
  templateUrl: './trilha-button.component.html',
  styleUrls: ['./trilha-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrilhaButtonComponent implements AfterViewInit {
  @Input()
  public rounded: RoundedStyles = 'sm';

  @Input()
  public set colorSchema(value: ColorStyles) {
    if (value) {
      this.color = ColorSchema[value];
    }
  }

  @Input()
  public disabled = false;

  @ViewChild('button', { static: true })
  public button: ElementRef<HTMLButtonElement>;

  color: string;

  ngAfterViewInit() {
    const computedStyle = getComputedStyle(this.button.nativeElement);
    const backgroundColor = computedStyle.backgroundColor;
    const hexadecimalColor = chroma(backgroundColor).hex();
    this.button.nativeElement.classList.add(
      TextColorSchema[getContrastingTextColor(hexadecimalColor)]
    );
  }

  get roundedStyle(): string {
    const roundedStyle: Record<RoundedStyles, string> = {
      full: 'rounded-full min-w-[42px]',
      sm: 'rounded-md px-4 w-full',
      none: 'rounded-none px-4',
    };

    return `${roundedStyle[this.rounded]}`;
  }

  get styles(): string {
    return `${this.roundedStyle}`;
  }
}
