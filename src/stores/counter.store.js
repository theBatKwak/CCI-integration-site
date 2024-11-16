const useCounterStore = defineStore("counter", {
  // Données stockées dans le store :
  // Equivalent de 'data' dans un composant
  state: () => ({
    count: 1,
  }),
  // Fonctions qui modifient le state
  // Equivalent de 'methods' dans un composant
  actions: {
    increment: function () {
      // On accède au state avec "this"
      this.count++
    },
  },
  // Lire des données dans le store et éventuellement les
  // transformer
  // Equivalent de 'computed' dans un composant
  getters: {
    doubleCount: function () {
      // Renvoie le "count" du state multiplié par 2
      return this.count * 2
    },
  },
})
