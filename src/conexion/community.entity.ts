
//David Quiroga - Bryan Latacumba

import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Column, BeforeInsert, BeforeUpdate, OneToMany } from "typeorm";
import { CategoryEntity } from "./category.entity";
import { ArticleEntity } from "./article.entity";
import { UserEntity } from "./user.entity";


@Entity('communities', {schema: 'info'})

export class CommunityEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @CreateDateColumn({
        name: 'create_At',
        type: 'timestamp',
        default: ()=> 'current_timestamp'
    })
    createAt:Date;
    @UpdateDateColumn({
        name: 'update_At',//nombre de la columna
        type: 'timestamp',
        default: ()=>'Current_timestamp',
    })
    updateAt:Date;

    @DeleteDateColumn({
        name: 'delete_At',//nombre de la columna
        type: 'timestamp',
        nullable: true,
    })
    deleteAt:Date;

    //! Relaciones
    @OneToMany(() => CategoryEntity, (category) => category.community)
    category: CategoryEntity[];
    @OneToMany(() => ArticleEntity, (article) => article.community)
    article: ArticleEntity[];
    @OneToMany(() => UserEntity, (user) => user.community)
    user: UserEntity[];

    @Column('varchar', {
        name: 'name',
        nullable: true,
        comment: 'Community name'
    })
    name:string;

    @Column('varchar', {
        name: 'description',
        nullable: true,
        comment: 'Community description'
    })
    description:string;

    @BeforeInsert()
    @BeforeUpdate()
    async setName(){
        if(!this.name){
            return
        }
        this.name = this.name.toLowerCase();
    }

    @BeforeInsert()
    @BeforeUpdate()
    async setDescrption(){
        if(!this.description){
            return
        }
        this.description = this.description.toLowerCase();
    }
}

