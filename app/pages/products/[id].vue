<script setup>
import { useCartStore } from '~/store/cartStore';
import { useFavoritesStore } from '~/store/favoriteStore';
import { useProductStore } from '~/store/productStore';

const toast = useToast()
const productStore = useProductStore()
const cartStore = useCartStore()
const favoriteStore = useFavoritesStore()
const route = useRoute() // Logica del ROUTER para cambio de paginas 
const router = useRouter()

// Logica para el Desplazamiento en TIPO REEL DE TIKTOK 
const touchStartY = ref(0)
const touchEndY = ref(0)

const handleTouchStart = (e) => {
  touchStartY.value = e.touches[0].clientY
}

const handleTouchEnd = (e) => {
  touchEndY.value = e.changedTouches[0].clientY
  handleSwipe()
}

const handleSwipe = () => {
  const swipeDistance = touchStartY.value - touchEndY.value
  const threshold = 70 // Sensibilidad del deslizamiento (píxeles)

  // Obtenemos la lista completa de la categoría para saber el orden real
  const categoryProducts = productStore.getByCategory(product.value.category)
  const currentIndex = categoryProducts.findIndex(p => p.id === product.value.id)

  if (Math.abs(swipeDistance) > threshold) {
    if (swipeDistance > 0) {
      // SWIPE ARRIBA -> Siguiente producto
      const nextIndex = (currentIndex + 1) % categoryProducts.length
      router.push(`/products/${categoryProducts[nextIndex].id}`)
    } else {
      // SWIPE ABAJO -> Producto anterior
      const prevIndex = (currentIndex - 1 + categoryProducts.length) % categoryProducts.length
      router.push(`/products/${categoryProducts[prevIndex].id}`)
    }
  }
}

const product = computed(() => productStore.getById(route.params.id))
const isLiked = computed(() => product.value ? favoriteStore.isFavorite(product.value.id) : false)

// Logica para agregar articulos de la misma categoria menos el que ya tenemos 
const relatedProducts = computed(() => {
  if (!product.value) return []
  return productStore.allProducts.filter(p =>
    p.category === product.value.category && p.id !== product.value.id
  )
})

// REFERENCIA A TU IMAGEN LOCAL
const getImageUrl = (name) => {
  return name ? `/images/${name}` : '/images/fono.png'
}

// Galeria HORIZONTAL 
const productImages = (img) => {
  if(!product.value) return []
  return [product.value.image, ...(product.value.gallery || [])]
}

// LOGICA PARA DECIR QUE TE GUSTA
const handleToggleLike = computed(() => {
  if (product.value) {
    favoriteStore.toggleFavorite(product.value)
  }
})

// logica para agregar a Carrito 
const handleAddToCart = () => {
  if (product.value) {
    cartStore.addToCart(product.value)
    toast.add({
      title: '¡Añadido!',
      description: `${product.value.name} en el carrito.`,
      icon: 'i-heroicons-shopping-bag-solid',
      color: 'success',
      timeout: 1000,
    })
  }
}
</script>

<template>
  <div v-if="product" @touchstart="handleTouchStart" @touchend="handleTouchEnd"
    class="relative min-h-screen bg-[#f4f4f5] overflow-hidden font-sans transition-colors duration-500">

    <div class="absolute inset-0 z-0 flex items-center justify-center">
      <div class="w-[150%] h-[60%] bg-gradient-to-r from-transparent via-zinc-300/40 to-transparent blur-[120px] rotate-12"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-white via-transparent to-zinc-200/50"></div>
    </div>

    <header class="relative z-30 flex justify-between items-center p-6">
      <UButton icon="i-heroicons-chevron-left" variant="none" label="back"
        class="rounded-full bg-white text-slate-500 shadow-md border border-zinc-100 hover:scale-105"
        @click="$router.push('/products')" />
      <aside class="bg-black/70 mt-1 px-6 py-1 rounded-full shadow-lg">
        <span class="text-white text-[11px] font-black uppercase tracking-[0.2em]">{{ product.category }}</span>
      </aside>
    </header>

    <div class="absolute right-6 top-[35%] z-40 flex flex-col gap-4">
      <UButton variant="none" :icon="isLiked ? 'i-heroicons-heart-solid' : 'i-heroicons-heart'" size="xl" :class="[
        'rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-105',
        isLiked ? 'bg-rose-500 text-white' : 'bg-white text-zinc-400 border-zinc-100'
      ]" @click="handleToggleLike" />
      <UButton icon="i-heroicons-phone" variant="none"
        class="rounded-full p-4 bg-white/60 text-slate-400 border border-zinc-100 shadow-sm" />
    </div>

    <Transition name="reel" mode="out-in">
      <div :key="product.id">
        
        <div class="relative z-10 h-[55vh] flex items-center justify-center p-6">
          <div class="absolute bottom-10 w-60 h-6 bg-zinc-400/20 blur-2xl rounded-[100%]"></div>
          <img :src="getImageUrl(product.image)" class="max-w-[110%] max-h-full object-contain drop-shadow-2xl scale-110" alt="Product" />
        </div>

        <div class="absolute bottom-24 left-0 right-0 px-2 z-30 flex flex-col gap-4">
          <div class="w-full">
            <h1 class="text-zinc-700 text-[21px] text-center font-bold uppercase tracking-wide">
              {{ product.name }}
            </h1>
          </div>

          <div class="flex items-center justify-between w-full px-6">
            <div class="flex flex-col">
              <span class="text-[#1775a3] text-[11px] uppercase font-black tracking-widest leading-none">Precio Final</span>
              <p class="text-gray-600 font-semibold text-[22px]">S/ {{ product.price }}</p>
            </div>

            <button @click="handleAddToCart"
              class="bg-[#a3dd25] text-zinc-700 px-10 py-4 rounded-[2.5rem] flex items-center gap-3 shadow-xl shadow-[#b5fb22]/30">
              <UIcon name="i-heroicons-shopping-cart-solid" class="w-5 h-5" />
              <span class="text-zinc-700 uppercase font-black text-sm">Comprar </span>
            </button>
          </div>
        </div>

      </div>
    </Transition>

    <div class="absolute bottom-4 left-0 right-0 z-50 flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar px-4">
      <div v-for="item in productStore.getByCategory(product.category)" :key="item.id" class="flex-shrink-0">
        <NuxtLink :to="`/products/${item.id}`">
          <div :class="[
            'w-14 h-14 rounded-full border-2 p-1 transition-all duration-300 bg-white shadow-md',
            item.id === product.id ? 'border-[#b8ea4b] scale-110 shadow-xl' : 'border-zinc-200 opacity-60 scale-90'
          ]">
            <img :src="getImageUrl(item.image)" class="w-full h-full object-contain rounded-full" />
          </div>
        </NuxtLink>
      </div>
    </div>

  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

/* CSS PARA EL EFECTO REEL */
.reel-enter-active, .reel-leave-active {
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
  overscroll-behavior-y: contain; /* Bloquea el pull-to-refresh nativo */
  /* touch-action: none; Desactiva gestos automáticos para que solo mande tu handleSwipe */
}
</style>