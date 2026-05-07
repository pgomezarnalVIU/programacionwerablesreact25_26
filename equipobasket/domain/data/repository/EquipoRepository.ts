import type { Equipo } from '../entity/Equipo';

export interface EquipoRepository {
  findAll(): Promise<Equipo[]>;
  //findById(id: number): Promise<Equipo | null>;
  create(equipo: Equipo): Promise<Equipo>;
  update(equipo: Equipo): Promise<void>;
  //delete(id: number): Promise<void>;
}