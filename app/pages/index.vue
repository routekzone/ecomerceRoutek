<script setup lang="ts">
import { useProductStore } from '~/store/productStore';

definePageMeta({ layout: 'store-layout' });

const productStore = useProductStore();

// Getters directos del Store
const ofertasHot = computed(() => productStore.getOfertasHot);
const nuevosIngresos = computed(() => productStore.getNuevosIngresos);
const masVendidosBase = computed(() => productStore.getMasVendidos);

const brands = [
  { name: 'Apple', icon: 'i-simple-icons-apple' },
  { name: 'Samsung', icon: 'i-simple-icons-samsung' },
  { name: 'Rok', icon: 'i-heroicons-bolt-solid' },
  { name: 'Asus', icon: 'i-simple-icons-asus' },
  { name: 'Logitech', icon: 'i-simple-icons-logitech' },
  { name: 'Razer', icon: 'i-simple-icons-razer' },
  { name: 'Sony', icon: 'i-simple-icons-sony' },
  { name: 'MSI', icon: 'i-simple-icons-msi' },
  { name: 'Dell', icon: 'i-simple-icons-dell' },
  { name: 'HP', icon: 'i-simple-icons-hp' }
];

const getTestImage = (index: any) => {
  const images = [
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500', // Audífonos
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500', // Reloj/Tech
    'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500'  // Setup Gamer
  ]
  return images[index] || images[0]
}

// Utilidades
const calculateDiscount = (price: number, oldPrice?: number) => {
  if (!oldPrice) return 0;
  return Math.round(((oldPrice - price) / oldPrice) * 100);
};

const formatPrice = (val: number) => `S/ ${val.toFixed(2)}`;
</script>

<template>
  <div class="min-h-screen bg-white flex flex-col font-sans overflow-x-hidden">

    <!-- OCULTA EN WEB -->
    <header class="md:hidden flex justify-center items-center mb-0 px-6 py-3 bg-black/95">
      <div class="flex items-center gap-2">
        <h1 class="text-xl text-white tracking-[10px] uppercase font-normal ">Routek</h1>
        <div class="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-[#a9e032] shadow-lg">
          <img src="/images/rouk.png" class="w-6 h-6" alt="Icono Rok" />
        </div>
      </div>
    </header>

    <div class="px-4 flex-1">

      <!-- seccion para banners  -->
      <section class="mb-3 md:mb-0 -mx-4">
        <div class="flex overflow-x-auto typeScroll snap-x snap-mandatory">
          <div class="min-w-full snap-center px-0">
            <div class="h-94 bg-white overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1611310102866-e7d3918cf473?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                class="w-full h-full object-cover" alt="Banner 1" />
            </div>
          </div>
          <div class="min-w-full snap-center px-0">
            <div class="h-94 bg-white overflow-hidden shadow-sm">
              <img
                src="https://plus.unsplash.com/premium_photo-1661629005919-1373e7ee372d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                class="w-full h-full object-cover" alt="Banner 2" />
            </div>
          </div>
          <div class="min-w-full snap-center px-0">
            <div class="h-94 bg-white overflow-hidden shadow-sm">
              <img
                src="https://plus.unsplash.com/premium_photo-1682096475747-a744ab3f55ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                class="w-full h-full object-cover" alt="Banner 2" />
            </div>
          </div>
        </div>
        <div class="flex justify-center md:hidden gap-1.5 mt-3">
          <div class="w-1.5 h-1.5 rounded-full bg-zinc-300"></div>
          <div class="w-4 h-1.5 rounded-full bg-zinc-900"></div>
          <div class="w-1.5 h-1.5 rounded-full bg-zinc-300"></div>
        </div>
      </section>

      <!-- MARCAS MOBILE  -->
      <section class="-mb-24 md:hidden">
        <div class="flex flex-col flex-wrap h-48 gap-y-6 gap-x-5 overflow-x-auto typeScroll -mx-4 px-4 pb-2">
          <div v-for="brand in brands" :key="brand.name" class="flex flex-col items-center gap-2 shrink-0">
            <div
              class="w-16 h-16 bg-white rounded-full flex items-center justify-center border border-zinc-300 shadow-lg active:scale-90 transition-transform">
              <UIcon :name="brand.icon" class="w-7 h-7 text-black" />
            </div>
            <span class="text-[11px] text-zinc-800">{{ brand.name }}</span>
          </div>
        </div>
      </section>

      <!-- MARCAS WEB -->
      <section class="hidden md:block  bg-black py-8 -mx-4 mb-12 shadow-inner">
        <div class="max-w-7xl mx-auto px-4">
          <div
            class="flex flex-nowrap justify-start items-center overflow-x-auto typeScroll  gap-16 opacity-70 hover:opacity-100 transition-opacity duration-500">
            <div v-for="brand in brands" :key="brand.name" class="flex items-center group cursor-pointer">
              <UIcon :name="brand.icon"
                class="w-8 h-8 md:w-10 md:h-10 text-zinc-400 group-hover:text-[#a9e032] transition-colors" />
              <span
                class="ml-2 text-[10px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors hidden md:block">
                {{ brand.name }}
              </span>
            </div>
          </div>
        </div>
      </section>


      <!-- OFERTAS  -->
      <section class=" -mx-4 py-8 px-4" v-if="ofertasHot.length">
        <div class="flex justify-between items-end mb-4 px-2">
          <h3 class="text-[22px] font-black tracking-wider uppercase text-rose-600">Ofertas Hot ! 🔥</h3>
          <span class="text-[11px] font-bold bg-black px-5 py-2 rounded-xl text-white uppercase">Ver mas</span>
        </div>

        <div class="flex gap-y-5 gap-x-4 overflow-x-auto typeScroll px-3 pb-4 py-3">
          <NuxtLink v-for="product in ofertasHot" :key="product.id" :to="`/products/${product.id}`"
            class="min-w-[240px] bg-gray-100 p-6 relative shadow-lg shadow-gray-700/20 shrink-0 hover:scale-102 transition-all duration-400">

            <div
              class="absolute -top-1 -left-1 bg-rose-500 text-white text-[11px] font-black px-3 py-1.5 rounded-full shadow-lg z-20">
              -{{ calculateDiscount(product.price, product.oldPrice) }}%
            </div>

            <div
              class="absolute -top-2 -right-2 w-11 h-11 bg-[#95ca23] rounded-full flex items-center justify-center shadow-lg z-30 border-[2px] border-gray-300">
              <UIcon name="i-heroicons-plus" class="text-white w-6 h-6 font-black" />
            </div>

            <div class="h-32 flex items-center justify-center mb-4">
              <img :src="product.image" class="max-h-full object-contain drop-shadow-2xl" />
            </div>

            <div class="flex flex-col gap-1">
              <p class="text-[9px] font-black text-zinc-400 uppercase tracking-widest">{{ product.brand }}</p>
              <h4 class="text-[13px] font-bold leading-tight h-8 line-clamp-2 text-zinc-800">{{ product.name }}</h4>
              <div class="flex items-center gap-2 mt-1">
                <span class="text-[#553aed] font-black text-lg">{{ formatPrice(product.price) }}</span>
                <span class="text-zinc-700 line-through text-[12px] font-bold">{{ formatPrice(product.oldPrice!)
                }}</span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </section>

      <!-- NUEVO INGRESOS -->
      <section class="mb-12">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-[24px] font-bold text-black font-sans tracking-wide px-2">
            Nuevos <span class="text-[#ff0e9e] px-2">Ingresos</span>
          </h3>
          <span class="text-[11px] font-bold bg-black px-5 py-2 rounded-lg text-white uppercase">Ver mas</span>
        </div>

        <div class="flex flex-col gap-3 px-2">
          <NuxtLink v-for="(product, index) in nuevosIngresos.slice(0, 3)" :key="product.id"
            :to="`/products/${product.id}`"
            class="bg-white rounded-xl flex items-stretch border border-zinc-100 shadow-lg overflow-hidden h-32 relative hover:scale-105 transition-all duration-500">
            <span
              class="absolute top-0 right-0 z-20 text-[10px] font-black bg-yellow-500 px-4 py-0.5 rounded text-white uppercase tracking-tighter shadow-sm">
              New
            </span>

            <div class="w-1/3 relative bg-zinc-100 shrink-0">
              <img :src="product.image.startsWith('http') ? product.image : getTestImage(index)"
                class="w-full h-full object-cover" :alt="product.name" />
            </div>

            <div class="flex-1 p-4 flex flex-col justify-center bg-gray-50">
              <p class="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">{{ product.brand }}</p>
              <h4 class="text-sm font-bold text-zinc-800 line-clamp-2 leading-tight mb-1">{{ product.name }}</h4>
              <div class="flex items-baseline gap-2">
                <span class="text-indigo-600 font-black text-lg ">{{ formatPrice(product.price) }}</span>
              </div>
            </div>

            <div class="flex items-center pr-4 bg-gray-50">
              <UIcon name="i-heroicons-chevron-right" class="w-4 h-4 text-zinc-300" />
            </div>
          </NuxtLink>
        </div>
      </section>

      <!-- LO MAS VENDIDO -->
      <section class="mb-3">
        <div class=" flex justify-between items-center mb-6">
          <h3 class="text-[24px] font-bold text-black font-sans tracking-wide px-2">
            Lo mas <span class="text-indigo-600 px-2"> Vendido </span>
          </h3>
          <span class="text-[11px] font-bold bg-black px-5 py-2 rounded-lg text-white uppercase">Ver mas</span>
        </div>

        <div class="flex flex-col flex-wrap h-[580px] gap-x-2 gap-y-2 overflow-x-auto typeScroll pb-6">
          <NuxtLink v-for="product in masVendidosBase" :key="product.id" :to="`/products/${product.id}`"
            class="h-[260px] w-[180px] bg-gray-100 rounded-sm p-4 relative shadow-lg shadow-blue-200/40 border border-zinc-200/30 shrink-0">
            <div class="h-24 flex items-center justify-center mb-3">
              <img :src="product.image" class="max-h-full object-contain" />
            </div>
            <div class="flex flex-col">
              <p class="text-[8px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-1">{{ product.brand }}</p>
              <h4 class="text-[12px] font-bold text-zinc-800 leading-tight line-clamp-2 mb-2 h-7">{{ product.name }}
              </h4>
              <p class="text-[#7c3aed] font-black text-[16px] ">{{ formatPrice(product.price) }}</p>
            </div>
          </NuxtLink>

          <NuxtLink to="/category/all"
            class="w-[160px] h-[260px] flex flex-col items-center justify-center bg-zinc-900 rounded-[2.5rem] shadow-xl shrink-0">
            <div class="w-12 h-12 rounded-full bg-[#a9e032] flex items-center justify-center mb-4">
              <UIcon name="i-heroicons-arrow-up-right" class="text-black w-6 h-6 font-bold" />
            </div>
            <span class="text-[10px] font-black uppercase text-white tracking-widest text-center px-4">Explorar
              Todo</span>
          </NuxtLink>
        </div>
      </section>

      <!-- SECCION SORTES ROUTEK -->
      <section class="mt-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div class="mb-10">
          <div class="flex items-center gap-2 mb-2">
            <div class="w-4 h-8 bg-rose-600 rounded-sm"></div>
            <span class="text-rose-600 font-bold text-sm">Comunidad</span>
          </div>
          <h2 class="text-4xl font-black tracking-tighter uppercase text-zinc-900">
            Sorteos <span class="text-[#a9e032]">Exclusivos</span>
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">

          <div class="md:col-span-2 md:row-span-2 bg-black rounded-3xl overflow-hidden relative group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1603481546238-487240415921?q=80&w=1470"
              class="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              alt="Setup Gamer">
            <div class="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 class="text-white text-3xl font-black uppercase mb-2">Setup Rok Pro 2026</h3>
              <p class="text-zinc-300 text-sm mb-4 max-w-xs">Participa por un set completo de periféricos de nuestra
                línea premium.</p>
              <button
                class="w-fit text-white font-bold underline decoration-[#a9e032] decoration-2 underline-offset-4 hover:text-[#a9e032] transition-colors">
                Inscribirse ahora
              </button>
            </div>
          </div>

          <div class="md:col-span-2 bg-zinc-900 rounded-3xl overflow-hidden relative group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1470"
              class="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
              alt="Gaming">
            <div class="absolute inset-0 p-6 flex flex-col justify-center">
              <h4 class="text-white text-xl font-black uppercase">Laptops de última gen</h4>
              <button class="text-white text-sm font-bold underline mt-2 text-left">Shop Now</button>
            </div>
          </div>

          <div class="bg-zinc-100 rounded-3xl overflow-hidden relative group cursor-pointer">
            <div class="absolute inset-0 p-6 flex flex-col justify-end z-10">
              <h4 class="text-zinc-900 text-lg font-black uppercase">Audio Hi-Fi</h4>
              <button class="text-zinc-600 text-[10px] font-bold underline mt-1 text-left">Ver más</button>
            </div>
            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              alt="Audifonos">
          </div>

          <div class="bg-black rounded-3xl overflow-hidden relative group cursor-pointer">
            <div class="absolute inset-0 p-6 flex flex-col justify-end z-10">
              <h4 class="text-white text-lg font-black uppercase italic text-[#a9e032]">Mystery Box</h4>
              <button class="text-zinc-400 text-[10px] font-bold underline mt-1 text-left">Sorpresa</button>
            </div>
            <img src="https://images.unsplash.com/photo-1611310102866-e7d3918cf473?q=80&w=500"
              class="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-500"
              alt="Product">
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 py-10 border-t border-zinc-100">
          <div class="flex flex-col items-center text-center group">
            <div
              class="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-black transition-colors">
              <UIcon name="i-heroicons-truck" class="w-8 h-8 text-black group-hover:text-[#a9e032]" />
            </div>
            <h5 class="font-black uppercase text-sm mb-1">Envíos Flash</h5>
            <p class="text-zinc-500 text-xs">Gratis en órdenes mayores a S/ 200</p>
          </div>

          <div class="flex flex-col items-center text-center group">
            <div
              class="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-black transition-colors">
              <UIcon name="i-heroicons-headphones" class="w-8 h-8 text-black group-hover:text-[#a9e032]" />
            </div>
            <h5 class="font-black uppercase text-sm mb-1">Soporte 24/7</h5>
            <p class="text-zinc-500 text-xs">Atención personalizada para tu setup</p>
          </div>

          <div class="flex flex-col items-center text-center group">
            <div
              class="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-black transition-colors">
              <UIcon name="i-heroicons-check-badge" class="w-8 h-8 text-black group-hover:text-[#a9e032]" />
            </div>
            <h5 class="font-black uppercase text-sm mb-1">Garantía Rok</h5>
            <p class="text-zinc-500 text-xs">Protección total en todos tus productos</p>
          </div>
        </div>
      </section>
    </div>



    <footer class="bg-zinc-950 px-8 pt-12 pb-32 w-full mt-auto">
      <div class="flex flex-col items-center gap-8">
        <div class="flex flex-col items-center gap-3">
          <div class="w-12 h-12 flex items-center justify-center font-black text-black text-lg">
            <img src="/images/rouk.png" class="w-full h-full" alt="Icono Rok" />
          </div>
          <div class="text-center">
            <h2 class="text-[22px] font-normal uppercase text-white tracking-widest">Routek</h2>
            <p class="text-[11px] font-bold text-[#a9e032] uppercase tracking-[0.4em] mt-2">Tecnology & Developer</p>
          </div>
        </div>

        <nav
          class="grid grid-cols-3 gap-y-4 gap-x-8 text-[10px] font-black uppercase text-zinc-400 tracking-widest text-center">
          <NuxtLink to="/">Inicio</NuxtLink>
          <NuxtLink to="/category/all">Productos</NuxtLink>
          <NuxtLink to="/soporte">Garantía</NuxtLink>
          <NuxtLink to="/contacto" class="col-span-3 mt-4">Contacto</NuxtLink>
        </nav>
        <div class="flex gap-4">
          <div
            class="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-600 flex items-center justify-center text-zinc-400">
            <UIcon name="i-simple-icons-instagram" class="w-5 h-5" />
          </div>
          <div
            class="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-600 flex items-center justify-center text-zinc-400">
            <UIcon name="i-simple-icons-tiktok" class="w-5 h-5" />
          </div>
          <div
            class="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-600 flex items-center justify-center text-zinc-400">
            <UIcon name="i-simple-icons-facebook" class="w-5 h-5" />
          </div>
        </div>

        <p class="text-[9px] font-bold text-zinc-600 uppercase tracking-[0.2em] text-center leading-relaxed">
          © 2026 Routek Technology. <br /> Diseñado para la línea Rok.
        </p>
      </div>
    </footer>
  </div>
</template>

<style>
/* Animaciones personalizadas */
.animate-marquee {
  display: flex;
  width: max-content;
  animation: marquee 30s linear infinite;
}

.animate-marquee-reverse {
  display: flex;
  width: max-content;
  animation: marquee-reverse 30s linear infinite;
}

.pause-animation {
  animation-play-state: paused !important;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes marquee-reverse {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}
</style>
