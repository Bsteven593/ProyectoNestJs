//David Quiroga - Bryan Latacumba
import { CreateDateColumn,Entity,PrimaryColumn,UpdateDateColumn, DeleteDateColumn, Column, BeforeInsert, BeforeUpdate, ManyToOne,OneToMany } from "typeorm";
import { BlogEntity } from "./blog.entity";
import { CategoryEntity } from "./category.entity";
import { CommunityEntity } from "./community.entity";

@Entity('article', { schema: 'info' })
export class ArticleEntity {
    @PrimaryColumn('uuid')
    id: string;

    @CreateDateColumn({
        name: 'create_at',
        type: 'timestamp',
        default: () => 'Current_timestamp',
    })

    createAt: Date;

    @UpdateDateColumn({
        name: 'update_At',
        type: 'timestamp',
        default: () => 'Current_timestamp',
    })

    updateAt: Date;

    @DeleteDateColumn({
        name: 'delete_At',
        type: 'timestamp',
        nullable: false,
    })

    deleteAt: Date;

    //-----Relaciones--------
    @ManyToOne(() => BlogEntity, blog => blog.article)
    blog: BlogEntity

    @OneToMany(() => CategoryEntity, category => category.article)
    category: CategoryEntity[]

    @ManyToOne(() => CommunityEntity, community => community.article)
    community: CommunityEntity
    //-----Fin Relaciones--------

    @Column('varchar', {
        name: 'title',
        nullable: false,
        comment: 'Article Tittle'
    })
    tittle: string;
    @Column('numeric', {
        name: 'number',
        nullable: false,
        comment: 'Number article'
    })
    number: number;

    @Column('varchar', {
        name: 'description',
        nullable: true,
        comment: 'articulo description'
    })
    description: string;

    @BeforeInsert()
    @BeforeUpdate()

    async setTittle() {
        if (!this.tittle) {
            return
        }
        this.tittle = this.tittle.toUpperCase();
    }

    @BeforeInsert()
    @BeforeUpdate()

    async setDescription() {
        if (!this.description) {
            return
        }
        this.description = this.description.toLowerCase();
    }
}
