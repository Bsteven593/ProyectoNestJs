import { PartialType } from "@nestjs/swagger";
import { baseArticleDTO } from "./base-article.dto";

export class updateArticleDTO extends PartialType(baseArticleDTO ){
    
}