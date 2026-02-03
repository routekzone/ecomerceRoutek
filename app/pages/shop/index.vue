<script setup>
  import { useCartStore } from '~/store/cartStore';
  definePageMeta({ layout: 'store-layout' })
  const cartStore = useCartStore() 

  const cartItems = computed(() => cartStore.items)
  const subtotal = computed(() => cartStore.subtotal)
  const shipping = computed( () => cartStore.shipping)
</script>

<template>
  <div class="min-h-screen dark:bg-[#050505] light:bg-white text-white light:text-zinc-900 font-sans p-4 pb-79 relative transition-colors duration-500">

    <header class="flex items-center justify-between mb-6 px-2">
      <UButton icon="i-heroicons-chevron-left"  variant="none"  @click="$router.back()" class="light:text-white bg-black/80 rounded-full px-2 py-2 hover:scale-110 transition-all duration-500" />
      <h1 class="text-3xl font-black tracking-wider  uppercase text-white light:text-zinc-900"> My Car  </h1>
      <div class="w-5"></div>  
    </header>

    <div 
      class="relative z-20 bg-gray-400/10 dark:bg-gray-400/10 light:bg-gray-700/15 px-1 pb-8 pt-2 rounded-3xl rounded-b-none min-h-[40px] transition-all duration-500"
      :class="cartItems.length > 0 && cartItems.length < 2 ? 'min-h-[40vh]' : 'min-h-[40px]'"
    >
      <div v-for="item in cartItems" :key="item.id" 
        class="bg-zinc-950/60 dark:bg-zinc-950/60 light:bg-white border border-zinc-900 dark:border-zinc-900 light:border-zinc-200 rounded-3xl p-4 flex gap-4 items-center mb-4 shadow-sm transition-colors">
        
        <div class="w-24 h-24 bg-zinc-800 dark:bg-zinc-800 light:bg-zinc-100 rounded-2xl flex items-center justify-center border border-zinc-700 dark:border-zinc-700 light:border-zinc-200">
          <div class="w-20 h-20 bg-zinc-700/50 rounded-lg animate-pulse" v-if="!item.image"></div>
          <img v-else :src="item.image" class="w-20 h-20 object-contain rotate-6" />
        </div>

        <div class="flex-1">
          <div class="flex justify-between">
            <h3 class="font-bold text-[14px] uppercase tracking-tighter text-white light:text-zinc-600">{{ item.name }}</h3>
            <span class="text-[11px] font-black text-[#92bf32] uppercase">{{ item.brand || 'ROK' }}</span>
          </div>
          <p class="text-sm font-black text-indigo-500 mt-1">S/ {{ item.price.toFixed(2) }}</p>

          <div class="flex items-center justify-between mt-3">
            <!-- Boton subir y bajar S -->
            <div class="flex items-center gap-4 bg-black/60 dark:bg-black/60 light:bg-yellow-500 rounded-full px-4 py-1 border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 transition-colors">
              <button class="text-zinc-800 mt-1 active:scale-90 hover:text-violet-500" @click="cartStore.updateQty(item.id, -1)">
                <UIcon name="i-heroicons-minus" class="w-3.5 h-3.5" />
              </button>
              <span class="text-[15px] font-black w-4 text-center text-white light:text-white">{{ item.qty }}</span>
              <button class="text-zinc-800 mt-1 active:scale-90 hover:text-violet-500" @click="cartStore.updateQty(item.id, 1)">
                <UIcon name="i-heroicons-plus" class="w-4 h-4" />
              </button>
            </div>
            
            <UButton 
              icon="i-heroicons-trash" 
              variant="none" 
              size="md"
              class="text-white hover:bg-gray-200 hover:scale-120 active:bg-rose-500 transition-all duration-500 rounded-full  light:text-rose-400"
              @click="cartStore.removeFromCart(item.id)"
            />
          </div>
        </div>
      </div>
    </div>

    <div v-if="cartItems.length === 0" 
      class="fixed inset-0 bottom-35 flex flex-col items-center justify-center pointer-events-none z-10"
      style="margin-bottom: 100px;"> 
      <div class="flex flex-col items-center opacity-40">
          <UIcon name="i-heroicons-shopping-bag" class="w-16 h-16 mb-4 text-zinc-800" />
          <p class="font-black uppercase tracking-[0.2em] text-[11px] text-zinc-800">Sin tu Hardware</p>
       </div>
    </div>

    <div class="fixed bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#050505] dark:from-[#050505] light:from-zinc-50 via-[#050505]/90 dark:via-[#050505]/90 light:via-zinc-50/90 to-transparent z-30 pointer-events-none transition-colors"></div>

    <div class="fixed bottom-28 left-4 right-4 bg-zinc-900/95 dark:bg-zinc-900/95 light:bg-white backdrop-blur-md border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 rounded-[32px] rounded-t-none p-6 shadow-2xl z-40 transition-all duration-500">
      <div class="space-y-3 mb-6">
        <div class="flex justify-between text-xs text-zinc-400 uppercase tracking-tighter">
          <span class=" text-sky-700 text-[15px] font-bold"> Subtotal</span>
          <span class="text-white light:text-black/60 text-[16px] font-bold">S/ {{ subtotal.toFixed(2) }}</span>
        </div>
        <div class="flex justify-between text-xs text-zinc-400 uppercase tracking-tighter">
          <span class=" text-rose-600 text-[13px] font-bold">Envío Estimado</span>
          <span class="text-white light:text-black/60 font-bold text-[14px]">S/ {{ shipping.toFixed(2) }}</span>
        </div>
        <div class="border-t border-zinc-800 dark:border-zinc-800 light:border-zinc-300 pt-4 flex justify-between items-baseline">
          <span class="font-black text-[18px] uppercase text-white light:text-zinc-900">Total</span>
          <span class="font-black text-2xl text-indigo-500">S/ {{ (subtotal + shipping).toFixed(2) }}</span>
        </div>
      </div>

      <UButton label="Continuar al pago" size="xl" block variant="none"
        class="rounded-2xl bg-black text-white font-black hover:scale-105 active:bg-linear-to-r from-green-700 to-indigo-800 transition-all duration-500 py-4 uppercase text-xs tracking-widest shadow-xl" />
    </div>
  </div>
</template>