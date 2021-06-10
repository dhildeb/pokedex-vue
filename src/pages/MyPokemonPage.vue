<template>
  <div class="container">
    <div class="row my-5">
      <div class="col-5"></div>
      <div class="col-6">
        <WildPokemon v-for="pokemon in myPokemon" :key="pokemon.url" :pokemon="pokemon" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  name: 'MyPokemon',
  setup() {
    return {
      myPokemon: computed(() => AppState.myPokemon)
    }
  }
}
</script>

<style>

</style>
