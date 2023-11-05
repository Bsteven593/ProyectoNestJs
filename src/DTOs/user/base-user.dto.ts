import { IsString, Allow, IsNotEmpty, IsNumber, IsAlphanumeric, IsAlpha, Max } from "class-validator";


export class baseUserDTO{
    @Allow()
    @IsNotEmpty() //! isNotEmptyValidationOption()
    @IsString()
    @IsAlpha()
    @IsString()
    readonly nick;

    @Allow()
    @IsNotEmpty()
    @IsString()
    readonly direction;

    @Allow()
    @IsNotEmpty()
    @IsString()
    @IsAlphanumeric()
    @IsAlpha()
    readonly email;

    @Allow()
    @IsNotEmpty()
    @IsNumber()
    @Max(10)
    readonly phone: number;
}