<script setup>
  import { useCartStore } from '~/store/cartStore';
  definePageMeta({ layout: 'store-layout' })
  const cartStore = useCartStore() 

  const cartItems = computed(() => cartStore.items)
  const subtotal = computed(() => cartStore.subtotal)
  const shipping = computed( () => cartStore.shipping)
</script>

<template>
  <div class="min-h-screen dark:bg-[#050505] light:bg-zinc-50 text-white light:text-zinc-900 font-sans p-4 pb-79 relative transition-colors duration-500">

    <header class="flex items-center justify-between mb-8 px-2">
      <UButton icon="i-heroicons-chevron-left" variant="ghost" color="neutral" @click="$router.back()" class="light:text-zinc-900" />
      <h1 class="text-lg font-bold tracking-tight uppercase italic text-white light:text-zinc-900">Carrito de Compras</h1>
      <div class="w-10"></div>
    </header>

    <div 
      class="relative z-20 bg-gray-400/10 dark:bg-gray-400/10 light:bg-zinc-200/50 px-1 pb-8 pt-2 rounded-3xl rounded-b-none min-h-[40px] transition-all duration-500"
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
            <h3 class="font-bold text-sm uppercase tracking-tighter text-white light:text-zinc-900">{{ item.name }}</h3>
            <span class="text-[10px] text-zinc-500 uppercase">{{ item.brand || 'ROK' }}</span>
          </div>
          <p class="text-sm font-black text-violet-400 mt-1 italic">S/ {{ item.price.toFixed(2) }}</p>

          <div class="flex items-center justify-between mt-3">
            <div class="flex items-center gap-4 bg-black/60 dark:bg-black/60 light:bg-zinc-100 rounded-full px-4 py-1.5 border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 transition-colors">
              <button class="text-zinc-500 active:scale-90 hover:text-violet-500" @click="cartStore.updateQty(item.id, -1)">
                <UIcon name="i-heroicons-minus" class="w-3.5 h-3.5" />
              </button>
              <span class="text-xs font-bold w-4 text-center text-white light:text-zinc-900">{{ item.qty }}</span>
              <button class="text-zinc-500 active:scale-90 hover:text-violet-500" @click="cartStore.updateQty(item.id, 1)">
                <UIcon name="i-heroicons-plus" class="w-3.5 h-3.5" />
              </button>
            </div>
            
            <UButton 
              icon="i-heroicons-trash" 
              variant="ghost" 
              color="neutral" 
              size="xs"
              class="text-zinc-600 hover:text-red-500 light:text-zinc-400"
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
          <UIcon name="i-heroicons-shopping-bag" class="w-16 h-16 mb-4 text-zinc-500" />
          <p class="font-black italic uppercase tracking-[0.2em] text-[10px] text-zinc-400">Sin tu Hardware</p>
       </div>
    </div>

    <div class="fixed bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#050505] dark:from-[#050505] light:from-zinc-50 via-[#050505]/90 dark:via-[#050505]/90 light:via-zinc-50/90 to-transparent z-30 pointer-events-none transition-colors"></div>

    <div class="fixed bottom-28 left-4 right-4 bg-zinc-900/95 dark:bg-zinc-900/95 light:bg-white backdrop-blur-md border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 rounded-[32px] rounded-t-none p-6 shadow-2xl z-40 transition-all duration-500">
      <div class="space-y-3 mb-6">
        <div class="flex justify-between text-xs text-zinc-400 uppercase tracking-tighter">
          <span>Subtotal</span>
          <span class="text-white light:text-zinc-900 font-bold">S/ {{ subtotal.toFixed(2) }}</span>
        </div>
        <div class="flex justify-between text-xs text-zinc-400 uppercase tracking-tighter">
          <span>Envío Estimado</span>
          <span class="text-white light:text-zinc-900 font-bold">S/ {{ shipping.toFixed(2) }}</span>
        </div>
        <div class="border-t border-zinc-800 dark:border-zinc-800 light:border-zinc-100 pt-4 flex justify-between items-baseline">
          <span class="font-black text-sm uppercase italic text-white light:text-zinc-900">Total</span>
          <span class="font-black text-2xl text-violet-500 italic">S/ {{ (subtotal + shipping).toFixed(2) }}</span>
        </div>
      </div>

      <UButton label="Continuar al pago" size="xl" block
        class="rounded-2xl bg-[#00e676] text-black font-black hover:bg-[#00c853] transition-all py-4 uppercase text-xs tracking-widest shadow-[0_0_20px_rgba(0,230,118,0.3)]" />
    </div>
  </div>
</template>