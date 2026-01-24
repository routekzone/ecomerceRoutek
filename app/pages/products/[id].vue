<script setup lang="ts">
  import { useCartStore } from '~/store/cartStore';
  import { useProductStore } from '~/store/productStore';
  const productStore = useProductStore()
  const cartStore = useCartStore()
  const route = useRoute()

  // Obtenemos el producto por ID desde el store
  const product = computed(() => productStore.getById(route.params.id))

  // Funcion Para Agregar el Producto al Carrito 
  const handleAddToCart = () => {
    if (product.value) {
      cartStore.addToCart(product.value)
    }
  }

</script>

<template>
  <div v-if="product" class="min-h-screen bg-[#050505] text-white p-6">
    <header class="flex justify-between items-center mb-10">
      <UButton icon="i-heroicons-chevron-left" variant="ghost" color="neutral" @click="$router.back()" />
      <span class="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Detalle</span>
      <UButton icon="i-heroicons-ellipsis-horizontal" variant="ghost" color="neutral" />
    </header>

    <div class="space-y-2">
      <span class="bg-amber-400 text-black text-[8px] font-black px-3 py-1 rounded-full uppercase italic">New</span>
      <div class="flex justify-between items-start">
        <h1 class="text-3xl font-black uppercase italic leading-none tracking-tighter w-2/3">
          {{ product.name }}
        </h1>
        <span class="text-xl font-black text-white">S/ {{ product.price }}</span>
      </div>
    </div>

    <div class="mt-8 aspect-square flex items-center justify-center relative">
       <div class="absolute inset-0 bg-gradient-to-b from-violet-600/10 to-transparent rounded-full blur-3xl"></div>
       <UIcon name="i-heroicons-cube" class="w-40 h-40 text-zinc-800 relative z-10" />
    </div>

    <div class="fixed bottom-10 left-6 right-6 flex gap-4">
      <!-- Boton para agregar al carrrito -->
      <UButton 
        label="Add to cart" 
        block size="xl" 
        class="flex-1 rounded-2xl font-black uppercase italic bg-white text-black" 
        @click="handleAddToCart"
      />
      <UButton icon="i-heroicons-heart" size="xl" color="neutral" variant="soft" class="rounded-2xl bg-zinc-800" />
    </div>
  </div>
</template>