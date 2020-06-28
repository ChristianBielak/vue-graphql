<template>
  <span
    :class="{ 'is-additional': isAdditional }"
    class="number-component icon"
  >
    {{ drawNumber }}
  </span>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class extends Vue {
  @Prop(String)
  drawNumber!: string
  @Prop(Boolean)
  isAdditional!: boolean
}
</script>

<style lang="scss" scoped>
.number-component {
  border: 1px solid;
  border-radius: 50%;
  font-weight: 600;
  width: 1.75rem;
  height: 1.75rem;
  margin-right: 0.5rem;

  &.is-additional {
    background-color: rgba(blue, 0.2);
  }

  &:last-of-type {
    margin-right: 0;
  }
}
</style>
