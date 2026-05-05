import { EquipoModel } from '@/domain/model/EquipoModel';
import type { Equipo } from '@/domain/data/entity/Equipo';
import type { EquipoRepository } from '@/domain/data/repository/EquipoRepository';
import { EquipoMapper } from '@/domain/data/mapper/EquipoMapper';

export class CreateEquipoUseCase {
  constructor(private readonly equipoRepository: EquipoRepository) {}

  async execute(equipo: EquipoModel): Promise<EquipoModel> {
    const equipoCreated: Equipo = await this.equipoRepository.create(EquipoMapper.toEntity(equipo));
    return EquipoMapper.toModel(equipoCreated);
  }
}