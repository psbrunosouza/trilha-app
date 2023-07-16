import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RoundedStyles, Styles } from '../../interfaces';

const ColorSchema: Record<Styles, string> = {
  base: 'bg-base-300 ',
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

@Component({
  selector: 'trilha-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() color: Styles = 'contrast';

  @Input() rounded: RoundedStyles = 'md';

  colorSchema = ColorSchema;

  get roundedStyle(): string {
    const roundedStyle: Record<RoundedStyles, string> = {
      full: 'rounded-full min-w-[42px]',
      sm: 'rounded-sm px-4',
      md: 'rounded-md px-4',
      lg: 'rounded-lg px-4',
      none: 'rounded-none px-4',
    };

    return `${roundedStyle[this.rounded]}`;
  }
}
