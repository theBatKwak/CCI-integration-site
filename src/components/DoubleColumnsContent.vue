<template>
  <section>
    <div class="content">
      <h2>{{ title }}</h2>
      <slot />
    </div>
    <div class="image">
      <img :src="imageUrl" alt="" />
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      title: String,
      image: String,
    },
    computed: {
      imageUrl: function () {
        // Crée un chemin absolu vers l'image
        return new URL(this.image, import.meta.url).href
      },
    },
  }
</script>

<style scoped>
  section {
    display: grid;
    grid-template-columns: 40% 60%;
  }
  .image img {
    width: 100%;
    /* Force un ratio d'image */
    /* Attention, ça déforme l'image */
    aspect-ratio: 2/1;
    /* Replace l'image au centre sans la déformer */
    object-fit: cover;
  }
  .content {
    padding: 2rem;
  }
  .content p {
    margin: 1rem 0;
  }
</style>
