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

const handleToggleLike = () => {
  if (product.value) {
    favoriteStore.toggleFavorite(product.value)
  }
}

const handleAddToCart = () => {
  if (product.value) {
    cartStore.addToCart(product.value)
    toast.add({
      title: '¡Añadido con éxito!',
      description: `${product.value.name} ya está en tu carrito.`,
      icon: 'i-heroicons-shopping-bag-solid',
      color: 'success', 
      timeout: 1000,
    })
  }
}
</script>

<template>
  <div v-if="product" class="min-h-screen dark:bg-[#050505] light:bg-zinc-50 text-white light:text-zinc-900 p-6 transition-colors duration-500">
    
    <header class="flex justify-between items-center mb-10">
      <UButton icon="i-heroicons-chevron-left" variant="ghost" color="neutral" @click="$router.back()" class="light:text-zinc-900" />
      <span class="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Detalle</span>
      <UButton icon="i-heroicons-ellipsis-horizontal" variant="ghost" color="neutral" class="light:text-zinc-900" />
    </header>

    <div class="space-y-2">
      <span class="bg-amber-400 text-black text-[8px] font-black px-3 py-1 rounded-full uppercase italic shadow-sm">New</span>
      <div class="flex justify-between items-start">
        <h1 class="text-3xl font-black uppercase italic leading-none tracking-tighter w-2/3 text-white light:text-zinc-900">
          {{ product.name }}
        </h1>
        <span class="text-xl font-black text-white light:text-zinc-900">S/ {{ product.price }}</span>
      </div>
    </div>

    <div class="mt-8 aspect-square flex items-center justify-center relative">
      <div class="absolute inset-0 bg-gradient-to-b from-violet-600/10 dark:from-violet-600/10 light:from-violet-600/20 to-transparent rounded-full blur-3xl"></div>
      
      <UIcon name="i-heroicons-cube" class="w-40 h-40 text-zinc-800 light:text-zinc-300 relative z-10 transition-colors" />
    </div>

    <div class="fixed bottom-10 left-6 right-6 flex gap-4">
      <UButton 
        label="Add to cart" 
        block 
        size="xl"
        class="flex-1 rounded-2xl font-black uppercase italic bg-white dark:bg-white light:bg-zinc-900 text-black dark:text-black light:text-white transition-all shadow-lg hover:scale-105 active:scale-95" 
        @click="handleAddToCart" 
      />

      <UButton 
        :icon="isLiked ? 'i-heroicons-heart-solid' : 'i-heroicons-heart'" 
        size="xl" 
        variant="soft"
        class="rounded-2xl transition-all duration-300 hover:text-rose-500 active:scale-90" 
        :class="isLiked
          ? 'bg-rose-500/20 text-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.4)]'
          : 'bg-zinc-800 dark:bg-zinc-800 light:bg-white text-zinc-400 light:border light:border-zinc-200 light:shadow-sm'" 
        @click="handleToggleLike" 
      />
    </div>
  </div>
</template>