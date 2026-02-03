<script setup>
  import { useProductStore } from '~/store/productStore';
  definePageMeta({ layout: 'store-layout' })

  const productStore = useProductStore()
  const selectedCategory = ref('Monitores')

  const categories = [
    { name: 'iPhones', icon: 'i-heroicons-device-phone-mobile', id: 0 },
    { name: 'Monitores', icon: 'i-heroicons-computer-desktop', id: 1 },
    { name: 'PCs', icon: 'i-heroicons-cpu-chip', id: 2 },
    { name: 'Laptops', icon: 'i-heroicons-device-tablet', id: 3 },
    { name: 'Mouses', icon: 'i-heroicons-cursor-arrow-rays', id: 4 },
    { name: 'Audífonos', icon: 'i-heroicons-speaker-wave', id: 5 },
    { name: 'Teclados', icon: 'i-heroicons-command-line', id: 6 },
    { name: 'Mousepads', icon: 'i-heroicons-square-3-stack-3d', id: 7 },
  ]

  const filteredProducts = computed( () => {
    return productStore.getByCategory(selectedCategory.value)
  })
</script>

<template>
  <div class="min-h-screen dark:bg-[#050505] light:bg-zinc-50 text-white light:text-zinc-900 p-4 pb-32 overflow-x-hidden transition-colors duration-500">
    
    <header class="mb-4 px-2 space-y-4 ">
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-black tracking-tighter uppercase italic text-white light:text-zinc-900">Explorar</h1>
        <div class="w-10 h-10 rounded-full bg-zinc-800 dark:bg-zinc-800 light:bg-white border border-zinc-700 light:border-zinc-200 overflow-hidden shadow-sm">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" />
        </div>
      </div>
      <div class="relative w-full ">
        <span class="absolute inset-y-0 left-4 flex items-center text-zinc-500">
          <UIcon name="i-heroicons-magnifying-glass" class="w-5 h-5" />
        </span>
        <input type="text" placeholder="Buscar hardware de élite..."
          class="w-full bg-zinc-900 dark:bg-zinc-900 light:bg-white border border-zinc-800/50 dark:border-zinc-800/50 light:border-zinc-200 text-sm pl-12 pr-4 py-4 rounded-2xl focus:outline-none focus:border-[#90cb10] transition-all placeholder:text-zinc-600 shadow-sm text-white light:text-zinc-900">
      </div>
    </header>
    
    <div class="relative mb-6 overflow-hidden">
      <div class="overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing py-1">
        <div class="flex px-2 w-max animate-infinite-scroll hover:pause">
          <div v-for="(cat, index) in [...categories, ...categories, ...categories]" :key="`${cat.id}-${index}`"
            @click="selectedCategory = cat.name"
            class="flex-none flex flex-col items-center gap-2 group w-20 cursor-pointer">

            <div :class="[
              'w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-300',
              selectedCategory === cat.name 
                ? 'bg-[#90cb10] border-[#b0ee2b] scale-105 ' 
                : 'bg-zinc-900 dark:bg-zinc-900 light:bg-white border-zinc-800 dark:border-zinc-800 light:border-zinc-200 group-hover:border-[#a9e032] shadow-sm'
            ]">
              <UIcon :name="cat.icon" :class="[
                'w-6 h-6 transition-colors',
                selectedCategory === cat.name ? 'text-white' : 'text-zinc-500 group-hover:text-white light:group-hover:text-gray-400'
              ]" />
            </div>

            <span :class="[
              'text-[9px] font-black uppercase tracking-tighter text-center transition-colors',
              selectedCategory === cat.name ? 'text-[#86b324]' : 'text-zinc-500'
            ]">
              {{ cat.name }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="px-2">
      <div class="flex justify-between items-end mb-6">
        <h2 class="text-lg font-black uppercase tracking-tighter italic text-white light:text-zinc-900">{{ selectedCategory }}</h2>
        <span class="text-[9px] text-zinc-600 font-black tracking-widest uppercase">
          {{ filteredProducts.length }} Resultados
        </span>
      </div>

      <div class="grid grid-cols-2 gap-2">
        <NuxtLink v-for="product in filteredProducts" :key="product.id"
          :to="`/products/${product.id}`"
          class="bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-white border border-zinc-800/60 dark:border-zinc-800/60 light:border-gray-100 rounded-[0.1rem] p-4 aspect-square flex flex-col justify-between relative group hover:scale-110 transition-all duration-500 shadow-sm">
          
          <div class="absolute top-1 right-1 w-8 h-8 bg-[#90cb10] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,230,118,0.3)] z-30 hover:bg-[#b8eb48] transition-transform">
            <UIcon name="i-heroicons-plus" class="text-white w-4 h-4 font-bold" />
          </div>

          <div class="flex-1 flex items-center justify-center relative">
            <div class="w-16 h-16 bg-violet-600/5 rounded-full blur-2xl absolute"></div>
            <span class="text-zinc-800 dark:text-zinc-800 light:text-zinc-200 font-black text-[8px] uppercase tracking-widest">{{ product.brand }}</span>
          </div>

          <div class="pt-2">
            <p class="text-[10px] font-black text-white dark:text-white light:text-zinc-900 uppercase truncate tracking-tighter">{{ product.name }}</p>
            <p class="text-sm font-black text-cyan-700/80 tracking-tight">S/ {{ product.price.toFixed(2) }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Ocultar scrollbars */
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

.animate-infinite-scroll { animation: scroll-x 25s linear infinite; }
.hover\:pause:hover { animation-play-state: paused; }

@keyframes scroll-x {
  0% { transform: translateX(0); }
  100% { transform: translateX(-33.33%); }
}
</style>