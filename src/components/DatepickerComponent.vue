<template>
  <div class="datepicker-component">
    <b-collapse
      aria-id="datePicker"
      class="panel"
      animation="slide"
      :open.sync="isOpen"
    >
      <div
        slot="trigger"
        class="panel-heading"
        role="button"
        aria-controls="datePicker"
      >
        <strong>Andere Ziehung wählen</strong>
      </div>
      <div class="panel-block">
        <b-datepicker
          v-model="drawDate"
          inline
          :unselectable-days-of-week="unselectableDays"
        >
        </b-datepicker>
      </div>
    </b-collapse>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit, Watch } from 'vue-property-decorator'
//@ts-ignore
import { BDatepicker } from 'buefy/src/components/datepicker'
//@ts-ignore
import { BCollapse } from 'buefy/src/components/collapse'
import moment from 'moment'
@Component({
  components: {
    BDatepicker,
    BCollapse
  }
})
export default class DatepickerComponent extends Vue {
  drawDate: Date = new Date()
  unselectableDays: Array<number> = [0, 1, 2, 3, 4, 6]
  isOpen = false

  created() {
    this.drawDate = this.setRecentFriday()
  }

  setRecentFriday(): any {
    //@ts-ignore
    return moment().day(moment().day() >= 5 ? 5 : -2)['_d']
  }

  @Watch('drawDate')
  onDrawDateChanged(val: any) {
    this.$emit('dateFormatted', moment(val).format('MMM DD YYYY'))
  }
}
</script>

<style lang="scss">
.dropdown-menu {
  width: 100%;
}
</style>
