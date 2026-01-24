<script setup>

  import { useProductStore } from '~/store/productStore';
  definePageMeta({ layout: 'store-layout' })

  const productStore = useProductStore()
  const selectedCategory = ref('Monitores')

  const categories = [
    { name: 'Monitores', icon: 'i-heroicons-computer-desktop', id: 1 },
    { name: 'PCs', icon: 'i-heroicons-cpu-chip', id: 2 },
    { name: 'Laptops', icon: 'i-heroicons-device-tablet', id: 3 },
    { name: 'Mouses', icon: 'i-heroicons-cursor-arrow-rays', id: 4 },
    { name: 'Audífonos', icon: 'i-heroicons-speaker-wave', id: 5 },
    { name: 'Teclados', icon: 'i-heroicons-keyboard', id: 6 },
    { name: 'Mousepads', icon: 'i-heroicons-square-3-stack-3d', id: 7 },
  ]

  //Filtramos dinamicamente haciendo el Gueter 
  const filteredProducts = computed( () => {
    return productStore.getByCategory(selectedCategory.value)
  })

</script>

<template>
  <div class="min-h-screen bg-[#050505] text-white p-4 pb-32 overflow-x-hidden">

    <!-- SEECION DEL HEADER  -->
    <header class="mb-10 px-2 space-y-6">
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-black tracking-tighter uppercase italic text-white">Explorar</h1>
        <div class="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 overflow-hidden">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" />
        </div>
      </div>
      <div class="relative w-full">
        <span class="absolute inset-y-0 left-4 flex items-center text-zinc-500">
          <UIcon name="i-heroicons-magnifying-glass" class="w-5 h-5" />
        </span>
        <input type="text" placeholder="Buscar hardware de élite..."
          class="w-full bg-zinc-900 border border-zinc-800/50 text-sm pl-12 pr-4 py-4 rounded-2xl focus:outline-none focus:border-violet-500 transition-all placeholder:text-zinc-600">
      </div>
    </header>

    <!-- SEECION DEL FILTRO  -->
    <div class="relative mb-12 py-2 overflow-hidden">
      <div class="overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing">

        <div class="flex gap-4 px-2 w-max animate-infinite-scroll hover:pause">
          <div v-for="cat in [...categories, ...categories, ...categories]" :key="cat.id"
            class="flex-none flex flex-col items-center gap-2 group w-20">

            <div
              class="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center transition-all duration-300 group-hover:border-violet-500 group-hover:scale-105">
              <UIcon :name="cat.icon" class="w-7 h-7 text-zinc-500 group-hover:text-white transition-colors" />
            </div>

            <span
              class="text-[9px] font-black uppercase tracking-tighter text-zinc-500 group-hover:text-violet-400 text-center">
              {{ cat.name }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="px-2">
      <div class="flex justify-between items-end mb-6">
        <h2 class="text-lg font-black uppercase tracking-tighter italic">Populares</h2>
        <span class="text-[9px] text-zinc-600 font-black tracking-widest uppercase">8 Resultados</span>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div v-for="n in 4" :key="n"
          class="bg-zinc-900/40 border border-zinc-800/60 rounded-[2.5rem] p-4 aspect-square flex flex-col justify-between relative group overflow-hidden active:scale-95 transition-transform">
          <div
            class="absolute top-4 right-4 w-7 h-7 bg-[#00e676] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,230,118,0.3)] z-10">
            <UIcon name="i-heroicons-plus" class="text-black w-4 h-4 font-bold" />
          </div>
          <div class="flex-1 flex items-center justify-center relative">
            <div class="w-16 h-16 bg-violet-600/5 rounded-full blur-2xl absolute"></div>
            <span class="text-zinc-800 font-black text-[10px] uppercase tracking-widest">Rok Gear</span>
          </div>
          <div class="pt-2">
            <p class="text-[10px] font-black text-white uppercase truncate tracking-tighter">Producto Rok #{{ n }}</p>
            <p class="text-sm font-black text-violet-500 tracking-tight">S/ 180.00</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
/* Animación infinita fluida */
.animate-infinite-scroll {
  animation: scroll-x 25s linear infinite;
}

/* Detener en hover */
.hover\:pause:hover {
  animation-play-state: paused;
}

@keyframes scroll-x {
  0% {
    transform: translateX(0);
  }

  100% {
    /* Se mueve exactamente un tercio porque triplicamos la lista */
    transform: translateX(-33.33%);
  }
}

/* Ocultar scrollbars pero permitir scroll manual */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-x: auto;
}
</style>