<script setup>
  import { useProductStore } from '~/store/productStore';
  definePageMeta({ layout: 'store-layout' })

  const productStore = useProductStore()
  const selectedCategory = ref('Monitores')

  const categories = [
  { name: 'iPhones', image: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=400&auto=format&fit=crop', id: 0 },
  { name: 'Monitores', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=200&auto=format&fit=crop', id: 1 },
  { name: 'PCs', image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=200&auto=format&fit=crop', id: 2 },
  { name: 'Laptops', image: 'https://images.unsplash.com/photo-1655208190058-a06451d19431?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', id: 3 },
  { name: 'Mouses', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=200&auto=format&fit=crop', id: 4 },
  { name: 'Audífonos', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&auto=format&fit=crop', id: 5 },
  { name: 'Teclados', image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=200&auto=format&fit=crop', id: 6 },
  { name: 'Mousepads', image: 'https://media.istockphoto.com/id/1006518986/photo/blank-mouse-pad-with-computer-mouse-for-branding-or-design-presentation-3d-render-illustration.jpg?s=1024x1024&w=is&k=20&c=zBgs7aLWXZi-jFBP-MpWvMyNv812ZJiXSRSimFeHZPo=', id: 7 },
]

  const filteredProducts = computed( () => {
    return productStore.getByCategory(selectedCategory.value)
  })
</script>

<template>
  <div class="min-h-screen dark:bg-[#050505] light:bg-white text-white light:text-zinc-900 py-0 pb-32 overflow-x-hidden transition-colors duration-500">
    
    <!-- Header con IMPUT -->
    <header class="mb-3 px-4 py-4 space-y-4 bg-black/90 ">
      <div class="flex justify-between items-center">
        <h1 class="text-xl font-black tracking-widest uppercase text-white light:text-white">Explorar</h1>
      </div>
      <div class="relative w-full">
        <span class="absolute inset-y-0 left-4 flex items-center text-zinc-500">
          <UIcon name="i-heroicons-magnifying-glass" class="w-5 h-5" />
        </span>
        <input type="text" placeholder="Buscar hardware de élite..."
          class="w-full bg-white dark:bg-zinc-900 light:bg-white border-zinc-800/50 dark:border-zinc-800/50 light:border-zinc-200 text-sm pl-12 pr-4 py-3 rounded-3xl focus:outline-none border-2 focus:border-[#2b59e36f] transition-all placeholder:text-zinc-500 shadow-lg text-white light:text-zinc-900">
      </div>
    </header>
    
    <!-- Categorias MOVILES -->
    <div class="relative mb-6 overflow-hidden">
      <div class="overflow-x-auto typeScroll py-1">
        <div class="flex px-2 w-max animate-infinite-scroll hover:pause">
          <div v-for="(cat, index) in [...categories, ...categories, ...categories]" :key="`${cat.id}-${index}`"
            @click="selectedCategory = cat.name"
            class="flex-none flex flex-col items-center gap-2 group w-20 cursor-pointer">

            <div :class="[
              'w-18 h-18 rounded-full border-2 overflow-hidden shadow-md transition-all duration-300',
              selectedCategory === cat.name 
                ? 'border-[#4974d886] scale-110 shadow-[0_0_10px_rgba(169,224,50,0.3)]'
                : 'border-zinc-200 dark:border-zinc-800'
            ]">
              <img 
                :src="cat.image"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                :alt="cat.name"
              />
            </div>

            <span :class="[
              'text-[11px] font-bold  tracking-tighter text-center transition-colors',
              selectedCategory === cat.name ? 'text-[#1a1a1a]' : 'text-zinc-500'
            ]">
              {{ cat.name }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- TODOS LOS ITEMS  -->
    <div>
      <!-- Nombre de CATEGORIAS -->
      <div class="flex justify-between items-center mb-6 px-4">
        <h2 class="text-2xl font-black uppercase tracking-widest font-sans text-white light:text-zinc-900">{{ selectedCategory }}</h2>
        <span class="text-[13px] text-[#91ce0e] font-black tracking-widest uppercase">
          {{ filteredProducts.length }} Resultados
        </span>
      </div>

      <div class="grid grid-cols-2 gap-2">
        <NuxtLink v-for="product in filteredProducts" :key="product.id"
          :to="`/products/${product.id}`"
          class=" min-h-[260px] bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-gray-100 border border-zinc-800/60 dark:border-zinc-800/60 light:border-gray-100 p-4 flex flex-col justify-between relative group hover:scale-105 transition-all duration-500 shadow-sm">

          <div class="absolute top-1 right-1 w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,230,118,0.3)] z-30 hover:bg-[#c52656] transition-transform">
            <UIcon name="i-heroicons-plus" class="text-white w-4 h-4 font-bold" />
          </div>

          <div class="flex-1 flex items-center justify-center relative">
            <div class="w-16 h-16 bg-violet-600/5 rounded-full blur-2xl absolute"></div>
            <span class="text-zinc-800 dark:text-zinc-800 light:text-zinc-200 font-black text-[8px] uppercase tracking-widest">{{ product.brand }}</span>
          </div>

          <div class="pt-2">
            <p class="text-[11px] font-black text-white dark:text-white light:text-zinc-900 uppercase truncate tracking-tighter">{{ product.name }}</p>
            <p class="text-md font-black text-indigo-500 tracking-tight">S/ {{ product.price.toFixed(2) }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>

  </div>
</template>

<style scoped>

.animate-infinite-scroll { animation: scroll-x 25s linear infinite; }
.hover\:pause:hover { animation-play-state: paused; }

@keyframes scroll-x {
  0% { transform: translateX(0); }
  100% { transform: translateX(-33.33%); }
}
</style>