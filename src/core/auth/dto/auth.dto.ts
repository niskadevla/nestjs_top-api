import { IsDefined, IsString, Matches, MaxLength, MinLength } from 'class-validator';

const strongPassword = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})');
const errorMessage =
  'Password is too weak. It must contain at least 1 lowercase alphabetical character, at least 1 uppercase alphabetical character, at least 1 numeric character, and be six characters or longer';

export class AuthDto {
  @IsString()
  @IsDefined()
  login: string;

  @IsString()
  @MinLength(6)
  @MaxLength(20)
  @Matches(strongPassword, {
    message: errorMessage,
  })
  password: string;
}
