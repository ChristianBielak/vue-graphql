<template>
  <div class="drawn-numbers">
    <NumberComponent
      :draw-number="num"
      v-for="num in numbers"
      :key="`draw-${num}`"
    />
    <NumberComponent
      v-for="num in additionalNumbers"
      :draw-number="num"
      :is-additional="true"
      :key="`draw-additionalNumber-${num}`"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import NumberComponent from '@/components/numbers/NumberComponent.vue'

@Component({
  components: {
    NumberComponent
  }
})
export default class DrawnNumbers extends Vue {
  @Prop(Array)
  numbers!: Array<string>
  @Prop(Array)
  additionalNumbers!: Array<string>
}
</script>

<style lang="scss" scoped></style>
