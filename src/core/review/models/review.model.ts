import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';
import { mongoose, prop } from '@typegoose/typegoose';
type ObjectId = mongoose.Schema.Types.ObjectId;

export interface ReviewModel extends Base {}
export class ReviewModel extends TimeStamps {
  @prop()
  name: string;

  @prop()
  title: string;

  @prop()
  description: string;

  @prop()
  rating: number;

  @prop()
  productId: ObjectId;
}
