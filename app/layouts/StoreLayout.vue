<template>
  <div class="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden">
    <main class=" w-full">
      <slot />
    </main>

    <nav class="fixed bottom-0 left-0 right-0 z-50 flex justify-center px-0">
      <div class="pchujoy-navbar">
        
        <NuxtLink to="/" class="nav-btn">
          <div class="circle-bg">
            <UIcon name="i-heroicons-home" class="w-6 h-6" />
          </div>
          <span class="label">Home</span>
        </NuxtLink>

        <NuxtLink to="/products" class="nav-btn">
          <div class="circle-bg">
            <UIcon name="i-heroicons-squares-2x2" class="w-6 h-6" />
          </div>
          <span class="label">Categories</span>
        </NuxtLink>

        <NuxtLink to="/shop" class="nav-btn-center">
          <div class="bag-glow">
            <div class="bag-inner">
              <UIcon name="i-heroicons-shopping-bag" class="w-7 h-7 text-white" />
            </div>
          </div>
          <span class="label-center">Cart</span>
        </NuxtLink>

        <NuxtLink to="/favorites" class="nav-btn">
          <div class="circle-bg">
            <UIcon name="i-heroicons-heart" class="w-6 h-6" />
          </div>
          <span class="label">Liked</span>
        </NuxtLink>

        <NuxtLink to="/user" class="nav-btn">
          <div class="circle-bg">
            <UIcon name="i-heroicons-user" class="w-6 h-6" />
          </div>
          <span class="label"> User </span>
        </NuxtLink>

      </div>
    </nav>
  </div>
</template>

<style scoped>
.pchujoy-navbar {
  /* background-color: orange; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(24, 24, 27, 0.9); 
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 50px 50px 0px 0px ; /* Efecto Píldora total */
  padding: 10px 10px calc(10px + env(safe-area-inset-bottom)) 10px;
  width: 100vw;
  max-width: 100%;
  height: 70px; /* Dejamos que el padding maneje la altura */
  min-height: 75px;
  box-shadow: 0 -10px 25px rgba(0, 0, 0, 0.5);
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
  background: #000000;
  border-radius: 50%;
  padding:8px;
  margin-bottom: 2px;
  color: #71717a; /* zinc-400 */
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-btn.router-link-active .circle-bg {
  color: #8b5cf6; /* Violeta activo */
  background: #111111;
}

.label {
  font-size: 9px; /* Letra más pequeña como pediste */
  font-weight: 500;
  color: #a1a1aa;
}

/* ESTILO BOTÓN CENTRAL */
.nav-btn-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: -20px; /* Eleva el botón ligeramente */
  text-decoration: none;
}

.bag-glow {
  background: linear-gradient(135deg, #8b5cf6, #6d28d9);
  padding: 2px; /* Borde de gradiente */
  border-radius: 50%;
  box-shadow: 0 8px 20px rgba(139, 92, 246, 0.4);
}

.bag-inner {
  background: #8b5cf6;
  border: 5px solid #050505; /* El "corte" con el fondo */
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