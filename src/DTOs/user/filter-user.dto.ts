import { IsAlphanumeric, IsString } from "class-validator";

class filterDTO extends paginationDTO{
    @IsString()
    @IsAlphanumeric()
    readonly nick;
}