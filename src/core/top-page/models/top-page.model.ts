import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';
import { prop } from '@typegoose/typegoose';

import { TopLevelCategoryEnum } from '../enums/top-level-category.enum';

export class HhData {
  @prop()
  count: number;

  @prop()
  juniorSalary: number;

  @prop()
  middleSalary: number;

  @prop()
  seniorSalary: number;
}

export class TopPageAdvantage {
  @prop()
  title: string;

  @prop()
  description: string;
}

export interface TopPageModel extends Base {}
export class TopPageModel extends TimeStamps {
  @prop({ enum: TopLevelCategoryEnum })
  firstCategory: TopLevelCategoryEnum;

  @prop()
  secondCategory: string;

  @prop({ unique: true })
  alias: string;

  @prop()
  title: string;

  @prop()
  category: string;

  @prop({ type: () => HhData })
  hh?: HhData;

  @prop({ type: () => [TopPageAdvantage] })
  advantages: TopPageAdvantage[];

  @prop()
  seoText: string;

  @prop()
  tagsTitle: string;

  @prop({ type: () => [String] })
  tags: string[];
}
