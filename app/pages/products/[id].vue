<script setup>
// definePageMeta({ layout: 'store-layout'})
import { useCartStore } from '~/store/cartStore';
import { useFavoritesStore } from '~/store/favoriteStore';
import { useProductStore } from '~/store/productStore';

const toast = useToast()
const productStore = useProductStore()
const cartStore = useCartStore()
const favoriteStore = useFavoritesStore()
const route = useRoute()
const router = useRouter()

const activeImageIndex = ref(0) // Para los puntitos

// Lógica de Swipe Vertical (Tipo Reel)
const touchStartY = ref(0)
const touchEndY = ref(0)
const handleTouchStart = (e) => { touchStartY.value = e.touches[0].clientY }
const handleTouchEnd = (e) => { touchEndY.value = e.changedTouches[0].clientY; handleSwipe() }

const handleSwipe = () => {
  const swipeDistance = touchStartY.value - touchEndY.value
  const categoryProducts = productStore.getByCategory(product.value.category)
  const currentIndex = categoryProducts.findIndex(p => p.id === product.value.id)

  if (Math.abs(swipeDistance) > 70) {
    if (swipeDistance > 0) {
      const nextIndex = (currentIndex + 1) % categoryProducts.length
      router.push(`/products/${categoryProducts[nextIndex].id}`)
    } else {
      const prevIndex = (currentIndex - 1 + categoryProducts.length) % categoryProducts.length
      router.push(`/products/${categoryProducts[prevIndex].id}`)
    }
  }
}

const product = computed(() => productStore.getById(route.params.id))
const isLiked = computed(() => product.value ? favoriteStore.isFavorite(product.value.id) : false)

const getImageUrl = (name) => name ? `/images/${name}` : '/images/fono.png'

// Computed corregido para la galería
const productImages = computed(() => {
  if (!product.value) return []
  return [product.value.image, ...(product.value.gallery || [])]
})

const handleScroll = (e) => {
  const scrollLeft = e.target.scrollLeft
  const width = e.target.offsetWidth
  activeImageIndex.value = Math.round(scrollLeft / width)
}

const handleToggleLike = () => {
  if (product.value) favoriteStore.toggleFavorite(product.value)
}

const handleAddToCart = () => {
  if (product.value) {
    cartStore.addToCart(product.value)
    toast.add({ title: '¡Añadido!', description: `${product.value.name} al carrito.`, color: 'success', timeout: 1000 })
  }
}
</script>


<template>
  <div v-if="product" @touchstart="handleTouchStart" @touchend="handleTouchEnd"
    class="relative min-h-screen bg-[#f4f4f5] overflow-hidden font-sans transition-colors duration-500">

    <div class="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
      <div
        class="w-[150%] h-[60%] bg-gradient-to-r from-transparent via-zinc-300/40 to-transparent blur-[120px] rotate-12">
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-white via-transparent to-zinc-200/50"></div>
    </div>

    <header class="relative z-50 flex justify-between items-center p-6">
      <UButton icon="i-heroicons-chevron-left" variant="none" label="back"
        class="rounded-full bg-white text-slate-500 shadow-md border border-zinc-100"
        @click="$router.push('/products')" />
      <aside class="bg-black/70 px-6 py-1 rounded-full shadow-lg">
        <span class="text-white text-[11px] font-black uppercase tracking-[0.2em]">{{ product.category }}</span>
      </aside>
    </header>

    <div class="absolute right-6 top-[35%] z-50 flex flex-col gap-4">
      <UButton variant="none" :icon="isLiked ? 'i-heroicons-heart-solid' : 'i-heroicons-heart'" size="xl"
        :class="['rounded-full p-4 shadow-lg transition-all', isLiked ? 'bg-rose-500 text-white' : 'bg-white text-zinc-400']"
        @click="handleToggleLike" />
      <UButton icon="i-heroicons-phone" variant="none"
        class="rounded-full p-4 bg-white/60 text-slate-400 border border-zinc-100 shadow-sm" />
    </div>

    <Transition name="reel" mode="out-in">
      <div :key="product.id" class="relative z-10">

        <div class="relative h-[48vh] w-full flex flex-col items-center">
          <div class="flex overflow-x-auto snap-x snap-mandatory no-scrollbar w-full h-full items-center"
            @scroll="handleScroll">
            <div v-for="(img, index) in productImages" :key="index"
              class="flex-shrink-0 w-full flex items-center justify-center snap-center px-8 relative">
              <div class="absolute bottom-10 w-60 h-6 bg-zinc-400/20 blur-2xl rounded-[100%]"></div>
              <img :src="getImageUrl(img)" class="max-h-[90%] object-contain drop-shadow-2xl scale-110" />
            </div>
          </div>

          <div v-if="productImages.length > 1" class="flex justify-center gap-2 mt-2">
            <div v-for="(_, i) in productImages" :key="i" class="h-1.5 rounded-full transition-all duration-300"
              :class="activeImageIndex === i ? 'bg-[#a3dd25] w-6' : 'bg-zinc-300 w-1.5'">
            </div>
          </div>
        </div>

        <div class="w-full px-2 mt-8 flex flex-col gap-6">
          <h1 class="text-zinc-700 text-[22px] text-center font-bold uppercase tracking-wide">
            {{ product.name }}
          </h1>

          <div class="flex items-center justify-between w-full px-6">
            <div class="flex flex-col">
              <span class="text-[#1775a3] text-[11px] uppercase font-black tracking-widest">Precio Final</span>
              <p class="text-gray-600 font-semibold text-[24px]">S/ {{ product.price }}</p>
            </div>

            <button @click="handleAddToCart"
              class="bg-[#a3dd25] text-zinc-700 px-10 py-4 rounded-[2.5rem] flex items-center gap-3 shadow-xl shadow-[#b5fb22]/30 active:scale-95">
              <UIcon name="i-heroicons-shopping-cart-solid" class="w-5 h-5" />
              <span class="text-zinc-700 uppercase font-black text-sm">Comprar</span>
            </button>
          </div>
        </div>

      </div>
    </Transition>

    <div class="absolute bottom-4 left-0 right-0 z-50 flex items-center gap-3 overflow-x-auto no-scrollbar px-4">
      <div v-for="item in productStore.getByCategory(product.category)" :key="item.id" class="flex-shrink-0">
        <NuxtLink :to="`/products/${item.id}`">
          <div
            :class="['w-14 h-14 rounded-full border-2 p-1 transition-all bg-white shadow-md', item.id === product.id ? 'border-[#b8ea4b] scale-110' : 'border-zinc-200 opacity-60']">
            <img :src="getImageUrl(item.image)" class="w-full h-full object-contain rounded-full" />
          </div>
        </NuxtLink>
      </div>
    </div>

  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* CSS PARA EL EFECTO REEL */
.reel-enter-active,
.reel-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.reel-enter-from {
  transform: translateY(50px);
  opacity: 0;
}

.reel-leave-to {
  transform: translateY(-50px);
  opacity: 0;
}
</style>


<style scoped>
/* Ocultar barra de desplazamiento para el carrusel de círculos */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Animación de entrada tipo Reel */
.reel-enter-active,
.reel-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.reel-enter-from {
  transform: translateY(100px);
  opacity: 0;
}

.reel-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}

/* Esto evita que el navegador recargue al deslizar hacia abajo */
.relative.min-h-screen {
  overscroll-behavior-y: contain;
  /* Bloquea el pull-to-refresh nativo */
  /* touch-action: none; Desactiva gestos automáticos para que solo mande tu handleSwipe */
}

/* Snap horizontal para el efecto de galería de iPhone */
.snap-x {
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

.snap-center {
  scroll-snap-align: center;
}

/* Ocultar scrollbar pero mantener el scroll */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>