import type { Equipo } from '../entity/Equipo';

export interface EquipoRepository {
  findAll(): Promise<Equipo[]>;
}