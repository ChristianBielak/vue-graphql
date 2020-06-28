<template>
  <div class="home">
    <section class="section">
      <div class="container">
        <div class="columns  is-vcentered">
          <div class="column">
            <h2 class="title">
              Lorem, ipsum dolor.
            </h2>
            <p class="has-margin-bottom-25">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              at. Incidunt delectus temporibus pariatur repudiandae excepturi
              quo, magnam, neque magni cum fuga animi voluptates mollitia itaque
              nihil rerum ab consequatur aperiam vitae veritatis natus, voluptas
              aliquam sint sit! Dicta corrupti provident deleniti iste
              doloremque in id maiores quis omnis cum?
            </p>
            <router-link :to="{ name: 'Lottery' }" class="button is-primary"
              >Zu den Ziehungen</router-link
            >
          </div>
          <div class="column">
            <img src="/images/common/dummy-image.jpg" alt="Some alt Text" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      type: 'eurojackpot'
    }
  },
  components: {}
}
</script>
