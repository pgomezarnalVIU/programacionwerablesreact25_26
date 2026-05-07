import { useMemo, useState } from 'react';
import { useSQLiteContext } from 'expo-sqlite';

import type { Equipo } from '@/domain/data/entity/Equipo';
import { EquipoRepositoryImpl } from '@/domain/data/repository/EquipoRepositoryImpl';
import { CreateEquipoUseCase } from '@/domain/presentation/usecases/CreateEquipoUseCase';
import { EquipoCategoria } from '@/app/(equipos)/editNewEquipo';
import { EquipoModel } from '@/domain/model/EquipoModel';


export function useCreateEquipo() {
  const db = useSQLiteContext();

  const [equipo, setEquipo] = useState<EquipoModel | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const equipoRepository = useMemo(() => {
    return new EquipoRepositoryImpl(db);
  }, [db]);

  const createEquipoUseCase = useMemo(() => {
    return new CreateEquipoUseCase(equipoRepository);
  }, [equipoRepository]);

  //Funcion que inicializa el equipo a partir de los
  // datos recibidos desde la pantalla de edicion de equipo
  const initEquipo = (equipo: EquipoModel) => {
    setEquipo(equipo);
  };

  const createEquipo = async (equipo: EquipoModel): Promise<EquipoModel | null> => {
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

  const updateEquipo = async (equipo: EquipoModel): Promise<EquipoModel | null> => {
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
    equipo,
    initEquipo,
    createEquipo,
    updateEquipo,
    isSubmitting,
    error,
  };
}