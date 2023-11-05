import { PartialType } from "@nestjs/swagger";
import { baseBlogDTO } from "./base-blog.dto";

export class updateBlogDTO extends PartialType(baseBlogDTO){
    
}