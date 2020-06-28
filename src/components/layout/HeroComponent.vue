<template>
  <section class="hero has-image is-large">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Large title
        </h1>
        <h2 class="subtitle">
          Large subtitle
        </h2>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class HeroComponent extends Vue {}
</script>

<style lang="scss" scoped>
.hero {
  &.has-image {
    background-image: url('/images/common/header-image.jpg');
    background-size: cover;
    background-repeat: no-repeat;
  }
}
</style>
