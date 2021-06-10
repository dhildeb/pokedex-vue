<template>
  <div v-if="activePokemon.sprites">
    <img :src="activePokemon.sprites.front_default" alt="">
  </div>
  <div>name: {{ activePokemon.name }}</div>
  <div>height: {{ activePokemon.height }}</div>
  <div>weight: {{ activePokemon.weight }}</div>
  <div>exp: {{ activePokemon.base_experience }}</div>
  <div># {{ activePokemon.id }}</div>
  <div>{{ activePokemon.name }}</div>
  <button @click="catchPokemon" class="btn btn-success" v-if="!caughtPokemon">
    Catch
  </button>
  <button @click="releasePokemon" class="btn btn-danger" v-if="caughtPokemon">
    Release
  </button>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  setup() {
    return {
      activePokemon: computed(() => AppState.activePokemon),
      myPokemon: computed(() => AppState.myPokemon),
      caughtPokemon: computed(() => AppState.myPokemon.find(p => p.id === AppState.activePokemon.id)),
      catchPokemon() {
        AppState.myPokemon = [AppState.activePokemon, ...AppState.myPokemon]
      },
      releasePokemon() {
        AppState.activePokemon.caught = false
        AppState.myPokemon = AppState.myPokemon.filter(p => p.name !== AppState.activePokemon.name)
      }
    }
  }
}
</script>

<style>

</style>
