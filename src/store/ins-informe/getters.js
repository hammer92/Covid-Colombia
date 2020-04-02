import { get, last, map, filter, isNaN } from 'lodash'

/**
 * @return {number}
 */
export function Confirmados (state) {
  return get(last(state.general), '2', 0)
}

export function GConfirmados (state) {
  return filter(map(state.general, (m) => parseInt(m[2])), (f) => !isNaN(f))
}

/**
 * @return {number}
 */
export function Fallecidos (state) {
  return get(last(state.general), '1', 0)
}

export function GFallecidos (state) {
  return filter(map(state.general, (m) => parseInt(m[1])), (f) => !isNaN(f))
}

/**
 * @return {number}
 */
export function Recuperados (state) {
  return get(last(state.general), '3', 0)
}

export function GRecuperados (state) {
  return filter(map(state.general, (m) => parseInt(m[3])), (f) => !isNaN(f))
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
