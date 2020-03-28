import axios from 'axios'
import { get, head } from 'lodash'
export async function general ({ commit }/* context */) {
  try {
    const { data } = await axios('https://infogram.com/api/live/flex/bc384047-e71c-47d9-b606-1eb6a29962e3/972157a6-eaf7-4cde-a65b-8579bd4b0af1?')
    commit('setGeneral', head(get(data, 'data', [])))
  } catch (e) {
    console.log(e)
  }
}

export async function estudios ({ commit }/* context */) {
  try {
    const { data } = await axios('https://infogram.com/api/live/flex/ed3be1e2-6163-479f-8281-fdd9af826e64/90268805-99b6-4c1f-b0a2-b4bf887b2d44?')
    commit('setEstudio', head(get(data, 'data', [])))
  } catch (e) {
    console.log(e)
  }
}

export function departamental (/* context */) {
}

export function detallado (/* context */) {
}
