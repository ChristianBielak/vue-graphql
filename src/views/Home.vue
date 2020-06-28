<template>
  <div class="home">
    <input type="text" v-model="type" />
    <ApolloQuery :query="require('@/graphql/draw.gql')">
      <template v-slot="{ result: { error, data } }">
        <h2 v-if="error">
          {{ error }}
        </h2>
        <div v-if="data && data.draw">
          <h2 v-for="draw in data.draw.draws" :key="draw.date">
            {{ draw.date }} - {{ draw.jackpot }}
          </h2>
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
export default {
  type: 'eurojackpot',
  name: 'Home',
  data() {
    return {
      type: 'eurojackpot'
    }
  },
  components: {}
}
</script>
