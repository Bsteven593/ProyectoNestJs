import { Allow, IsNotEmpty, IsString } from "class-validator";

export class baseBlogDTO{
    @Allow()
    @IsNotEmpty()
    @IsString()
    readonly title;

    @Allow()
    @IsNotEmpty()
    @IsString()
    readonly number;

   
}   