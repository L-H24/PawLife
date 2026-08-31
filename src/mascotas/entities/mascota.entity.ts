// Importamos de TypeORM las cosas que necesitamos para crear la tabla
// sus columnas y las relaciones con otras tablas.

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

// Importamos la entidad Usuario porque una mascota tiene un dueño y un veterinario
// Los dos son usuarios.
import { Usuario } from '../../usuarios/entities/usuario.entity';

// Creamos una lista de las especies que puede tener una mascota (perro y gato)
export enum EspecieMascota { PERRO = 'perro', GATO = 'gato' }
// Creamos una lista para el sexo de la mascota (macho o hembra)
export enum SexoMascota { MACHO = 'macho', HEMBRA = 'hembra' }


// Le decimos a TypeORM que esta clase representa una tabla llamada "mascota".
@Entity('mascota')
export class Mascota {

// Creamos el ID de cada mascota (la llave primaria y se genera automáticamente)
 @PrimaryGeneratedColumn()
 id: number;

 
 @Column({ type: 'varchar', length: 80 }) // Creamos una columna para guardar el nombre de la mascota (texto con 80 caracteres)
 nombre: string;
 @Column({ type: 'enum', enum: EspecieMascota }) // especie (perro, gato)
 especie: EspecieMascota;
 @Column({ type: 'varchar', length: 80, nullable: true }) // raza (Puede quedar vacío porque pusimos nullable: true)
 raza: string;
 @Column({ type: 'enum', enum: SexoMascota, nullable: true }) // sexo de la mascota (Solo puede ser macho, hembra o vacio)
 sexo: SexoMascota;
 @Column({ name: 'fecha_nacimiento', type: 'date', nullable: true })  // fecha de nacimiento
 fechaNacimiento: Date;
 @Column({ type: 'boolean', default: true }) // indica si la mascota está activa (true o false) 
 activo: boolean; 



 // el dueño de la mascota (muchas mascotas pueden pertenecer a un dueño)
 @ManyToOne(() => Usuario, { nullable: false })

 // usuario_id será la llave foránea que conecta la mascota con su dueño
 @JoinColumn({ name: 'usuario_id' })
 usuario: Usuario;

 // Una mascota también puede estar relacionada con un veterinario.
 // El veterinario también es un Usuario.
 @ManyToOne(() => Usuario, { nullable: false })

 // Creamos llave foranea "veterinario_id" que conecta la mascota con el veterinario.
 @JoinColumn({ name: 'veterinario_id' })

 // Aquí guardamos el usuario que corresponde al veterinario que registró el perfil de la mascota.
 veterinario: Usuario;
}