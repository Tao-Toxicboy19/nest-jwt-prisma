import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CraneDto {
    @IsNotEmpty()
    @IsString()
    craneName: string

    @IsNotEmpty()
    @IsNumber()
    lat: number

    @IsNotEmpty()
    @IsNumber()
    log: number

    @IsNotEmpty()
    @IsNumber()
    setUpTime: number
}