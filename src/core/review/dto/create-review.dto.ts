import { IsNotEmpty, IsNumber, IsString, Max, MaxLength, Min, MinLength } from 'class-validator';

export class CreateReviewDto {
  @IsString()
  @MinLength(2)
  name: string;

  @IsString()
  @MinLength(2)
  @MaxLength(100)
  title: string;

  @IsString()
  @MaxLength(500)
  description: string;

  @Max(5)
  @Min(1, { message: 'Rating must not be less 1' })
  @IsNumber()
  rating: number;

  @IsString()
  @IsNotEmpty()
  productId: string;
}
