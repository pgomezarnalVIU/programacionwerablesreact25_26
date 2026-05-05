import type { SQLiteDatabase } from 'expo-sqlite';

import type { EquipoRepository } from '../../data/repository/EquipoRepository';
import type { Equipo } from '../entity/Equipo';

export class EquipoRepositoryImpl implements EquipoRepository {
  constructor(private readonly db: SQLiteDatabase) {}


  async findAll(): Promise<Equipo[]> {
    const rows = await this.db.getAllAsync<Equipo>(`
      SELECT 
        id,
        nombre,
        categoria,
        tipo
      FROM equipos
      ORDER BY nombre ASC
    `);
    return rows;
  }

  async create(equipo: Equipo): Promise<Equipo> {
    const result = await this.db.runAsync(
      `
      INSERT INTO equipos (
        nombre,
        categoria,
        tipo
      ) VALUES (?, ?, ?)
      `,
      [
        equipo.nombre,
        equipo.categoria,
        equipo.tipo,
      ]
    );
    const createdEquipo = await this.db.getFirstAsync<Equipo>(
      `
      SELECT
        id,
        nombre,
        categoria,
        tipo
      FROM equipos
      WHERE id = ?
      `,
      [result.lastInsertRowId]
    );
    if (!createdEquipo) {
      throw new Error('No se pudo crear el equipo');
    } else{
      return createdEquipo;
    }
  }
}