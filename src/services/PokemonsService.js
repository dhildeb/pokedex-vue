import { AppState } from '../AppState'
import { api } from './AxiosService'

class PokemonsService {
  async getPokemon(query) {
    const res = await api.get(`/pokemon?offset=${query}&limit=20`)
    AppState.wildPokemon = res.data.results
  }

  async getPokemonByName(name) {
    const res = await api.get('/pokemon/' + name)
    AppState.activePokemon = res.data
  }
}
export const pokemonsService = new PokemonsService()
