import { Allow, IsNotEmpty, IsString } from "class-validator";

export class baseArticleDTO{
    @Allow()
    @IsNotEmpty()
    @IsString()
    readonly title;

    @Allow()
    @IsNotEmpty()
    @IsString()
    readonly number;

    @Allow()
    @IsNotEmpty()
    @IsString()
    readonly description;
}   