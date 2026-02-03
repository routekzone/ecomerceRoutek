<script setup>
import { useCartStore } from '~/store/cartStore';
import { useFavoritesStore } from '~/store/favoriteStore';
definePageMeta({ layout: 'store-layout' })

const favoritesStore = useFavoritesStore()
const cartStore = useCartStore()
const toast = useToast()

const likedProducts = computed(() => favoritesStore.items)

const removeItem = (id) => {
  favoritesStore.removeFromFavorites(id)
}

const addToCart = (product) => {
  cartStore.addToCart(product)
  toast.add({
    title: 'Hardware listo',
    description: `${product.name} se movió a tu bolsa.`,
    icon: 'i-heroicons-shopping-bag-solid',
    color: 'success',
  })
}
</script>

<template>
  <div
    class="min-h-screen dark:bg-[#050505] light:bg-zinc-50 text-white light:text-zinc-900 p-4 pb-32 transition-colors duration-500">

    <header class="mb-8 px-2 flex justify-between items-center">
      <div>
        <h1 class="text-3xl font-black tracking-widest uppercase text-white light:text-zinc-900">Mis Likes</h1>
        <p class="text-sky-700 text-[10px] font-black uppercase tracking-[0.2em]">Tu Hardware Favorito</p>
      </div>
      <div class="relative">
        <UIcon name="i-heroicons-heart-solid" class="w-8 h-8 text-rose-500 blur-[2px] absolute inset-0 opacity-50" />
        <UIcon name="i-heroicons-heart-solid" class="w-8 h-8 text-rose-500 relative z-10" />
      </div>
    </header>

    <TransitionGroup v-if="likedProducts.length > 0" name="list" tag="div" class="space-y-4">
      <div v-for="product in likedProducts" :key="product.id"
        class="group relative bg-zinc-900/30 dark:bg-zinc-900/30 light:bg-gray-100 border border-zinc-800/50 dark:border-zinc-800/50 light:border-zinc-100 rounded-[1rem] py-4 px-2 flex gap-8 items-center backdrop-blur-md overflow-hidden transition-all active:scale-[0.98] shadow-sm">
        <div class="absolute -left-10 -top-10 w-32 h-32 bg-indigo-400/30 blur-3xl">
        </div>

        <NuxtLink :to="`/products/${product.id}`" class=" w-1/3 relative shrink-0">
          <div
            class="w-34 h-34 bg-zinc-800/50 dark:bg-zinc-800/50 light:bg-zinc-100 rounded-2xl border border-zinc-700/50 dark:border-zinc-700/50 light:border-zinc-200 flex items-center justify-center relative z-10 shadow-inner transition-colors">
            <div class="w-16 h-16 bg-zinc-600/10 rounded-full blur-xl absolute"></div>
            <img v-if="product.image" :src="product.image" class="w-16 h-16 object-contain z-10" />
            <UIcon v-else name="i-heroicons-cube" class="w-10 h-10 text-zinc-600 light:text-zinc-300" />
          </div>
        </NuxtLink>

        <div class="flex-1 z-10">
          <div class="flex justify-between items-start">
            <span
              class="text-[9px] bg-green-500/10 text-teal-400 px-2 py-0.5 rounded-full font-black uppercase tracking-widest mb-1 border border-green-500/20">
              {{ product.tag || 'Rok' }}
            </span>
            <button @click="removeItem(product.id)"
              class="text-red-400 px-1.5 rounded-full pt-1 border border-rose-400  hover:scale-105 transition-all duration-500 ">
              <UIcon name="i-heroicons-x-mark" class="w-5 h-5" />
            </button>
          </div>

          <NuxtLink :to="`/products/${product.id}`" class="block group/text">
            <h3
              class="font-bold text-[15px] tracking-tight mb-1 group-hover/text:text-rose-400 transition-colors text-white light:text-zinc-900">
              {{ product.name }}</h3>
            <p class="text-md font-black text-white light:text-indigo-500 transition-colors">S/ {{
              product.price.toFixed(2) }}</p>
          </NuxtLink>

          <div class="flex mt-3 gap-2">
            <button @click="addToCart(product)"
              class="flex-1 bg-white dark:bg-white light:bg-zinc-900 text-black dark:text-black light:text-white text-[10px] font-black uppercase py-2.5 rounded-xl hover:bg-[#00e676] dark:hover:bg-[#00e676] light:hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 shadow-sm">
              <UIcon name="i-heroicons-shopping-cart" class="w-4 h-4 mb-0.5" />
              Add to Car
            </button>
          </div>
        </div>
      </div>
    </TransitionGroup>

    <div v-else class="flex flex-col items-center justify-center py-20 text-center px-10 transition-all">
      <div
        class="w-20 h-20 bg-zinc-900 dark:bg-zinc-900 light:bg-white rounded-full flex items-center justify-center border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 mb-6 shadow-2xl">
        <UIcon name="i-heroicons-heart" class="w-10 h-10 text-zinc-700 light:text-zinc-200" />
      </div>
      <h2 class="text-xl font-bold mb-2 tracking-tight text-white light:text-zinc-900">Tu lista está vacía</h2>
      <p class="text-zinc-500 text-sm mb-32">Parece que aún no has encontrado tu match tecnológico.</p>
      <NuxtLink to="/"
        class="bg-zinc-100 dark:bg-zinc-100 light:bg-zinc-900 text-black dark:text-black active:bg-gray-800 light:text-white px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest cursor-pointer hover:bg-yellow-400 light:hover:bg-gray-900 transform transition-all duration-500 hover:scale-105 shadow-lg">
        Ir a la tienda
      </NuxtLink>
    </div>

  </div>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-move {
  transition: transform 0.5s ease;
}
</style>