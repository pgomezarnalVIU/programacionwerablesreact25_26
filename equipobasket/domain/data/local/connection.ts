import type { SQLiteDatabase } from 'expo-sqlite';

export const DATABASE_NAME = 'basketv2.db';

const DATABASE_VERSION = 1;

export async function initializeDatabase(db: SQLiteDatabase): Promise<void> {
  const result = await db.getFirstAsync<{ user_version: number }>(
    'PRAGMA user_version'
  );

  const currentVersion = result?.user_version ?? 0;

  if (currentVersion >= DATABASE_VERSION) {
    return;
  }
  console.log("Inicializando base de datos, versión actual:", currentVersion);
  if (currentVersion === 0) {
    await db.execAsync(`
      PRAGMA journal_mode = WAL;
      PRAGMA foreign_keys = ON;

      CREATE TABLE IF NOT EXISTS equipos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        categoria TEXT NOT NULL,
        tipo TEXT NOT NULL
      );
    `);

    const countResult = await db.getFirstAsync<{ total: number }>(
      'SELECT COUNT(*) as total FROM equipos'
    );

    if ((countResult?.total ?? 0) === 0) {
      await db.runAsync(
        `
        INSERT INTO equipos 
          (nombre, categoria, tipo)

        VALUES 
          (?, ?, ?)
        `,
        ['Junior Masculino A', 'Junior', 'Masculino']
      );

      await db.runAsync(
        `
        INSERT INTO equipos 
          (nombre, categoria, tipo)
        VALUES 
          (?, ?, ?)
        `,
        ['Senior Femenino A', 'Senior', 'Femenino']
      );

      await db.runAsync(
        `
        INSERT INTO equipos 
          (nombre, categoria, tipo)
        VALUES 
          (?, ?, ?)
        `,
        ['Senior Femenino B', 'Senior', 'Femenino']
      );
    }
  }

  await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
}