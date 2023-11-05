import { Exclude, Expose} from 'class-transformer';
import { baseUserDTO } from './base-user.dto';


@Exclude()
export class readUserDTO extends baseUserDTO{
    @Expose()
    readonly nick;

    @Expose()
    readonly email;
}
