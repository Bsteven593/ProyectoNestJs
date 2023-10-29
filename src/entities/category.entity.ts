import { Entity, PrimaryColumn, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn,DeleteDateColumn,Column,BeforeInsert,BeforeUpdate,OneToMany } from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity('category',{schema: 'venta '})
export class CategoryEntity{
    @PrimaryGeneratedColumn('uuid')
    id:String;
    @CreateDateColumn({
        name: 'create_at',
        type: 'timestamp',
        default: ()=>'CURRENTE_TIMESTAMP', 
    })
    createAt:Date;

    @UpdateDateColumn({
        name:'update_at',
        type: 'timestamp',
        default:() =>'CURRENTE_TIMESTAMP',
        
    })
    updateAt:Date;

    @DeleteDateColumn({
        name:'delete_at',
        type: 'timestamp',
        nullable:true,
    })
    deleteaAt:Date;

    //-----Relaciones--------
    @OneToMany(()=>ProductEntity,product=>product.category)
    product:ProductEntity[];

//-----Fin Relaciones--------


    
    title:string;
    @Column('varchar',{
        name:'category',
        nullable: false,
        comment:'name category'
    })
    price:string;
    @Column('varchar',{
        name:'description',
        nullable:false,
        comment:'type category'
    })

@BeforeInsert()
@BeforeUpdate()
async setTilte(){
    if(!this.title){
        return
    }
    this.title=this.title.toLowerCase();
}

}