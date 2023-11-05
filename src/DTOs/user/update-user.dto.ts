import { PartialType } from "@nestjs/swagger";
import { baseUserDTO } from "./base-user.dto";

export class updateUserDTO extends PartialType(baseUserDTO){
    
}