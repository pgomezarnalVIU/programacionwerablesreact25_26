import type { Equipo } from '../../data/entity/Equipo';
import type { EquipoRepository } from '../../data/repository/EquipoRepository';

export class GetEquiposUseCase {
  constructor(private readonly equipoRepository: EquipoRepository) {}

  execute(): Promise<Equipo[]> {
    console.log('Ejecutando GetEquiposUseCase');
    return this.equipoRepository.findAll();
  }
}