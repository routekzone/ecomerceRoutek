import { defineStore } from 'pinia'

// pagina para exportar los productos
export const useProductStore = defineStore('products', {
  state: () => ({
    allProducts: [
      // CATEGORÍA: MONITORES (6 productos)
      { id: 'm1', name: 'Rok UltraWide 34"', price: 1500, category: 'Monitores', brand: 'Rok', image: 'monitor1.png', tag: 'Pro' },
      { id: 'm2', name: 'Rok Swift 24" 240Hz', price: 950, category: 'Monitores', brand: 'Rok', image: 'monitor2.png', tag: 'Esports' },
      { id: 'm3', name: 'Rok Curve 27"', price: 1100, category: 'Monitores', brand: 'Rok', image: 'monitor3.png', tag: '4K' },
      { id: 'm4', name: 'Rok Slim Office', price: 600, category: 'Monitores', brand: 'Rok', image: 'monitor4.png', tag: 'Office' },
      { id: 'm5', name: 'Rok Vision Plus', price: 1800, category: 'Monitores', brand: 'Rok', image: 'monitor5.png', tag: 'OLED' },
      { id: 'm6', name: 'Rok Gaming Basic', price: 550, category: 'Monitores', brand: 'Rok', image: 'monitor6.png', tag: 'Sale' },

      // CATEGORÍA: PCs (6 productos)
      { id: 'pc1', name: 'Routek Beast v1', price: 4500, category: 'PCs', brand: 'Routek', image: 'pc1.png', tag: 'High-End' },
      { id: 'pc2', name: 'Routek Mini-ITX', price: 3200, category: 'PCs', brand: 'Routek', image: 'pc2.png', tag: 'Compact' },
      { id: 'pc3', name: 'Routek Workstation', price: 5500, category: 'PCs', brand: 'Routek', image: 'pc3.png', tag: 'Work' },
      { id: 'pc4', name: 'Routek Starter G1', price: 2100, category: 'PCs', brand: 'Routek', image: 'pc4.png', tag: 'Budget' },
      { id: 'pc5', name: 'Routek RGB Master', price: 3800, category: 'PCs', brand: 'Routek', image: 'pc5.png', tag: 'RGB' },
      { id: 'pc6', name: 'Routek Silent Pro', price: 4100, category: 'PCs', brand: 'Routek', image: 'pc6.png', tag: 'Quiet' },

      // CATEGORÍA: LAPTOPS (6 productos)
      { id: 'lp1', name: 'Rok Book Air', price: 3200, category: 'Laptops', brand: 'Rok', image: 'lp1.png', tag: 'Ultra' },
      { id: 'lp2', name: 'Rok Titan 17"', price: 6200, category: 'Laptops', brand: 'Rok', image: 'lp2.png', tag: 'Gaming' },
      { id: 'lp3', name: 'Rok Studio 14"', price: 4500, category: 'Laptops', brand: 'Rok', image: 'lp3.png', tag: 'Design' },
      { id: 'lp4', name: 'Rok Flow Flip', price: 2800, category: 'Laptops', brand: 'Rok', image: 'lp4.png', tag: '2-in-1' },
      { id: 'lp5', name: 'Rok Pulse G5', price: 3500, category: 'Laptops', brand: 'Rok', image: 'lp5.png', tag: 'Fast' },
      { id: 'lp6', name: 'Rok Carbon X', price: 4900, category: 'Laptops', brand: 'Rok', image: 'lp6.png', tag: 'Premium' },

      // CATEGORÍA: MOUSES (6 productos)
      { id: 'ms1', name: 'Rok Glide Wireless', price: 180, category: 'Mouses', brand: 'Rok', image: 'ms1.png', tag: 'Light' },
      { id: 'ms2', name: 'Rok Click Pro', price: 120, category: 'Mouses', brand: 'Rok', image: 'ms2.png', tag: 'Silent' },
      { id: 'ms3', name: 'Rok Precision X', price: 250, category: 'Mouses', brand: 'Rok', image: 'ms3.png', tag: 'DPI+' },
      { id: 'ms4', name: 'Rok Mini Travel', price: 80, category: 'Mouses', brand: 'Rok', image: 'ms4.png', tag: 'Travel' },
      { id: 'ms5', name: 'Rok Ergo Design', price: 150, category: 'Mouses', brand: 'Rok', image: 'ms5.png', tag: 'Ergo' },
      { id: 'ms6', name: 'Rok RGB Racer', price: 140, category: 'Mouses', brand: 'Rok', image: 'ms6.png', tag: 'RGB' },

      // CATEGORÍA: AUDÍFONOS (6 productos)
      { id: 'au1', name: 'Rok Buds Wireless', price: 120, category: 'Audífonos', brand: 'Rok', image: 'au1.png', tag: 'Blanco' },
      { id: 'au2', name: 'Rok Studio Headset', price: 450, category: 'Audífonos', brand: 'Rok', image: 'au2.png', tag: 'Hi-Fi' },
      { id: 'au3', name: 'Rok Bass Extreme', price: 300, category: 'Audífonos', brand: 'Rok', image: 'au3.png', tag: 'Bass' },
      { id: 'au4', name: 'Rok Air Pods G2', price: 220, category: 'Audífonos', brand: 'Rok', image: 'au4.png', tag: 'Sport' },
      { id: 'au5', name: 'Rok Noise Cancel', price: 550, category: 'Audífonos', brand: 'Rok', image: 'au5.png', tag: 'ANC' },
      { id: 'au6', name: 'Rok Stream Mic+', price: 380, category: 'Audífonos', brand: 'Rok', image: 'au6.png', tag: 'Stream' },

      // CATEGORÍA: TECLADOS (6 productos)
      { id: 'tk1', name: 'Routek Mechanical K1', price: 250, category: 'Teclados', brand: 'Routek', image: 'tk1.png', tag: 'RGB' },
      { id: 'tk2', name: 'Routek Ghost 60%', price: 210, category: 'Teclados', brand: 'Routek', image: 'tk2.png', tag: 'Clicky' },
      { id: 'tk3', name: 'Routek Stealth TKL', price: 280, category: 'Teclados', brand: 'Routek', image: 'tk3.png', tag: 'Linear' },
      { id: 'tk4', name: 'Routek Office Soft', price: 100, category: 'Teclados', brand: 'Routek', image: 'tk4.png', tag: 'Membrane' },
      { id: 'tk5', name: 'Routek Metal Case', price: 450, category: 'Teclados', brand: 'Routek', image: 'tk5.png', tag: 'Custom' },
      { id: 'tk6', name: 'Routek Wireless Air', price: 320, category: 'Teclados', brand: 'Routek', image: 'tk6.png', tag: 'Slim' },

      // CATEGORÍA: MOUSEPADS (6 productos)
      { id: 'mp1', name: 'Rok Pad Speed XL', price: 90, category: 'Mousepads', brand: 'Rok', image: 'mp1.png', tag: 'Fast' },
      { id: 'mp2', name: 'Rok Pad Control M', price: 50, category: 'Mousepads', brand: 'Rok', image: 'mp2.png', tag: 'Control' },
      { id: 'mp3', name: 'Rok Pad RGB Glow', price: 150, category: 'Mousepads', brand: 'Rok', image: 'mp3.png', tag: 'RGB' },
      { id: 'mp4', name: 'Rok Pad Extended 1m', price: 120, category: 'Mousepads', brand: 'Rok', image: 'mp4.png', tag: 'Table' },
      { id: 'mp5', name: 'Rok Pad Artist Edition', price: 110, category: 'Mousepads', brand: 'Rok', image: 'mp5.png', tag: 'Art' },
      { id: 'mp6', name: 'Rok Pad Basic Black', price: 30, category: 'Mousepads', brand: 'Rok', image: 'mp6.png', tag: 'Clean' },
    ]
  }),
  getters: {
    // 1. Devuelve solo los 4 primeros para la sección "Populares"
    getPopulars: (state) => state.allProducts.slice(0, 4),
    
    // 2. Busca un producto único (usado en [id].vue)
    getById: (state) => (id) => state.allProducts.find(p => p.id === id),
    
    // 3. Filtra por categoría (usado para los botones de Monitores, Mouses, etc.)
    getByCategory: (state) => (categoryName) => 
      state.allProducts.filter(p => p.category === categoryName)
  }
})