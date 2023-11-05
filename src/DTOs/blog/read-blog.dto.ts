import { Exclude, Expose} from 'class-transformer';
import { baseBlogDTO } from './base-blog.dto';

@Exclude()
export class readBlogDTO extends baseBlogDTO{
    @Expose()
    readonly title;

    @Expose()
    readonly number;
    
   
}