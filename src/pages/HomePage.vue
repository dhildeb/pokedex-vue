<template>
  <div class="container">
    <div class="row">
      <div class="col-6 d-flex justify-content-center">
        <button class="btn btn-info" @click="loadMore(-1)" v-if="state.query > 0">
          back
        </button>
      </div>
      <div class="col-6 d-flex justify-content-center">
        <button class="btn btn-info" @click="loadMore(1)" v-if="state.query < 250">
          next
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-5"></div>
      <div class="col-6 d-flex flex-column justify-content-center">
        <WildPokemon v-for="pokemon in wildPokemon" :key="pokemon.url" :pokemon="pokemon" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive, watchEffect } from '@vue/runtime-core'
import Notification from '../utils/Notification'
import { pokemonsService } from '../services/PokemonsService'
import WildPokemon from '../components/WildPokemon.vue'
import { AppState } from '../AppState'

export default {
  components: { WildPokemon },
  name: 'Home',
  setup() {
    const state = reactive({
      query: 0
    })
    watchEffect(async() => {
      try {
        await pokemonsService.getPokemon(state.query)
      } catch (error) {
        Notification.toast(error)
      }
    })
    return {
      state,
      wildPokemon: computed(() => AppState.wildPokemon),
      async loadMore(n) {
        state.query += 20 * n
        try {
          await pokemonsService.getPokemon(state.query)
        } catch (error) {
          Notification.toast(error)
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
