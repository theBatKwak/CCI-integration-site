<template>
  <section>
    <img :src="imageUrl" :alt="title" />
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>
  </section>
</template>

<script>
  export default {
    props: {
      icon: String,
      title: String,
      content: String,
    },
    computed: {
      imageUrl: function () {
        // Crée un chemin absolu vers l'image
        return new URL(this.icon, import.meta.url).href
      },
    },
  }
</script>

<style scoped>
  section {
    padding: 1rem;
    text-align: center;
  }
  img {
    height: 3rem;
  }
  h3 {
    margin: 1rem auto;
  }
</style>
