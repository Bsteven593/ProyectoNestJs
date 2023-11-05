import { Exclude, Expose} from 'class-transformer';
import { baseCommunityDTO } from './base-community.dto';

@Exclude()
export class readCategoryDTO extends baseCommunityDTO{
    @Expose()
    readonly name;
    
    @Expose()
    readonly description;
}