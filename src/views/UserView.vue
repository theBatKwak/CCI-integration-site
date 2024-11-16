<template>
  <section>
    <div>
      <h1>Page utilisateur</h1>
      <p>Adresse email: {{ email }}</p>
      <p>Nom: {{ lastName }}</p>
      <p>Prénom: {{ firstName }}</p>
      <p>Pseudo: {{ username }}</p>
      <button @click="logout">Se déconnecter</button>
    </div>
  </section>
</template>

<script>
  import { mapState } from "pinia"
  import { useUserStore } from "../stores/user.store"
  export default {
    computed: {
      // mapState nous mettra en computed les valeurs
      // du state qui sont données en paramètre ('username', 'firstName'...)
      ...mapState(useUserStore, ["username", "firstName", "lastName", "email"]),
    },
    methods: {
      logout: function () {
        const userStore = useUserStore()
        userStore.removeUserData()
        this.$router.push("/")
      },
    },
  }
</script>

<style scoped>
  section {
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 4rem 0;
  }
  div {
    border: 1px solid var(--primary);
    padding: 1rem;
  }
  button {
    border: 1px solid var(--primary);
    background: var(--primary);
    color: white;
    padding: 0.5rem 2rem;
  }
</style>
