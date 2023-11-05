import { IsOptional, IsString } from "class-validator";

class filterDTO extends paginationDTO{
    @IsOptional()
    @IsString()
    readonly postOne;
}
