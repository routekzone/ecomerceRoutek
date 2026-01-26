<script setup>
import { useCartStore } from '~/store/cartStore';
import { useFavoritesStore } from '~/store/favoriteStore';
import { useProductStore } from '~/store/productStore';

const toast = useToast()
const productStore = useProductStore()
const cartStore = useCartStore()
const favoriteStore = useFavoritesStore()
const route = useRoute()

const product = computed(() => productStore.getById(route.params.id))
const isLiked = computed(() => product.value ? favoriteStore.isFavorite(product.value.id) : false)

// Logica para agregar articulos de la misma categoria menos el que ya tenemos 
const relatedProducts = computed(() => {
  if (!product.value) return []
  return productStore.allProducts.filter(p =>
    p.category === product.value.category && p.id !== product.value.id
  )
})

// REFERENCIA A TU IMAGEN LOCAL
// Como está en public/images/fono.png, la ruta es /images/fono.png
const testImage = "/images/fono.png"

// LOGICA PARA DECIR QUE TE GUSTA
const handleToggleLike = () => {
  if (product.value) {
    favoriteStore.toggleFavorite(product.value)
  }
}

// logica para agregar a Carrito 
const handleAddToCart = () => {
  if (product.value) {
    cartStore.addToCart(product.value)
    toast.add({
      title: '¡Añadido!',
      description: `${product.value.name} en el carrito.`,
      icon: 'i-heroicons-shopping-bag-solid',
      color: 'success',
      timeout: 1000,
    })
  }
}
</script>


<template>
  <div v-if="product"
    class="relative min-h-screen bg-[#f4f4f5] overflow-hidden font-sans transition-colors duration-500">

    <div class="absolute inset-0 z-0 flex items-center justify-center">
      <div
        class="w-[150%] h-[60%] bg-gradient-to-r from-transparent via-zinc-300/40 to-transparent blur-[120px] rotate-12">
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-white via-transparent to-zinc-200/50"></div>
    </div>

    <header class="relative z-30 flex justify-between items-center p-6">
      <UButton icon="i-heroicons-chevron-left" variant="none" label="back"
        class="rounded-full bg-white text-slate-500 shadow-md border transition-all duration-300 border-zinc-100 hover:scale-105" @click="$router.push('/products')" />
      
      <!-- Cateogira -->
      <aside class="bg-black/70 mt-1 px-6 py-1 rounded-full shadow-lg">
        <span class="text-white text-[11px] font-black uppercase tracking-[0.2em]">
          {{ product.category }}
        </span>
      </aside>
    </header>

    <div class="relative z-10 h-[55vh] flex items-center justify-center p-6">
      <div class="absolute bottom-10 w-60 h-6 bg-zinc-400/20 blur-2xl rounded-[100%]"></div>
      <img :src="testImage" class="max-w-[110%] max-h-full object-contain drop-shadow-2xl scale-110" alt="Product" />
    </div>

    <div class="absolute right-6 top-[35%] z-30 flex flex-col gap-4">
      <UButton variant="none" :icon="isLiked ?  'i-heroicons-heart-solid' : 'i-heroicons-heart'"  size="xl" :class="[
        'rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-105',
        isLiked ? 'bg-rose-500 text-white' : 'bg-white text-zinc-400 border-zinc-100'
      ]" @click="handleToggleLike" /> 
      <UButton icon="i-heroicons-phone" variant="none"
        class="rounded-full p-4 bg-white/60 text-slate-400 border border-zinc-100 shadow-sm transition-all duration-300 hover:scale-105" />
    </div>

    <div class="absolute bottom-0 left-0 right-0 px-2 z-30 flex flex-col gap-4 ">
      
      <div class="w-full">
        <h1 class="text-zinc-700 text-[21px] text-center font-bold uppercase tracking-wide">
          {{ product.name }}
        </h1>
      </div>

      <div class="flex items-center justify-between w-full px-6">
        <div class="flex flex-col">
          <span class="text-[#1775a3] text-[11px] uppercase font-black tracking-widest leading-none">Precio Final</span>
          <p class="text-gray-600 font-semibold text-[22px]">
            S/ {{ product.price}}
          </p>
        </div>

        <button @click="handleAddToCart"
          class="bg-[#a3dd25] hover:bg-[#a5e61d] text-zinc-700 px-10 py-4 cursor-pointer rounded-[2.5rem] flex items-center gap-3 transition-all active:scale-95 shadow-xl shadow-[#b5fb22]/30">
          <UIcon name="i-heroicons-shopping-cart-solid" class="w-5 h-5" />
          <span class="text-zinc-700 uppercase font-black text-sm tracking-tight">Comprar</span>
        </button>
      </div>

      <div class="flex items-center gap-3 overflow-x-auto pb-5 no-scrollbar">
        <div class="relative flex-shrink-0">
          <div class="w-16 h-16 rounded-full border-2 border-[#b8ea4b] p-1 bg-white shadow-xl">
            <img :src="testImage" class="w-full h-full object-contain rounded-full" />
          </div>
        </div>

        <NuxtLink v-for="item in relatedProducts" :key="item.id" :to="`/products/${item.id}`" class="flex-shrink-0">
          <div
            class="w-14 h-14 rounded-full border border-zinc-200 p-1 bg-white/50 hover:border-zinc-400 transition-colors">
            <img :src="item.image" class="w-full h-full object-contain rounded-full opacity-70" />
          </div>
        </NuxtLink>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* Ocultar barra de desplazamiento para el carrusel de círculos */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>