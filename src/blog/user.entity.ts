//David Quiroga - Bryan Latacumba
import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Column,BeforeInsert,BeforeUpdate,OneToMany,ManyToOne } from "typeorm";
import { RolEntity } from "./rol.entity";
import { BlogEntity } from "./blog.entity";
import { CommunityEntity } from "./community.entity";
@Entity('user', { schema: 'info' })
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({
        name: 'create_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    createAt: Date

    @UpdateDateColumn({
        name: 'update_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',

    })
    updateAt: Date;

    @DeleteDateColumn({
        name: 'delete_at',
        type: 'timestamp',
        nullable: true,
    })
    deleteaAt: Date;


    //-----Relaciones--------
    @OneToMany(() => RolEntity, rol => rol.user)
    rol: RolEntity[];

    @ManyToOne(() => BlogEntity, blog => blog.user)
    blog: BlogEntity

    @ManyToOne(() => CommunityEntity, community=> community.user)
    community: CommunityEntity
     //-----Fin Relaciones--------

    // namePk: string;
    // @Column('varchar', {
    //     name: 'Fist_name',
    //     nullable: true,
    //     comment: 'user name'

    // })

    // lastnamePk: string;
    // @Column('varchar', {
    //     name: 'lastname',
    //     nullable: true,
    //     comment: 'user lastname'

    // })

    nick: string;
    @Column('varchar', {
        name: 'nick',
        nullable: true,
        comment: 'users nick'
    })

    direction: string;
    @Column('varchar', {
        name: 'direction',
        nullable: true,
        comment: 'user direction'

    })

    email: string;
    @Column('varchar', {
        name: 'email',
        nullable: true,
        comment: 'user email'

    })

    phone: string;
    @Column('numeric', {
        name: 'phone',
        nullable: true,
        comment: 'user phohe'

    })

    // @BeforeInsert()
    // @BeforeUpdate()
    // async setNamePk() {
    //     if (!this.namePk) {
    //         return
    //     }
    //     this.namePk = this.namePk.toUpperCase();
    // }

    // @BeforeInsert()
    // @BeforeUpdate()
    // async setTilte() {
    //     if (!this.lastnamePk) {
    //         return
    //     }
    //     this.lastnamePk = this.lastnamePk.toUpperCase();
    // }

    @BeforeInsert()
    @BeforeUpdate()
    async setNick(){
        if (!this.nick){
            return
        }
        this,this.nick = this.nick.toUpperCase();
    }


    @BeforeInsert()
    @BeforeUpdate()
    async setDirection() {
        if (!this.direction) {
            return
        }
        this.direction = this.direction.toLocaleLowerCase();
    }

    @BeforeInsert()
    @BeforeUpdate()
    async setEmail() {
        if(!this.email){
            return
        }
        this.email =  this.email.trim();
    }

    @BeforeInsert()
    @BeforeUpdate()
    async setPhote() {
        if(!this.phone){
            return
        }
        this.phone =  this.phone.replace(/\D/g, '')
    }

}

