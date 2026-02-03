<script setup>
import { useCartStore } from '~/store/cartStore'
import { useFavoritesStore } from '~/store/favoriteStore'
import { useProductStore } from '~/store/productStore'

definePageMeta({ layout: 'store-layout' })

const toast = useToast()
const productStore = useProductStore()
const cartStore = useCartStore()
const favoriteStore = useFavoritesStore()
const route = useRoute()

const activeImageIndex = ref(0) // Para los puntitos
const activeSection = ref(null)

// traer productos relacionados 
const relatedProducts = computed(() => {
  if (!product.value) return [];
  return productStore.getByCategory(product.value.category).filter(p => p.id !== product.value.id)
})

const product = computed(() => productStore.getById(route.params.id))
const isLiked = computed(() => product.value ? favoriteStore.isFavorite(product.value.id) : false)

const getImageUrl = (name) => name ? `/images/${name}` : '/images/fono.png'

// Computed corregido para la galería
const productImages = computed(() => {
  if (!product.value) return []
  return [product.value.image, ...(product.value.gallery || [])]
})

const handlerScroll = (e) => {
  const { scrollLeft, offsetWidth } = e.target
  activeImageIndex.value = Math.round(scrollLeft / offsetWidth)
}

// corazon o no 
const handleToggleLike = () => {
  if (product.value) favoriteStore.toggleFavorite(product.value)
}

// para agregar al carrito 
const handleAddToCart = () => {
  if (product.value) {
    cartStore.addToCart(product.value)
    toast.add({ title: '¡Añadido!', description: `${product.value.name} al carrito.`, color: 'success', timeout: 1000 })
  }
}

const handleScroll = (e) => {
  const { scrollLeft, offsetWidth } = e.target
  activeImageIndex.value = Math.round(scrollLeft / offsetWidth)
}

</script>

<template>
  <div v-if="product" class="min-h-screen bg-white font-sans pb-10 overflow-y-auto relative">

    <!-- BOTON DE REGRESO AL CARRO -->
    <div class=" absolute top-6 left-6 z-60">
      <UButton icon="i-heroicons-chevron-left"
        class="rounded-full bg-white/90 backdrop-blur-sm shadow-md border border-zinc-100 text-black" variant="ghost"
        @click="$router.push('/products')" />
    </div>

    <section class="relative h-[50vh] bg-[#F7F7F7] flex flex-col items-center justify-center">
      <div class="flex overflow-x-auto snap-x snap-mandatory typeScroll w-full h-full items-center"
        @scroll="handleScroll">
        <div v-for="(img, index) in productImages" :key="index"
          class="shrink-0 w-full h-full flex items-center justify-center snap-center p-12">
          <img :src="getImageUrl(img)" class="max-w-full max-h-full object-contain drop-shadow-2xl" />
        </div>
      </div>

      <!-- Corazon  -->
      <div class="absolute -bottom-5 right-6 z-40">
        <button @click="handleToggleLike"
          :class="['py-1.5 px-2 rounded-full shadow-lg transition-all duration-600 border flex items-center justify-center', isLiked ? 'bg-rose-500 text-white border-rose-400' : 'bg-white text-zinc-400 border-zinc-50']">
          <UIcon :name="isLiked ? 'i-heroicons-heart-solid' : 'i-heroicons-heart'" class="w-7 h-8" />
        </button>
      </div>

      <!-- Spineer de las fotos -->
      <div class="absolute bottom-4 flex gap-1.5">
        <div v-for="(_, i) in productImages" :key="i"
          :class="['h-1 rounded-full transition-all duration-300', activeImageIndex === i ? 'bg-gray-700 w-6' : 'bg-zinc-300 w-1']">
        </div>
      </div>
    </section>

    <div class="px-6 mt-4 space-y-6">
      <header>
        <span
          class="text-[12px] font-black text-white bg-linear-to-r from-green-700 to-blue-700 py-1 px-4 rounded-2xl uppercase tracking-widest">{{
            product.brand || 'Rok Gear' }}</span>
        <h1 class="text-2xl mt-1 font-black capitalize text-zinc-700 leading-tight tracking-wider">{{ product.name }}
        </h1>
      </header>

      <div
        class="bg-gray-100 relative py-3 px-4 rounded-2xl flex justify-between items-center border border-zinc-100/50">
        <div>
          <p class="text-[12px] font-black text-gray-700 uppercase">
            Precio Normal:
            <span class=" text-gray-500 text-[13px] pl-2 line-through">
              S/ {{ (product.price * 1.2).toFixed(2) }}
            </span>
          </p>

          <p class="text-2xl font-black text-indigo-500 leading-none mt-1">S/ {{ product.price.toFixed(2) }}</p>
        </div>
        <div class="bg-rose-500 absolute -top-1 right-0 px-4 rounded-lg shadow-sm">
          <span class="text-[13px] font-black text-white">-20%</span>
        </div>
      </div>

      <button @click="handleAddToCart"
        class="w-full bg-black text-white py-4 rounded-2xl font-black uppercase text-xs shadow-xl active:scale-95 transition-all">
        Agregar al carro
      </button>

      <!-- DESCRIPCION DE LOS PRODUCTOS  -->
      <div class="divide-y divide-zinc-100 border-y border-zinc-100">
        <div v-for="section in ['Descripción', 'Especificaciones']" :key="section">
          <button @click="activeSection = activeSection === section ? null : section"
            class="w-full flex justify-between items-center py-5">
            <span class="font-bold text-zinc-800 text-sm">{{ section }}</span>
            <UIcon :name="activeSection === section ? 'i-heroicons-minus' : 'i-heroicons-plus'"
              class="w-5 h-5 bg-black" />
          </button>
          <div v-if="activeSection === section" class="pb-6 text-zinc-500 text-sm leading-relaxed">
            {{ section === 'Descripción' ? product.description : 'Calidad de hardware élite para tu setup Rok.' }}
          </div>
        </div>
      </div>

      <!-- SEECION DE PRODUCTOS QUE TAMBIEN TE GUSTAN -->
      <section class="pt-10 pb-12">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-xl font-bold text-zinc-900 tracking-tight">También te <span
              class="text-rose-500">encantará</span></h3>
        </div>

        <div class="grid grid-cols-2 gap-x-4 gap-y-6">
          <div v-for="item in relatedProducts.slice(0, 4)" :key="item.id" class="group relative">

            <NuxtLink :to="`/products/${item.id}`" class="block relative aspect-[3/4] overflow-hidden">
              <img :src="getImageUrl(item.image)"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                :alt="item.name" />

              <div class="absolute top-4 left-4">
                <span
                  class="bg-white/80 backdrop-blur-md text-[8px] font-black px-2 py-1 rounded-full uppercase text-zinc-800">
                  {{ item.brand || 'Rok' }}
                </span>
              </div>
            </NuxtLink>

            <button @click.prevent="favoriteStore.toggleFavorite(item)"
              class="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center bg-white rounded-full shadow-md text-zinc-900 active:scale-90 transition-transform">
              <UIcon :name="favoriteStore.isFavorite(item.id) ? 'i-heroicons-heart-solid' : 'i-heroicons-heart'"
                :class="['w-5 h-5', favoriteStore.isFavorite(item.id) ? 'text-rose-500' : 'text-zinc-400']" />
            </button>

            <div class="mt-4 px-1 space-y-1">
              <NuxtLink :to="`/products/${item.id}`" class="block">
                <h4 class="text-sm font-bold text-zinc-900 line-clamp-1 leading-tight">{{ item.name }}</h4>
                <p class="text-[10px] text-zinc-400 font-medium uppercase tracking-wider">{{ item.category || 'Hardware'
                }}</p>
              </NuxtLink>

              <div class="flex justify-between items-center pt-1 pr-2">
                <span class="text-base font-black text-indigo-600">S/ {{ item.price.toFixed(2) }}</span>

                <div class="flex items-center gap-1">
                  <UIcon name="i-heroicons-star-20-solid" class="w-4 h-4 text-yellow-400 mb-1" />
                  <span class="text-[11px] font-bold text-zinc-500">5.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<style scoped>
.snap-x {
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

.snap-center {
  scroll-snap-align: center;
}
</style>