<template>
  <div id="app">
    <HeroComponent />
    <NavBarComponent />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import NavBarComponent from '@/components/layout/NavBarComponent.vue'
import HeroComponent from '@/components/layout/HeroComponent.vue'

@Component({
  components: {
    NavBarComponent,
    HeroComponent
  }
})
export default class App extends Vue {}
</script>

<style lang="scss" src="@/assets/scss/app.scss"></style>
