<template>
  <div class="about container">
    <div class="row">
      <div class="col-5"></div>
      <div class="col-6">
        <ActivePokemon />
      </div>
    </div>
  </div>
</template>

<script>
import { watchEffect } from '@vue/runtime-core'
import Notification from '../utils/Notification'
import { pokemonsService } from '../services/PokemonsService'
import { useRoute } from 'vue-router'
export default {
  name: 'AboutPage',
  setup() {
    const route = useRoute()
    watchEffect(async() => {
      try {
        await pokemonsService.getPokemonByName(route.params.name)
      } catch (error) {
        Notification.toast(error)
      }
    })
    return {
    }
  }
}
</script>
