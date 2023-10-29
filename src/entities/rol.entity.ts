import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Column, BeforeInsert, BeforeUpdate } from "typeorm";

@Entity('rol', { schema: 'rol' })
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

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

    @Column('varchar', {
        name: 'post1',
        nullable: true,
        comment: 'one name'
    })
    postOne: string;

    @Column('varchar', {
        name: 'post2',
        nullable: true,
        comment: 'two name'
    })
    postTwo: string;

    @Column('varchar', {
        name: 'post3',
        nullable: true,
        comment: 'three name'
    })
    postThree: string;

    @BeforeInsert()
    @BeforeUpdate()
    async setNamePostOne() {
        if (!this.postOne) {
            return
        }
        this.postOne = this.postOne.toUpperCase();
    }

    @BeforeInsert()
    @BeforeUpdate()
    async setNamePostTwo() {
        if (!this.postTwo) {
            return
        }
        this.postTwo = this.postTwo.toUpperCase();
    }

    @BeforeInsert()
    @BeforeUpdate()
    async setNamePostThree() {
        if (!this.postTwo) {
            return
        }
        this.postThree = this.postThree.toUpperCase();
    }
}