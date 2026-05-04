import type { EquipoModel } from '../../model/EquipoModel';
import type { Equipo } from '../entity/Equipo';

export class EquipoMapper {
  static toEntity(model: EquipoModel): Equipo {
    return {
      id: model.id,
      nombre: model.nombre,
      categoria: model.categoria,
      tipo: model.tipo,
    };
  }

  static toModel(entity: Equipo): EquipoModel {
    return {
      id: entity.id,
      nombre: entity.nombre,
      categoria: entity.categoria,
      tipo: entity.tipo,
    };
  }
}