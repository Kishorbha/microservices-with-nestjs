import { IsNotEmpty, IsString, IsPositive } from 'class-validator';
import { IsPhoneNumber } from 'class-validator';

export class CreateOrder {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsPositive()
  price: number;

  @IsPhoneNumber()
  phoneNumber: string;
}
