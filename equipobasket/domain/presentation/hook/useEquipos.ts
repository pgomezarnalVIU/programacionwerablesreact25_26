import { useSQLiteContext } from 'expo-sqlite';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { EquipoModel } from '@/domain/model/EquipoModel';
import { EquipoRepositoryImpl } from '../../data/repository/EquipoRepositoryImpl';
import { GetEquiposUseCase } from '../usecases/GetEquipoUseCase';

export function useEquipos() {
  const db = useSQLiteContext();

  const [equipos, setEquipos] = useState<EquipoModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const equipoRepository = useMemo(() => {
    return new EquipoRepositoryImpl(db);
  }, [db]);

  const getEquiposUseCase = useMemo(() => {
    return new GetEquiposUseCase(equipoRepository);
  }, [equipoRepository]);

  const loadEquipos = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      console.log('Cargando equipos...');
      const result = await getEquiposUseCase.execute();
      console.log(result);
      setEquipos(result);
    } catch {
      setError('No se pudieron cargar los equipos');
    } finally {
      setIsLoading(false);
    }
  }, [getEquiposUseCase]);

  useEffect(() => {
    loadEquipos();
  }, [loadEquipos]);

  return {
    equipos,
    isLoading,
    error,
    reload: loadEquipos,
  };
}