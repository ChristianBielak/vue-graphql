<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="columns">
            <div class="column">
              <h2 class="title" v-if="drawDate">Ziehung vom {{ drawDate }}</h2>
            </div>
          </div>
          <div class="columns">
            <div class="column is-relative">
              <div v-if="$apollo.queries.draw.loading">
                <b-loading
                  :is-full-page="false"
                  :active.sync="$apollo.queries.draw.loading"
                  :can-cancel="true"
                ></b-loading>
              </div>
              <div v-else>
                <div v-if="singleDraw">
                  <DrawnNumbers
                    :numbers="singleDraw.numbers"
                    :additional-numbers="singleDraw.additionalNumbers"
                    class="has-margin-bottom-25"
                  />
                  <StatisticTable :odds="singleDraw.odds" />
                </div>
                <div v-else>
                  <h2>
                    Whoops, es wurde keine Ziehung gefunden!
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <DatepickerComponent @dateFormatted="setDate" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'
import Draw from '@/models/Draw.ts'
import Draws from '../models/Draws'
//@ts-ignore
import { BLoading } from 'buefy/src/components/loading'
import DrawnNumbers from '@/components/numbers/DrawnNumbers.vue'
import DatepickerComponent from '@/components/DatepickerComponent.vue'
import StatisticTable from '@/components/StatisticTable.vue'
@Component({
  components: {
    DatepickerComponent,
    DrawnNumbers,
    BLoading,
    StatisticTable
  },
  data() {
    return {
      drawDate: String
    }
  },
  apollo: {
    draw: {
      query: require('@/graphql/fetchDrawByTypeAndDate.gql'),
      variables() {
        return {
          type: 'eurojackpot',
          date: this.drawDate
        }
      }
    }
  }
})
export default class Lottery extends Vue {
  draw!: Draws
  drawDate!: string

  get singleDraw(): Draw {
    return Draw.getDraw(this.draw)
  }

  setDate(date: string) {
    this.drawDate = date
  }
}
</script>

<style lang="scss" scoped></style>
