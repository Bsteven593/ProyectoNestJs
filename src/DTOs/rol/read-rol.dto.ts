import { Exclude, Expose} from 'class-transformer';
import { baseRolDTO } from './base-rol.dto';

@Exclude()
export class readRolDTO extends baseRolDTO{
    @Expose()
    readonly postOne;

    @Expose()
    readonly postTwo;

    @Expose()
    readonly postThree;
    
    
   
}