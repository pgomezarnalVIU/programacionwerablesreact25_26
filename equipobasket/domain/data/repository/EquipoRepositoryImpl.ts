import type { SQLiteDatabase } from 'expo-sqlite';

import type { EquipoRepository } from '../../data/repository/EquipoRepository';
import type { EquipoModel } from '../../model/EquipoModel';
import type { Equipo } from '../entity/Equipo';
import { EquipoMapper } from '../mapper/EquipoMapper';

export class EquipoRepositoryImpl implements EquipoRepository {
  constructor(private readonly db: SQLiteDatabase) {}

  async findAll(): Promise<Equipo[]> {
    console.log('Ejecutando findAll en EquipoRepositoryImpl');
    const rows = await this.db.getAllAsync<EquipoModel>(`
      SELECT 
        id,
        nombre,
        categoria,
        tipo
      FROM equipos
      ORDER BY nombre ASC
    `);
    console.log("Filas encontradas:", rows);
    return rows.map(EquipoMapper.toEntity);
  }
}