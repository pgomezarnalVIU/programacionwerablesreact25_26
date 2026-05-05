import { useMemo, useState } from 'react';
import { useSQLiteContext } from 'expo-sqlite';

import type { Equipo } from '@/domain/data/entity/Equipo';
import { EquipoRepositoryImpl } from '@/domain/data/repository/EquipoRepositoryImpl';
import { CreateEquipoUseCase } from '@/domain/presentation/usecases/CreateEquipoUseCase';
import { EquipoCategoria } from '@/app/(equipos)/editNewEquipo';


export function useCreateEquipo() {
  const db = useSQLiteContext();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const equipoRepository = useMemo(() => {
    return new EquipoRepositoryImpl(db);
  }, [db]);

  const createEquipoUseCase = useMemo(() => {
    return new CreateEquipoUseCase(equipoRepository);
  }, [equipoRepository]);

  const createEquipo = async (equipo: Equipo): Promise<Equipo | null> => {
    try {
      setIsSubmitting(true);
      setError(null);

      const equipoCreado = await createEquipoUseCase.execute(equipo);

      return equipoCreado;
    } catch {
      setError('No se pudo crear el equipo');
      return null;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    createEquipo,
    isSubmitting,
    error,
  };
}