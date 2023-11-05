import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Column, BeforeInsert, BeforeUpdate, ManyToOne } from "typeorm";
import { CommunityEntity } from "./community.entity";
import { ArticleEntity } from "./article.entity";

@Entity('category', {schema: 'info'})
export class CategoryEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @CreateDateColumn({
        name: 'create_At',
        type: 'timestamp',
        default: ()=> 'Current_timestamp'
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
    @ManyToOne(() => CommunityEntity, (community) => community.category)
    community: CommunityEntity
    @ManyToOne(() => ArticleEntity, (article) => article.category)
    article: ArticleEntity

    @Column('varchar', {
        name: 'categoria',
        nullable: false,
        comment: 'Category Tittle'
    })

    categoria:string;
    @Column('varchar', {
        name: 'description',
        nullable: true,
        comment: 'product description'
    })
    description:string;

    @BeforeInsert()
    @BeforeUpdate()

    async setCategory() {
        if(!this.categoria){
            return
        }
        this.categoria = this.categoria.toLowerCase();
    }

    @BeforeInsert()
    @BeforeUpdate()
    async setDescription(){
        if(!this.description){
            return
        }
        this.description = this.description.toLowerCase();
    }
}