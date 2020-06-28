import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'

export const apolloProvider: any = new VueApollo({
  defaultClient: new ApolloClient({
    uri: 'http://www.lottohelden.de/graphql/'
  })
})
