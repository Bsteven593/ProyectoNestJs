import { PartialType } from "@nestjs/swagger";
import { baseCategoryDTO } from "./base-category.dto";

export class updateCategoryDTO extends PartialType(baseCategoryDTO){
    
}