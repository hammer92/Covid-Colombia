import { get } from 'lodash'
export function setGeneral (state, data) {
  state.general = data
}
export function setEstudio (state, data) {
  state.estudio = {
    Importados: get(data, '0.0'),
    Relacionados: get(data, '1.0'),
    Estudio: get(data, '2.0')
  }
}
