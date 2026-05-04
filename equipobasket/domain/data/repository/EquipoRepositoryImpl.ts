import type { SQLiteDatabase } from 'expo-sqlite';

import type { EquipoRepository } from '../../data/repository/EquipoRepository';
import type { Equipo } from '../entity/Equipo';

export class EquipoRepositoryImpl implements EquipoRepository {
  constructor(private readonly db: SQLiteDatabase) {}

  async findAll(): Promise<Equipo[]> {
    console.log('Ejecutando findAll en EquipoRepositoryImpl');
    const rows = await this.db.getAllAsync<Equipo>(`
      SELECT 
        id,
        nombre,
        categoria,
        tipo
      FROM equipos
      ORDER BY nombre ASC
    `);
    console.log("Filas encontradas:", rows);
    return rows;
  }
}