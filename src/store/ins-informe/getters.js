import { get, last } from 'lodash'

/**
 * @return {number}
 */
export function Confirmados (state) {
  return get(last(state.general), '3', 0)
}

/**
 * @return {number}
 */
export function Fallecidos (state) {
  return get(last(state.general), '1', 0)
}

/**
 * @return {number}
 */
export function Recuperados (state) {
  return get(last(state.general), '2', 0)
}

/**
 * @return {number}
 */
export function Estudio (state) {
  return get(state, 'estudio.Estudio', 0)
}

/**
 * @return {number}
 */
export function Importados (state) {
  return get(state, 'estudio.Importados', 0)
}

/**
 * @return {number}
 */
export function Relacionados (state) {
  return get(state, 'estudio.Relacionados', 0)
}
