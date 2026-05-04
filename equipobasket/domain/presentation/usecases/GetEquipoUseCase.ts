
import { EquipoMapper } from '@/domain/data/mapper/EquipoMapper';
import { EquipoModel } from '@/domain/model/EquipoModel';
import type { EquipoRepository } from '../../data/repository/EquipoRepository';

export class GetEquiposUseCase {
  constructor(private readonly equipoRepository: EquipoRepository) {}

  execute(): Promise<EquipoModel[]> {
    console.log('Ejecutando GetEquiposUseCase');
    return this.equipoRepository.findAll().then((equipos) => equipos.map(EquipoMapper.toModel));
  }
}