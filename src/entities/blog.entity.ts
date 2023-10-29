import { CreateDateColumn, Entity, PrimaryColumn,UpdateDateColumn,DeleteDateColumn,Column,BeforeInsert, BeforeUpdate,OneToMany } from "typeorm";
import { ArticleEntity } from "./article.entity";

@Entity('blog', {schema:'notice'})
export class BlogEntity{
    @PrimaryColumn('uuid')
    id:String;

@CreateDateColumn({
    name:'create_at',
    type:'timestamp',
    default: ()=>'Current_timestamp',
})

createAt:Date;

@UpdateDateColumn({
    name:'update_At',
    type: 'timestamp',
    default: ()=>'Current_timestamp',
})

updateAt:Date;

@DeleteDateColumn({
    name:'delete_At',
    type:'timestamp',
    nullable: false,
     

})

deleteAt:Date;

//-----Relaciones--------
    @OneToMany(()=>ArticleEntity,article=>article.blog)
    article:ArticleEntity[];
//-----Fin Relaciones--------

@Column('varchar', {
    name:'title',
    nullable: false,
    comment:'Blog Tittle'
})
tittle:string;
@Column('number', {
    name: 'number',
    nullable: false,
    comment: 'Number Blog'
})
number:number;



@BeforeInsert()
@BeforeUpdate()

async setTittle() {
    if(!this.tittle){
        return
    }
    this.tittle =  this.tittle.toUpperCase();
}





}