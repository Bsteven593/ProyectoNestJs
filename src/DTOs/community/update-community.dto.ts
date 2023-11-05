import { PartialType } from "@nestjs/swagger";
import { baseCommunityDTO } from "./base-community.dto";

export class updateCommunityDTO extends PartialType(baseCommunityDTO){
    
}