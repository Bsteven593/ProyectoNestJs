import { Entity, PrimaryColumn, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Column,BeforeInsert,BeforeUpdate } from "typeorm";

@Entity('users', { schema: 'user' })
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @CreateDateColumn({
        name: 'create_at',
        type: 'timestamp',
        default: () => 'CURRENTE_TIMESTAMP',
    })
    createAt: Date

    @UpdateDateColumn({
        name: 'update_at',
        type: 'timestamp',
        default: () => 'CURRENTE_TIMESTAMP',

    })
    updateAt: Date;

    @DeleteDateColumn({
        name: 'delete_at',
        type: 'timestamp',
        nullable: true,
    })
    deleteaAt: Date;

    namePk: string;
    @Column('varchar', {
        name: 'Fist_name',
        nullable: true,
        comment: 'user name'

    })

    lastnamePk: string;
    @Column('varchar', {
        name: 'lastname',
        nullable: true,
        comment: 'user lastname'

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
    @Column('number', {
        name: 'phone',
        nullable: true,
        comment: 'user phohe'

    })

    @BeforeInsert()
    @BeforeUpdate()
    async setNamePk() {
        if (!this.namePk) {
            return
        }
        this.namePk = this.namePk.toUpperCase();
    }

    @BeforeInsert()
    @BeforeUpdate()
    async setTilte() {
        if (!this.lastnamePk) {
            return
        }
        this.lastnamePk = this.lastnamePk.toUpperCase();
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

