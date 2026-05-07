import { useSQLiteContext } from 'expo-sqlite';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { EquipoModel } from '@/domain/model/EquipoModel';
import { EquipoRepositoryImpl } from '../../data/repository/EquipoRepositoryImpl';
import { GetEquiposUseCase } from '../usecases/GetEquipoUseCase';
import { useFocusEffect } from 'expo-router';

export function useEquipos() {
  // Obtener la instancia de la base de datos SQLite desde el contexto
  // En nuestro caso desde el SQLProvider que se encuentra en el App.tsx
  const db = useSQLiteContext();

  // Estados para manejar los equipos, la carga y los errores
  const [equipos, setEquipos] = useState<EquipoModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Crear la instancia del repositorio y 
  // del caso de uso utilizando useMemo para evitar recrearlos en cada render
  const equipoRepository = useMemo(() => {
    return new EquipoRepositoryImpl(db);
  }, [db]);

  // Crear la función para cargar los equipos utilizando 
  // useCallback para evitar recrearla en cada render
  const getEquiposUseCase = useMemo(() => {
    return new GetEquiposUseCase(equipoRepository);
  }, [equipoRepository]);

  // Función para cargar los equipos desde la base de datos
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

  // Cargar los equipos cuando el componente se monta
  useEffect(() => {
    loadEquipos();
  }, [loadEquipos]);


  // Cargar los equipos cuando el componente gana el foco 
  // (por ejemplo, al navegar a esta pantalla)
  useFocusEffect(
  useCallback(() => {
    loadEquipos();
  }, [])
);

  return {
    equipos,
    isLoading,
    error,
    reload: loadEquipos,
  };
}