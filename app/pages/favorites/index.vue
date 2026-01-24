<script setup>
definePageMeta({ layout: 'store-layout' })

// Ejemplo de productos que el usuario marcó con "Like"
const likedProducts = ref([
  { id: 1, name: 'Rok Buds Pro', price: 299.00, image: '/buds.png', tag: 'Novedad' },
  { id: 2, name: 'Routek Mechanical K2', price: 450.00, image: '/keyboard.png', tag: 'Best Seller' },
  { id: 3, name: 'Rok Mousepad XL Black', price: 85.00, image: '/pad.png', tag: 'Limited' },
])

const removeItem = (id) => {
  likedProducts.value = likedProducts.value.filter(p => p.id !== id)
}
</script>

<template>
  <div class="min-h-screen bg-[#050505] text-white p-4 pb-32">
    
    <header class="mb-8 px-2 flex justify-between items-center">
      <div>
        <h1 class="text-3xl font-black tracking-tighter uppercase italic">Mis Likes</h1>
        <p class="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em]">Tu Hardware Favorito</p>
      </div>
      <div class="relative">
        <UIcon name="i-heroicons-heart-solid" class="w-8 h-8 text-rose-500 blur-[2px] absolute inset-0 opacity-50" />
        <UIcon name="i-heroicons-heart-solid" class="w-8 h-8 text-rose-500 relative z-10" />
      </div>
    </header>

    <div v-if="likedProducts.length > 0" class="space-y-4">
      <div 
        v-for="product in likedProducts" 
        :key="product.id"
        class="group relative bg-zinc-900/30 border border-zinc-800/50 rounded-[2.5rem] p-4 flex gap-5 items-center backdrop-blur-md overflow-hidden transition-all active:scale-[0.98]"
      >
        <div class="absolute -left-10 -top-10 w-32 h-32 bg-rose-500/5 blur-3xl group-hover:bg-rose-500/10 transition-colors"></div>

        <div class="w-24 h-24 bg-zinc-800/50 rounded-3xl border border-zinc-700/50 flex items-center justify-center relative z-10 shadow-inner">
          <div class="w-16 h-16 bg-zinc-600/10 rounded-full blur-xl absolute"></div>
          <span class="text-[8px] font-black text-zinc-700 uppercase absolute top-2">Rok Gear</span>
          <UIcon name="i-heroicons-cube" class="w-10 h-10 text-zinc-600" />
        </div>

        <div class="flex-1 z-10">
          <div class="flex justify-between items-start">
            <span class="text-[8px] bg-rose-500/10 text-rose-400 px-2 py-0.5 rounded-full font-black uppercase tracking-widest mb-1 border border-rose-500/20">
              {{ product.tag }}
            </span>
            <button @click="removeItem(product.id)" class="text-zinc-600 hover:text-rose-500 transition-colors">
              <UIcon name="i-heroicons-x-mark" class="w-5 h-5" />
            </button>
          </div>
          <h3 class="font-bold text-sm tracking-tight mb-1">{{ product.name }}</h3>
          <p class="text-lg font-black text-white italic">S/ {{ product.price.toFixed(2) }}</p>
          
          <div class="flex mt-3 gap-2">
            <button class="flex-1 bg-white text-black text-[10px] font-black uppercase py-2.5 rounded-xl hover:bg-[#00e676] transition-colors flex items-center justify-center gap-2">
              <UIcon name="i-heroicons-shopping-cart" class="w-3.5 h-3.5" />
              Añadir
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="flex flex-col items-center justify-center py-20 text-center px-10">
      <div class="w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800 mb-6 shadow-2xl">
        <UIcon name="i-heroicons-heart" class="w-10 h-10 text-zinc-700" />
      </div>
      <h2 class="text-xl font-bold mb-2 tracking-tight">Tu lista está vacía</h2>
      <p class="text-zinc-500 text-sm mb-8">Parece que aún no has encontrado tu match tecnológico.</p>
      <NuxtLink to="/shop" class="bg-zinc-100 text-black px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest">
        Ir a la tienda
      </NuxtLink>
    </div>

  </div>
</template>

<style scoped>
/* Animación suave para cuando desaparecen items */
.v-enter-active, .v-leave-active {
  transition: all 0.4s ease;
}
.v-enter-from, .v-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>