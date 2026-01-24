<template>
  <div class="min-h-screen bg-[#050505] text-white font-sans p-4 pb-82 relative">

    <header class="flex items-center justify-between mb-8 px-2">
      <UButton icon="i-heroicons-chevron-left" variant="ghost" color="neutral" @click="$router.back()" />
      <h1 class="text-lg font-bold tracking-tight">Carrito de Compras</h1>
      <div class="w-10"></div>
    </header>

    <div v-if="cartItems.length === 0" class="flex flex-col items-center justify-center py-20 opacity-30">
      <UIcon name="i-heroicons-shopping-bag" class="w-16 h-16 mb-2" />
      <p class="font-black italic uppercase text-xs tracking-widest">Tu bolsa está vacía</p>
    </div>

    <div v-else class="space-y-4 relative z-10 bg-gray-400/10 px-1 pb-8 pt-2 rounded-3xl rounded-b-none">
      <div v-for="item in cartItems" :key="item.id"
        class="bg-zinc-950/60 border border-zinc-900 rounded-3xl p-4 flex gap-4 items-center">

        <div class="w-24 h-24 bg-zinc-800 rounded-2xl flex items-center justify-center border border-zinc-700">
          <div class="w-20 h-20 bg-zinc-700/50 rounded-lg animate-pulse" v-if="!item.image"></div>
          <img v-else :src="item.image" class="w-20 h-20 object-contain rotate-6" />
        </div>

        <div class="flex-1">
          <div class="flex justify-between">
            <h3 class="font-bold text-sm">{{ item.name }}</h3>
            <span class="text-[10px] text-zinc-500 uppercase">{{ item.brand || 'ROK' }}</span>
          </div>
          <p class="text-sm font-medium text-violet-400 mt-1">S/ {{ item.price.toFixed(2) }}</p>

          <div class="flex items-center justify-between mt-3">
            <div class="flex items-center gap-4 bg-black/60 rounded-full px-4 py-1.5 border border-zinc-800">
              <button class="text-zinc-500 active:scale-95" @click="cartStore.updateQty(item.id, -1)">
                <UIcon name="i-heroicons-minus" class="w-3.5 h-3.5" />
              </button>
              
              <span class="text-xs font-bold">{{ item.qty }}</span>
              
              <button class="text-zinc-500 active:scale-95" @click="cartStore.updateQty(item.id, 1)">
                <UIcon name="i-heroicons-plus" class="w-3.5 h-3.5" />
              </button>
            </div>

            <UButton 
              icon="i-heroicons-trash" 
              variant="ghost" 
              color="neutral" 
              size="xs"
              class="text-zinc-600 hover:text-red-400" 
              @click="cartStore.removeFromCart(item.id)"
            />
          </div>
        </div>
      </div>
    </div>

    <div
      class="fixed bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent z-30 pointer-events-none">
    </div>

    <div
      class="fixed bottom-28 left-4 right-4 bg-zinc-900/95 backdrop-blur-md border border-zinc-800 rounded-[32px] rounded-t-none p-6 shadow-2xl z-40">
      <div class="space-y-3 mb-6">
        <div class="flex justify-between text-xs text-zinc-400 uppercase tracking-tighter">
          <span>Subtotal</span>
          <span class="text-white font-bold">S/ {{ subtotal.toFixed(2) }}</span>
        </div>
        <div class="flex justify-between text-xs text-zinc-400 uppercase tracking-tighter">
          <span>Envío Estimado</span>
          <span class="text-white font-bold">S/ {{ shipping.toFixed(2) }}</span>
        </div>
        <div class="border-t border-zinc-800 pt-4 flex justify-between items-baseline">
          <span class="font-black text-sm uppercase">Total</span>
          <span class="font-black text-2xl text-violet-500">S/ {{ (subtotal + shipping).toFixed(2) }}</span>
        </div>
      </div>

      <UButton label="Continuar al pago" size="xl" block
        class="rounded-2xl bg-[#00e676] text-black font-black hover:bg-[#00c853] transition-all py-4 uppercase text-xs tracking-widest shadow-[0_0_20px_rgba(0,230,118,0.3)]" />
    </div>
  </div>
</template>