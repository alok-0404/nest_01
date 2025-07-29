import { IsInt,IsString } from "class-validator";


export class createCustomerDto {
    @IsString()
    name: string;

    @IsInt()
    age: number;

    @IsString()
    profile: string;
    
    @IsInt()
    mobile: number;
}