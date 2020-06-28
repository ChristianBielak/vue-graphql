<template>
  <div id="app">
    <NavBarComponent />
    <div class="columns">
      <div class="column is-12 has-text-centered">
        <img alt="Vue logo" src="./assets/logo.png" />
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import NavBarComponent from '@/components/layout/NavBarComponent.vue'

@Component({
  components: {
    NavBarComponent
  }
})
export default class App extends Vue {}
</script>

<style lang="scss"></style>
