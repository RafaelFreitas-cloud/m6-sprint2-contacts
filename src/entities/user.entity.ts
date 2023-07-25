import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    BeforeInsert,
    BeforeUpdate,
  } from "typeorm";

  import { getRounds, hashSync } from "bcryptjs";
  
  @Entity("users")
  class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column({ type: "varchar", length: 45 })
    name: string;
  
    @Column({ type: "varchar", length: 45, unique: true })
    email: string;

    @Column({ type: "varchar", length: 15, unique: true })
    phone: string;
  
    @Column({ type: "varchar", length: 120 })
    password: string;
  
    @CreateDateColumn({ type: "date" })
    createdAt: string | Date;
  
  
    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
      // getRounds validando se a senha já não foi criptografada antes devido ao update
      const isEncrypted: number = getRounds(this.password);
  
      if (!isEncrypted) {
        // Adicionando ao objeto que irá para o banco a senha criptografada
        this.password = hashSync(this.password, 10);
      }
    }
  }
  
  export default User;