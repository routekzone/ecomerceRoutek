<template>
  <div
    class="min-h-screen dark:bg-[#050505] light:bg-zinc-50 text-white light:text-zinc-900 transition-colors duration-500 font-sans overflow-x-hidden">


    <!-- NAVBAR MOBILE -->
    <nav class=" md:hidden fixed bottom-0 left-0 right-0 z-50 flex justify-center px-0">
      <div
        class="pchujoy-navbar bg-zinc-900/25  border-t border-white/5 light:border-zinc-200 shadow-2xl transition-colors duration-500">

        <NuxtLink to="/" class="nav-btn">
          <div class="circle-bg dark:bg-black light:bg-black/20">
            <UIcon name="i-heroicons-home" class="w-7 h-7 text-white" />
          </div>
          <span class="label">Home</span>
        </NuxtLink>

        <NuxtLink to="/products" class="nav-btn">
          <div class="circle-bg dark:bg-black light:bg-black/20">
            <UIcon name="i-heroicons-squares-2x2" class="w-7 h-7 text-white" />
          </div>
          <span class="label">Categories</span>
        </NuxtLink>

        <NuxtLink to="/shop" class="nav-btn-center">
          <div class="bag-glow">
            <div class="bag-inner border-[#050505] light:border-zinc-50 transition-colors">
              <UIcon name="i-heroicons-shopping-bag" class="w-7 h-7 text-white" />
            </div>
          </div>
          <span class="label-center">Cart</span>
        </NuxtLink>

        <NuxtLink to="/favorites" class="nav-btn">
          <div class="circle-bg dark:bg-black light:bg-black/20">
            <UIcon name="i-heroicons-heart" class="w-7 h-7 text-white" />
          </div>
          <span class="label">Liked</span>
        </NuxtLink>

        <NuxtLink to="/user" class="nav-btn">
          <div class="circle-bg dark:bg-black light:bg-black/20">
            <UIcon name="i-heroicons-user" class="w-7 h-7 text-white" />
          </div>
          <span class="label">User</span>
        </NuxtLink>

      </div>
    </nav>

    <!-- NAVBAR WEB -->
    <nav class="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-[100]  w-[90%] max-w-[1200px] text-white">
      <div class="w-full bg-black/50 backdrop-blur-lg border border-zinc-100/30 h-16 rounded-full px-8 flex items-center justify-between shadow-2xl">
        
        <div class="flex items-center gap-2">
          <img src="/images/rouk.png" class="w-7 h-7" alt="Rok Logo" />
          <span class="text-white uppercase tracking-[5px] font-bold text-sm">Routek</span>
        </div>

        <div class="flex items-center gap-8">
          <NuxtLink to="/" class="nav-link-web" active-class="text-[#a9e032]">Inicio</NuxtLink>
          <NuxtLink to="/products" class="nav-link-web" active-class="text-[#a9e032]">Categorias</NuxtLink>
          <NuxtLink to="/ofertas" class="nav-link-web" active-class="text-[#a9e032]" >Ofertas 🔥</NuxtLink>
          <NuxtLink to="/soporte" class="nav-link-web" active-class="text-[#a9e032]">Soporte</NuxtLink>
        </div>

        <div class="flex items-center gap-5">
          <UIcon name="i-heroicons-magnifying-glass" class="w-5 h-5 text-zinc-400 hover:text-white cursor-pointer" />
          <div class="h-6 w-[1px] bg-white/20"></div>
          <NuxtLink to="/shop" class="flex items-center gap-2 bg-[#a9e032] px-4 py-2 rounded-xl text-black font-black text-xs uppercase hover:scale-105 transition-transform">
            <UIcon name="i-heroicons-shopping-bag" class="w-4 h-4" />
            <span>Carrito</span>
          </NuxtLink>
        </div>
      </div>
    </nav>

    <main class="w-full">
      <slot />
    </main>

  </div>
</template>

<style scoped>
.pchujoy-navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(12px);
  border-radius: 50px 50px 0px 0px;
  padding: 10px 10px calc(10px + env(safe-area-inset-bottom)) 10px;
  width: 100vw;
  max-width: 100%;
  height: 70px;
  min-height: 75px;
}

.nav-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  flex: 1;
  transition: all 0.2s;
}

.circle-bg {
  border-radius: 50%;
  padding: 8px;
  margin-bottom: 2px;
  color: #71717a;
  /* zinc-400 */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.5s, color 0.2s;
}

/* Color activo según el modo */
.nav-btn.router-link-active .circle-bg {
  color: #8b5cf6;
}

/* Ajuste de etiquetas para modo light */
.light .label {
  color: #ffffff;
}

.label {
  font-size: 10px;
  font-weight: 500;
  color: #a1a1aa;
}

.nav-btn-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: -20px;
  text-decoration: none;
}

.bag-glow {
  background: linear-gradient(135deg, #0e9e70, #6d28d9);
  padding: 2px;
  border-radius: 50%;
  box-shadow: 0 8px 20px rgba(139, 92, 246, 0.4);
}

.bag-inner {
  background: linear-gradient(135deg, #0e9e70, #6d28d9);
  ;
  border-width: 5px;
  /* Definimos el ancho aquí */
  border-style: solid;
  border-radius: 50%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.label-center {
  font-size: 10px;
  font-weight: 800;
  color: #fbfbfb;
  margin-top: 2px;
}
</style>