<script setup>
import { useCartStore } from '~/store/cartStore'
import { useFavoritesStore } from '~/store/favoriteStore'

definePageMeta({ layout: 'store-layout' })

const favoriteStore = useFavoritesStore()
const cartStore = useCartStore()
const router = useRouter()
const colorMode = useColorMode()

const isDark = computed({
  get: () => colorMode.value === 'dark',
  set: () => colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
})

const userStats = computed(() => [
  {
    label: 'Pedidos',
    value: cartStore.items.length,
    icon: 'i-heroicons-shopping-bag',
    to: '/shop'
  },
  {
    label: 'Likes',
    value: favoriteStore.items.length,
    icon: 'i-heroicons-heart',
    to: '/favorites'
  },
  {
    label: 'Nivel',
    value: 'Pro',
    icon: 'i-heroicons-trophy',
    to: null
  }
])

const goTo = (path) => {
  if (path) router.push(path)
}
</script>

<template>
  <div
    class="min-h-screen bg-[#050505] dark:bg-[#050505] light:bg-gray-100 text-white dark:text-white light:text-zinc-900 p-6 pb-32 transition-colors duration-500">

    <header class="flex flex-col items-center mt-8 mb-10">
      <div class="relative group">
        <div class="absolute inset-0 bg-violet-600 rounded-full blur-3xl opacity-20 transition-all duration-500"></div>
        <div
          class="w-30 h-30 rounded-full border-2 border-zinc-900 dark:border-zinc-800 light:border-zinc-200 p-1 bg-zinc-900 relative z-10 overflow-hidden">
          <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=Kingston" alt="User Avatar"
            class="w-full h-full object-cover" />
        </div>
        <button
          class="absolute bottom-0 right-0 bg-indigo-600 px-2 py-1 rounded-full z-20 border-4 border-[#050505] dark:border-[#050505] light:border-zinc-50 hover:scale-110 transition-transform">
          <UIcon name="i-heroicons-pencil-square" class="w-4 h-4 text-white" />
        </button>
      </div>

      <div class="text-center mt-6">
        <h1 class="text-3xl font-black uppercase tracking-widest leading-none">Felix Sanchez</h1>
        <p class="text-violet-500 light:text-teal-600 text-[12px] font-black uppercase tracking-[0.3em] mt-2">
          Routek Elite Member
        </p>
      </div>
    </header>

    <div class="grid grid-cols-3 gap-2 mb-8">
      <div v-for="stat in userStats" :key="stat.label" @click="goTo(stat.to)" :class="[
        'relative overflow-hidden flex flex-col items-center justify-center py-3 rounded-xl border transition-all duration-300',
        'bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-white border-zinc-800/60 dark:border-zinc-800/60 light:border-zinc-200',
        stat.to ? 'cursor-pointer hover:scale-105 active:scale-95 hover:border-violet-500/50' : 'cursor-default opacity-90'
      ]">
        <span class="text-2xl font-black leading-none">{{ stat.value }}</span>
        <div class="flex mt-1 items-center gap-2">
          <span class="text-[9px] text-sky-700 mt-2 font-black uppercase tracking-[0.2em]">{{ stat.label }}</span>
          <UIcon :name="stat.icon" class="w-5 h-5 text-emerald-500 mt-1" />
        </div>
      </div>
    </div>

    <div class="space-y-2">

      <!-- Tarjetas de BONOS  -->
      <button
        class="w-full bg-zinc-900/30 dark:bg-zinc-900/30 light:bg-white border border-zinc-800/40 dark:border-zinc-800/40 light:border-zinc-200 px-5 py-3 rounded-[2.5rem] flex justify-between items-center group hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 bg-blue-400/10 rounded-2xl flex items-center justify-center text-blue-400">
            <UIcon name="i-heroicons-credit-card" class="w-6 h-6" />
          </div>
          <span class="font-black text-sm uppercase tracking-tight">Mis Tarjetas</span>
        </div>
        <UIcon name="i-heroicons-chevron-right" class="text-zinc-600 group-hover:translate-x-1 transition-transform" />
      </button>

      <!-- MODO LIGTH BLUE -->
      <div
        class="bg-zinc-900/30 dark:bg-zinc-900/30 light:bg-white border border-zinc-800/40 dark:border-zinc-800/40 light:border-zinc-200 py-3 px-5 rounded-[2.5rem] flex justify-between items-center transition-all duration-300">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 bg-amber-400/10 rounded-2xl flex items-center justify-center">
            <UIcon :name="isDark ? 'i-heroicons-moon-solid' : 'i-heroicons-sun-solid'" class="text-amber-400 w-6 h-6" />
          </div>
          <div>
            <p class="font-black text-sm uppercase tracking-tight">Modo Visual</p>
            <p class="text-[9px] text-zinc-500 uppercase font-bold tracking-tighter">{{ isDark ? 'Dark Mode Active' :
              'Light Mode Active' }}</p>
          </div>
        </div>
        <div class=" flex justify-between items-center">
          <USwitch 
            v-model="isDark" 
            color="success" 
            label="Chek me"
            size="lg" 
            :ui="{
              active: 'bg-violet-600',
              inactive: 'bg-zinc-700'
            }" 
            on-icon="i-heroicons-moon-solid" 
            off-icon="i-heroicons-sun-solid" 
          />
        </div>
      </div>

      <!-- CERRAR SESSION -->
      <button
        class="w-full bg-rose-500/5 border border-rose-500/20 py-3 px-5 rounded-[2.5rem] flex justify-between items-center group hover:bg-rose-500/10 active:scale-[0.98] transition-all duration-300">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 bg-rose-500/10 rounded-2xl flex items-center justify-center text-rose-500">
            <UIcon name="i-heroicons-arrow-left-on-rectangle" class="w-6 h-6" />
          </div>
          <span class="font-black text-sm uppercase tracking-tight text-rose-500">Cerrar Sesión</span>
        </div>
      </button>

    </div>
  </div>
</template>