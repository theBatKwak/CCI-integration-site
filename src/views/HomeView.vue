<template>
  <main>
    <VideoComponent />
    <WelcomeComponent />
    <DoubleColumnsContent
      title="Titre du premier composant"
      image="../assets/restaurant1.jpg"
      linkURL="/restaurant"
      linkText="Le restaurant"
    >
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsum,
        repudiandae repellat delectus optio ex.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsum,
        repudiandae repellat delectus optio ex.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsum,
        repudiandae repellat delectus optio ex.
      </p>
    </DoubleColumnsContent>
    <DoubleColumnsContent
      title="Titre du premier composant"
      image="../assets/restaurant3.jpg"
      :reversed="true"
      linkURL="/hotel"
      linkText="L'hôtel"
    >
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsum,
        repudiandae repellat delectus optio ex.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsum,
        repudiandae repellat delectus optio ex.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsum,
        repudiandae repellat delectus optio ex.
      </p>
    </DoubleColumnsContent>
    <DoubleColumnsContent
      title="Titre du 2e composant"
      image="../assets/restaurant2.jpg"
      linkURL="/restaurant"
      linkText="Le menu"
    >
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsum,
        repudiandae repellat delectus optio ex.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsum,
        repudiandae repellat delectus optio ex.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsum,
        repudiandae repellat delectus optio ex.
      </p>
    </DoubleColumnsContent>
    <section class="services">
      <ServiceComponent
        icon="../assets/bowl.png"
        title="Service 1"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi quisquam aperiam sed quo!"
      />
      <ServiceComponent
        icon="../assets/bed.png"
        title="Service 2"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi quisquam aperiam sed quo!"
      />
      <ServiceComponent
        icon="../assets/yinyang.png"
        title="Service 3"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi quisquam aperiam sed quo!"
      />
    </section>
  </main>
</template>

<script>
  import VideoComponent from "../components/VideoComponent.vue"
  import WelcomeComponent from "../components/WelcomeComponent.vue"
  import DoubleColumnsContent from "../components/DoubleColumnsContent.vue"
  import ServiceComponent from "../components/ServiceComponent.vue"
  /**
   * Créer un component ServiceComponent.vue
   * Props: - icon: lien vers une icône
   *        - title: titre
   *        - content: contenu
   * En afficher 3 côte à côte sur la HomeView comme sur
   * la maquette
   */
  export default {
    components: {
      DoubleColumnsContent,
      VideoComponent,
      WelcomeComponent,
      ServiceComponent,
    },
  }
</script>

<style scoped>
  .services {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background: #faf4ef;
    margin: 4rem auto;
  }
</style>
