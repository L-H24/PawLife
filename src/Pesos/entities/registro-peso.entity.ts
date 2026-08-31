import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

// Importamos Mascota porque el peso pertenece a una mascota.
import { Mascota } from '../../Mascotas/entities/mascota.entity';

// Importamos Usuario porque el registro lo hace un veterinario.
import { Usuario } from '../../usuarios/entities/usuario.entity';

// Creamos la tabla registro_peso.
@Entity('registro_peso')
export class RegistroPeso {

// ID único del registro, se genera automáticamente.
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'peso_kg', type: 'decimal', precision: 5, scale: 2 }) // Peso de la mascota en kilogramos.
  pesoKg: number;

  @Column({ name: 'fecha_medicion', type: 'date' }) // Fecha en la que se midió el peso.
  fechaMedicion: Date;


// Una mascota puede tener muchos registros de peso
  @ManyToOne(() => Mascota, { nullable: false })
  @JoinColumn({ name: 'mascota_id' })
  mascota: Mascota;

// Relacionamos el registro con el veterinario que lo hizo.
  @ManyToOne(() => Usuario, { nullable: false })
  @JoinColumn({ name: 'veterinario_id' })
  veterinario: Usuario;
}