import { Allow, IsNotEmpty, IsString } from "class-validator";

export class baseCommunityDTO{
    @Allow()
    @IsNotEmpty()
    @IsString()
    readonly name;

    @Allow()
    @IsNotEmpty()
    @IsString()
    readonly description;
}   