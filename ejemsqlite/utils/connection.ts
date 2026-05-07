import type { SQLiteDatabase } from 'expo-sqlite';

// Nombre de la base de datos
export const DATABASE_NAME = 'lista.db';

// Versión de la base de datos, se incrementa cada vez que se hacen cambios en la estructura
// Esto permite manejar migraciones en el futuro si es necesario
const DATABASE_VERSION = 1;

// Función para inicializar la base de datos, creando tablas y datos iniciales si es necesario
export async function initializeDatabase(db: SQLiteDatabase): Promise<void> {
  // Obtener la versión actual de la base de datos
  // Si la versión actual es menor que la versión definida, se procede a inicializar o migrar la base de datos
  // PRAGMA user_version es una forma común de almacenar la versión de la base de datos en SQLite
  // En SQLite, PRAGMA es una extensión propia de SQL usada para modificar el comportamiento de SQLite 
  // o leer datos internos que no están en tablas normales.
  const result = await db.getFirstAsync<{ user_version: number }>(
    'PRAGMA user_version'
  );

  const currentVersion = result?.user_version ?? 0;

  // Si la versión actual es mayor o igual a la versión definida, no se necesita hacer nada
  // Esto permite que la función sea segura de llamar varias veces sin causar problemas
  if (currentVersion >= DATABASE_VERSION) {
    return;
  }
  console.log("Inicializando base de datos, versión actual:", currentVersion);
  if (currentVersion === 0) {
    // journal_mode = WAL mejora el rendimiento de las operaciones de escritura 
    // al permitir que las transacciones se escriban en un archivo separado (el "write-ahead log") 
    // antes de ser aplicadas a la base de datos principal. 
    // Esto puede mejorar significativamente el rendimiento en aplicaciones con muchas escrituras.

    // foreign_keys = ON habilita el soporte para claves foráneas en SQLite, 
    // lo que permite definir relaciones entre tablas y garantizar la integridad referencial.
    await db.execAsync(`
      PRAGMA journal_mode = WAL;
      PRAGMA foreign_keys = ON;

      CREATE TABLE IF NOT EXISTS lista (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        numero INTEGER NOT NULL
      );
    `);

    const countResult = await db.getFirstAsync<{ total: number }>(
      'SELECT COUNT(*) as total FROM lista'
    );

    if ((countResult?.total ?? 0) === 0) {
      await db.runAsync(
        `
        INSERT INTO lista 
          (nombre, numero)

        VALUES 
          (?, ?)
        `,
        ['Paco Gomez', 25]
      );

      await db.runAsync(
        `
        INSERT INTO lista 
          (nombre, numero)

        VALUES 
          (?, ?)
        `,
        ['Luisa Fernandez', 22]
      );

      await db.runAsync(
        `
        INSERT INTO lista 
          (nombre, numero)
        VALUES 
          (?, ?)
        `,
        ['Nombre desconocido', 28]
      );
    }
  }

  // Actualizar la versión de la base de datos a la versión definida
  await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
}