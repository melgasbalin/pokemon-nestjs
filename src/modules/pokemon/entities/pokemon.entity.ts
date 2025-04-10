import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pokemon {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('text', { default: '', unique:false})
    name: string;

    @Column('text', { default: ''})
    type: string;

    @Column('numeric', { default: 0, nullable: false})
    age:number;

    @Column('text', { default: ''})
    created: string;

    @Column('text', { default: ''})
    nombreEntrenador: string;






    @BeforeInsert()
  checkFieldsBeforeInsert() {
    this.name = this.name.toUpperCase().trim();
    this.nombreEntrenador = this.nombreEntrenador.toUpperCase().trim();
   
  }
  @BeforeUpdate()
  checkFieldsBeforeUpdate() {
    this.checkFieldsBeforeInsert();
  }
}
