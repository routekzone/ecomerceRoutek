<template>
  <div class="min-h-screen dark:bg-[#050505] light:bg-zinc-50 text-white light:text-zinc-900 transition-colors duration-500 font-sans overflow-x-hidden">
    <main class="w-full">
      <slot />
    </main>

    <nav class="fixed bottom-0 left-0 right-0 z-50 flex justify-center px-0">
      <div class="pchujoy-navbar bg-zinc-900/90 light:bg-white/90 border-t border-white/5 light:border-zinc-200 shadow-2xl transition-colors duration-500">
        
        <NuxtLink to="/" class="nav-btn">
          <div class="circle-bg dark:bg-black light:bg-zinc-100">
            <UIcon name="i-heroicons-home" class="w-6 h-6" />
          </div>
          <span class="label">Home</span>
        </NuxtLink>

        <NuxtLink to="/products" class="nav-btn">
          <div class="circle-bg dark:bg-black light:bg-zinc-100">
            <UIcon name="i-heroicons-squares-2x2" class="w-6 h-6" />
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
          <div class="circle-bg dark:bg-black light:bg-zinc-100">
            <UIcon name="i-heroicons-heart" class="w-6 h-6" />
          </div>
          <span class="label">Liked</span>
        </NuxtLink>

        <NuxtLink to="/user" class="nav-btn">
          <div class="circle-bg dark:bg-black light:bg-zinc-100">
            <UIcon name="i-heroicons-user" class="w-6 h-6" />
          </div>
          <span class="label">User</span>
        </NuxtLink>

      </div>
    </nav>
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
  color: #71717a; /* zinc-400 */
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
  color: #71717a;
}

.label {
  font-size: 9px;
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
  background: linear-gradient(135deg, #8b5cf6, #6d28d9);
  padding: 2px;
  border-radius: 50%;
  box-shadow: 0 8px 20px rgba(139, 92, 246, 0.4);
}

.bag-inner {
  background: #8b5cf6;
  border-width: 5px; /* Definimos el ancho aquí */
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
  color: #8b5cf6;
  margin-top: 2px;
}
</style>