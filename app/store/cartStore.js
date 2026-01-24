import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] // Empezamos vacío para que el usuario agregue lo que quiera
  }),
  getters: {
    subtotal: (state) => state.items.reduce((acc, item) => acc + (item.price * item.qty), 0),
    totalItems: (state) => state.items.reduce((acc, item) => acc + item.qty, 0),
    shipping: () => 15.00
  },
  actions: {
    addToCart(product) {
      const existingItem = this.items.find(i => i.id === product.id)
      if (existingItem) {
        existingItem.qty++
      } else {
        // Añadimos el producto con cantidad inicial 1
        this.items.push({ ...product, qty: 1 })
      }
    },
    removeFromCart(id) {
      this.items = this.items.filter(i => i.id !== id)
    },
    updateQty(id, delta) {
      const item = this.items.find(i => i.id === id)
      if (item) {
        item.qty += delta
        if (item.qty <= 0) this.removeFromCart(id)
      }
    }
  }
})