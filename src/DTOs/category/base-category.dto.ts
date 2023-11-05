import { Allow, IsNotEmpty, IsString, IsAlpha, IsAlphanumeric } from "class-validator";

export class  baseCategoryDTO{
    @Allow()
    @IsNotEmpty()
    @IsString()
    @IsAlpha()
    readonly category;
    
    @IsNotEmpty()
    @IsAlphanumeric()
    readonly description;
    
}