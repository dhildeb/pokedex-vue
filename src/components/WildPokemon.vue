<template>
  <router-link :to="{name: 'About', params: {name: pokemon.name}}">
    <div>
      {{ pokemon.name }}
    </div>
  </router-link>
</template>
<script>
export default {
  props: {
    pokemon: { type: Object, required: true }
  },
  setup() {
    return {

    }
  }
}
</script>

<style>

</style>
