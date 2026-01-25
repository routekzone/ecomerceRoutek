<script setup lang="ts">
  import { useProductStore } from '~/store/productStore';
  definePageMeta({ layout: 'store-layout'})
  const productStore = useProductStore();

  const populares = computed(() => productStore.getPopulars)
  const nuevosIngresos = computed(() => productStore.allProducts.slice(-4))
</script>

<template>
  <div class="min-h-screen dark:bg-[#050505] light:bg-zinc-50 text-white light:text-zinc-900 font-sans p-4 pb-24 transition-colors duration-500">
    
    <header class="flex justify-between items-center mb-8 px-2">
      <div class="flex items-center gap-2">
        <div class="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]">R</div>
        <h1 class="text-xl font-black tracking-tighter italic uppercase text-white light:text-zinc-900">ROK</h1>
      </div>
      <UButton icon="i-heroicons-shopping-bag" variant="ghost" color="neutral" class="rounded-full" />
    </header>

    <section class="relative overflow-hidden rounded-[2.5rem] bg-zinc-900 dark:bg-zinc-900 light:bg-white p-6 mb-8 h-64 flex flex-col justify-end border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 transition-colors shadow-sm">
      <div class="absolute -top-10 -right-10 w-64 h-64 bg-violet-600/10 rounded-full blur-[80px]"></div>
      <div class="relative z-10">
        <span class="text-[10px] uppercase font-black tracking-[0.3em] text-violet-500">Nuevo Ingreso</span>
        <h2 class="text-2xl font-black italic uppercase tracking-tighter leading-none mb-1 text-white light:text-zinc-900">Routek Beast v1</h2>
        <p class="text-zinc-400 light:text-zinc-500 text-xs mb-4">Poder absoluto para gaming.</p>
        <UButton label="Explorar Ahora" color="success" size="sm" block class="rounded-xl font-black uppercase text-[10px]" />
      </div>
    </section>

    <div class="flex justify-between items-end mb-4 px-2">
      <h3 class="text-lg font-black uppercase italic tracking-tighter text-white light:text-zinc-900">Populares</h3>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <NuxtLink 
        v-for="product in populares" 
        :key="product.id" 
        :to="`/products/${product.id}`"
        class="flex flex-col group"
      >
        <div class="aspect-square bg-zinc-900 dark:bg-zinc-900 light:bg-white border border-zinc-800/50 dark:border-zinc-800/50 light:border-zinc-200 rounded-[2.5rem] mb-3 flex items-center justify-center relative overflow-hidden transition-all active:scale-95 shadow-sm">
          <div class="w-16 h-16 bg-violet-600/5 rounded-full blur-2xl absolute"></div>
          
          <UButton 
            icon="i-heroicons-plus" 
            size="xs" 
            color="success" 
            class="absolute top-4 right-4 rounded-full z-20 shadow-[0_0_15px_rgba(0,230,118,0.3)]"
            @click.stop.prevent="" 
          />

          <UIcon name="i-heroicons-cube" class="w-10 h-10 text-zinc-800 light:text-zinc-300 group-hover:text-violet-500 transition-colors" />
          
          <span class="absolute bottom-4 text-[8px] font-black text-zinc-800 light:text-zinc-300 uppercase tracking-[0.2em]">
            {{ product.brand }}
          </span>
        </div>

        <div class="px-2">
          <p class="text-[10px] font-black text-white light:text-zinc-900 uppercase truncate tracking-tighter mb-0.5">
            {{ product.name }}
          </p>
          <p class="text-sm font-black text-violet-500 italic">
            S/ {{ product.price.toFixed(2) }}
          </p>
        </div>
      </NuxtLink>
    </div>

    <div class="flex justify-between items-end mt-10 mb-4 px-2">
      <h3 class="text-lg font-black uppercase italic tracking-tighter text-white light:text-zinc-900">Nuevos Ingresos</h3>
    </div>
    
    <div class="flex gap-4 overflow-x-auto pb-6 no-scrollbar -mx-4 px-4">
      <NuxtLink 
        v-for="product in nuevosIngresos" 
        :key="product.id" 
        :to="`/products/${product.id}`"
        class="min-w-[160px] flex flex-col group"
      >
        <div class="aspect-[4/5] bg-zinc-900 dark:bg-zinc-900 light:bg-white border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 rounded-[2rem] mb-3 flex items-center justify-center relative overflow-hidden transition-all active:scale-95 shadow-sm">
           <span class="absolute top-3 left-3 bg-violet-600 text-white text-[7px] px-2 py-0.5 rounded-full font-black uppercase tracking-widest shadow-[0_0_10px_rgba(124,58,237,0.5)] z-10">
             NEW
           </span>

           <div class="w-12 h-12 bg-white/5 rounded-full blur-xl absolute"></div>
           <UIcon name="i-heroicons-bolt" class="w-10 h-10 text-zinc-800 light:text-zinc-300 group-hover:text-[#00e676] transition-colors" />
           
           <span class="absolute bottom-3 text-[7px] font-black text-zinc-700 light:text-zinc-300 uppercase tracking-widest">
             {{ product.brand }}
           </span>
        </div>

        <div class="px-1">
          <p class="text-[9px] font-black text-white light:text-zinc-900 uppercase truncate tracking-tighter mb-0.5">
            {{ product.name }}
          </p>
          <p class="text-xs font-black text-[#00e676] italic">
            S/ {{ product.price.toFixed(2) }}
          </p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>