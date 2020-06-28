<template>
  <div>
    <b-table :data="odds" :columns="columns"></b-table>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
//@ts-ignore
import { BTable } from 'buefy/src/components/table'
import Odd from '@/models/Odd'
@Component({
  components: {
    BTable
  }
})
export default class StatisticTable extends Vue {
  @Prop(Array)
  odds!: Array<Odd>

  columns: Array<any> = [
    {
      field: 'winningClass',
      label: 'Gewinnklasse',
      width: '40',
      numeric: true
    },
    {
      field: 'numberOfWinners',
      label: 'Anzahl der Gewinner'
    },
    {
      field: 'odd',
      label: 'Gewinn'
    }
  ]
}
</script>

<style lang="scss" scoped></style>
