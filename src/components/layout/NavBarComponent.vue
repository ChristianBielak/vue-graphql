<template>
  <b-navbar fixed-top="true">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <span>
          Easy Lottery
        </span>
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item href="#">
        Home
      </b-navbar-item>
      <b-navbar-item href="#">
        Documentation
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
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
