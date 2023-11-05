import { Allow, IsNotEmpty, IsString } from "class-validator";

export class baseRolDTO{
    @Allow()
    @IsNotEmpty()
    @IsString()
    readonly postOne;

    @Allow()
    @IsNotEmpty()
    @IsString()
    readonly postTwo;

    @Allow()
    @IsNotEmpty()
    @IsString()
    readonly postThree;
}   