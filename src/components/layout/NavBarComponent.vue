<template>
  <b-navbar :fixed-top="true">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ name: 'Home' }">
        <span>
          Easy Lottery
        </span>
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item tag="router-link" :to="{ name: 'Home' }">
        Home
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ name: 'Lottery' }">
        Draws
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
//@ts-ignore
import { BNavbar, BNavbarItem } from 'buefy/dist/components/navbar'

@Component({
  components: {
    BNavbar,
    BNavbarItem
  }
})
export default class NavBarComponent extends Vue {}
</script>

<style lang="scss" scoped></style>
