import { ICategory, IDefault } from '@pineorg/shared';

export interface ISprint extends IDefault {
  description: string;
  startDate: Date;
  endDate: Date;
  categories: ICategory[];
}
