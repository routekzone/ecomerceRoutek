import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    // Lista de productos favoritos
    items: []
  }),

  getters: {
    // Comprueba si un producto específico ya está en favoritos
    isFavorite: (state) => (productId) => {
      return state.items.some(item => item.id === productId)
    },
    // Cuenta cuántos favoritos hay
    totalFavorites: (state) => state.items.length
  },

  actions: {
    // Alternar favorito (si existe lo quita, si no lo agrega)
    toggleFavorite(product) {
      const index = this.items.findIndex(item => item.id === product.id)
      
      if (index > -1) {
        this.items.splice(index, 1)
      } else {
        // Agregamos el producto con una etiqueta por defecto si no tiene
        this.items.push({
          ...product,
          tag: product.tag || 'Favorito'
        })
      }
    },

    // Eliminar directamente (usado en la vista de lista)
    removeFromFavorites(productId) {
      this.items = this.items.filter(item => item.id !== productId)
    }
  },
  // Opcional: Persistencia para que no se borren al recargar
  persist: true 
})