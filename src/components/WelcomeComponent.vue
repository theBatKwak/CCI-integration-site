<template>
  <section>
    <div class="bienvenue">
      <hr />
      <p>Bienvenue</p>
      <hr />
    </div>
    <h1>La Ferme Hôtel*** Restaurant - Bien-Etre</h1>
    <p>
      C’est dans une bâtisse datant du 17ème siècle que La Ferme du bien-être
      demeure, à plus de 1000 mètres d’altitude au coeur du paysage capitolien
      vallonné.
    </p>
    <p>
      Hôtel***, restaurant et SPA, notre équipe vous acceuille du lundi au
      dimanche et toute l'année au coeur d'un lieu authentique et chaleureux.
    </p>
  </section>
</template>

<script>
  export default {}
</script>

<style scoped>
  section {
    max-width: 1000px;
    margin: 1rem auto;
    text-align: center;
  }
  .bienvenue {
    display: flex;
    text-transform: uppercase;
    align-items: center;
    justify-content: center;
    margin: 4rem auto;
  }
  .bienvenue hr {
    width: 6rem;
    height: 1px;
  }
  .bienvenue p {
    margin: 0 1rem;
  }
  h1 {
    font-size: 3rem;
    line-height: 1.3;
  }
  p {
    margin: 1rem auto;
  }
</style>
