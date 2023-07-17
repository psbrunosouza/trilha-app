import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Styles } from '../../interfaces';

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

type CardRoundedStyle = 'sm' | 'md' | 'lg' | 'none';

@Component({
  selector: 'trilha-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() color: Styles = 'contrast';

  @Input() rounded: CardRoundedStyle = 'md';

  colorSchema = ColorSchema;

  get roundedStyle(): string {
    const roundedStyle: Record<CardRoundedStyle, string> = {
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      none: 'rounded-none',
    };

    return `${roundedStyle[this.rounded]}`;
  }
}
