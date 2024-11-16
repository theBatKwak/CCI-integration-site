<template>
  <header>
    <nav class="desktop-nav">
      <div>
        <router-link to="/">
          <img src="../assets/logo.png" alt="logo du site" class="logo" />
        </router-link>
      </div>
      <div class="main-links">
        <router-link to="/restaurant">Restaurant</router-link>
        <router-link to="/hotel">Hôtel</router-link>
        <router-link to="/bien-etre">Bien Être</router-link>
        <router-link to="/seminaires">Séminaires</router-link>
        <router-link to="/offrir">Offrir</router-link>
        <router-link v-if="!isLoggedIn" to="/login">Se connecter</router-link>
        <p v-else>Bonjour, {{ userName }}</p>
      </div>
      <div class="buttons-container">
        <button>
          <img src="../assets/globe.png" alt="logo globe" /> Langue
        </button>
        <button class="book">Réserver</button>
      </div>
    </nav>

    <!--MOBILE NAV-->
    <nav class="mobile-nav" :style="{ background: navBackground }">
      <div class="top-nav">
        <router-link to="/">
          <img
            src="../assets/logo.png"
            alt="logo du site"
            class="mobile-logo"
          />
        </router-link>
        <button
          v-if="!mobileNavIsOpen"
          @click="mobileNavIsOpen = true"
          class="hamb-button"
        >
          <img src="../assets/hamb.png" alt="" />
        </button>
        <button v-else @click="mobileNavIsOpen = false" class="hamb-button">
          <img src="../assets/x.png" alt="" />
        </button>
      </div>
      <Transition>
        <div
          v-if="mobileNavIsOpen"
          @click="mobileNavIsOpen = false"
          class="main-links"
        >
          <router-link to="/restaurant">Restaurant</router-link>
          <router-link to="/hotel">Hôtel</router-link>
          <router-link to="/bien-etre">Bien Être</router-link>
          <router-link to="/seminaires">Séminaires</router-link>
          <router-link to="/offrir">Offrir</router-link>
          <router-link to="/login">Se connecter</router-link>
          <div class="buttons-container">
            <button>
              <img src="../assets/globe.png" alt="logo globe" /> Langue
            </button>
            <button class="book">Réserver</button>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script>
  import { useUserStore } from "../stores/user.store"
  export default {
    data() {
      return {
        mobileNavIsOpen: false,
      }
    },
    computed: {
      isLoggedIn: function () {
        return useUserStore().isLoggedIn
      },
      userName: function () {
        return useUserStore().firstName
      },
    },
  }
</script>

<style scoped>
  .mobile-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
  }
  .mobile-nav .main-links {
    flex-direction: column;
    align-items: center;
    background: white;
    height: 100vh;
  }

  .mobile-nav .main-links a {
    font-size: 1.5rem;
    margin: 0.5rem 0;
  }

  .mobile-nav .top-nav {
    padding: 0.5rem;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .hamb-button img {
    height: 3rem;
  }
  .mobile-logo {
    height: 4rem;
  }
  @media screen and (max-width: 360px) {
    .mobile-logo {
      height: 3rem;
    }
  }

  .desktop-nav {
    display: none;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--primary);
  }
  @media screen and (min-width: 1200px) {
    .desktop-nav {
      display: flex;
    }
    .mobile-nav {
      display: none;
    }
  }
  .logo {
    height: 4rem;
  }
  .main-links {
    text-transform: uppercase;
    display: flex;
    gap: 1rem;
  }
  button {
    font-size: 1rem;
    background: transparent;
    border: none;
    padding: 0.75rem 1rem;
    display: flex;
    align-items: center;
  }

  button img {
    height: 1.5rem;
  }

  .book {
    border: 1px solid var(--primary);
    border-radius: 0.25rem;
  }
  .buttons-container {
    display: flex;
    align-items: center;
  }
  .v-enter-active,
  .v-leave-active {
    transition: all 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    background: transparent;
    opacity: 0;
  }
</style>
