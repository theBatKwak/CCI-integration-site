<template>
  <section>
    <h1>Login</h1>
    <!--Le formulaire appelle la méthode 'submit' quand il est validé-->
    <form @submit.prevent="submit">
      <div>
        <label for="login">Login</label>
        <input v-model="login" id="login" type="text" />
      </div>
      <div>
        <label for="password">Mot de passe</label>
        <input v-model="password" id="password" type="password" />
      </div>
      <p v-if="loginError">Identifiant ou mot de passe incorrect !</p>
      <button type="submit">Se connecter</button>
    </form>
  </section>
</template>

<script>
  import axios from "axios"
  import { useUserStore } from "../stores/user.store"
  export default {
    data() {
      return {
        login: "",
        password: "",
        loginError: false,
      }
    },
    methods: {
      submit: async function () {
        console.log("submit : ", this.login, this.password)
        // On essaie d'envoyer les données à l'API
        try {
          const loginData = await axios.post(
            "https://dummyjson.com/auth/login",
            {
              username: this.login,
              password: this.password,
            }
          )
          // On instancie notre store User
          // (penser à l'importer en haut)
          const userStore = useUserStore()
          userStore.setUserData(loginData.data)
          // On redirige l'utilisateur sur la page User
          this.$router.push("/user")
          // Si la requête échoue, on tombe dans le 'catch'
        } catch (e) {
          // Vu que le login a raté, on affiche le texte d'erreur
          this.loginError = true
        }
      },
    },
  }
</script>

<style scoped>
  section {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  form {
    border: 1px solid var(--primary);
    padding: 1rem;
  }
  button {
    border: 1px solid var(--primary);
    background: var(--primary);
    color: white;
    padding: 0.5rem 2rem;
  }
  form input {
    border: 1px solid var(--primary);
    padding: 0.5rem;
    font-size: 1rem;
  }
  form div {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
  h1 {
    margin: 1rem 0;
  }
</style>
