<template>
  <!--Si la prop reversed est à vrai, la section aura la classe "reversed"-->
  <section :class="{ reversed: reversed }">
    <div class="content">
      <h2>{{ title }}</h2>
      <slot />
      <router-link :to="linkURL">{{ linkText }}</router-link>
    </div>
    <div class="image">
      <img :src="imageUrl" alt="" />
    </div>
  </section>
</template>

<script>
  export default {
    /**
     * Créer 2 props supplémentaires:
     *  - linkURL : ce sera la valeur de 'to' dans le
     *              router link (ex: /hotel)
     *  - LinkText : ce sera entre les deux balises du
     *               router link (ex: Réserver)
     * Pas oublier : quand vous créez une props il faut
     * lui donner une valeur dans le composant parent
     */
    props: {
      title: String,
      image: String,
      reversed: Boolean,
      linkURL: String,
      linkText: String,
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
    grid-template-columns: 45% 55%;
    margin: 4rem 0;
  }

  section.reversed {
    grid-template-columns: 55% 45%;
    background: var(--primary);
    color: white;
  }

  section.reversed .image {
    order: 1;
  }

  section.reversed .content {
    order: 2;
  }

  section .content a {
    display: block;
    border: 1px solid var(--primary);
    width: fit-content;
    padding: 0.5rem 2rem;
    background: var(--primary);
    color: white;
    margin: 2rem 0;
    transition: all 0.5s;
  }

  section .content a:hover {
    background: white;
    border: 1px solid var(--primary);
    color: var(--primary);
  }
  section.reversed .content a {
    background: white;
    color: var(--primary);
  }
  section.reversed .content a:hover {
    background: var(--primary);
    border: 1px solid white;
    color: white;
  }
  .image {
    display: flex;
  }
  .image img {
    width: 100%;
    /* Force un ratio d'image */
    /* Attention, ça déforme l'image */
    aspect-ratio: 4/3;
    /* Replace l'image au centre sans la déformer */
    object-fit: cover;
  }
  .content {
    padding: 2rem;
  }
  .content h2 {
    font-size: 2rem;
    margin: 1rem 0;
  }

  @media screen and (max-width: 1200px) {
    section,
    section.reversed {
      grid-template-columns: 100%;
    }
    section.reversed .image {
      order: 2;
    }
    section.reversed .content {
      order: 1;
    }
  }
</style>

<style>
  .content p {
    margin: 1rem 0;
  }
</style>
