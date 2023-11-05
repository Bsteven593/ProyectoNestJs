import { Exclude, Expose} from 'class-transformer';
import { baseArticleDTO } from './base-article.dto';

@Exclude()
export class readArticleDTO extends baseArticleDTO{
    @Expose()
    readonly title;

    @Expose()
    readonly number;
    
    @Expose()
    readonly description;
}