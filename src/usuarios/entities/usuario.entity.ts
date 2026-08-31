import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum RolUsuario {
  VETERINARIO = 'veterinario',
  DUENO = 'dueno',
}

@Entity('usuario')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  @Column({ type: 'varchar', length: 150, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  telefono: string;

  @Column({ type: 'enum', enum: RolUsuario, default: RolUsuario.DUENO })
  rol: RolUsuario;
}