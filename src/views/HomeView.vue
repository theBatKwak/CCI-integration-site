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
  </main>
</template>

<script>
  import VideoComponent from "../components/VideoComponent.vue"
  import WelcomeComponent from "../components/WelcomeComponent.vue"
  import DoubleColumnsContent from "../components/DoubleColumnsContent.vue"
  export default {
    components: { DoubleColumnsContent, VideoComponent, WelcomeComponent },
  }
</script>
