import { Exclude, Expose} from 'class-transformer';
import { baseCategoryDTO } from './base-category.dto';

@Exclude()
export class readCategoryDTO extends baseCategoryDTO{
    @Expose()
    readonly categoria;
    
    @Expose()
    readonly description;
}