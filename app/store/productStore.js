import { defineStore } from 'pinia'

// pagina para exportar los productos
export const useProductStore = defineStore('products', {
  state: () => ({
    allProducts: [
      // CATEGORÍA: MONITORES
      { id: 'm1', name: 'Samsung Odyssey Neo G9', price: 1500, category: 'Monitores', brand: 'Samsung', image: 'monitor1.png', gallery: [], tag: 'Mini-LED' },
      { id: 'm2', name: 'ASUS ROG Swift 540Hz', price: 950, category: 'Monitores', brand: 'ASUS', image: 'monitor2.png', gallery: [], tag: 'Esports' },
      { id: 'm3', name: 'LG UltraGear OLED 27"', price: 1100, category: 'Monitores', brand: 'LG', image: 'monitor3.png', gallery: [], tag: '240Hz' },
      { id: 'm4', name: 'Dell UltraSharp U2723QE', price: 600, category: 'Monitores', brand: 'Dell', image: 'monitor4.png', gallery: [], tag: '4K IPS' },
      { id: 'm5', name: 'Alienware AW3423DW', price: 1800, category: 'Monitores', brand: 'Alienware', image: 'monitor5.png', gallery: [], tag: 'QD-OLED' },
      { id: 'm6', name: 'MSI Optix G241', price: 550, category: 'Monitores', brand: 'MSI', image: 'monitor6.png', gallery: [], tag: 'FHD' },

      // CATEGORÍA: PCs
      { id: 'pc1', name: 'Alienware Aurora R16', price: 4500, category: 'PCs', brand: 'Alienware', image: 'pc1.png', gallery: [], tag: 'RTX 4090' },
      { id: 'pc2', name: 'Corsair One i500', price: 3200, category: 'PCs', brand: 'Corsair', image: 'pc2.png', gallery: [], tag: 'Compact' },
      { id: 'pc3', name: 'HP Z8 Fury G5', price: 5500, category: 'PCs', brand: 'HP', image: 'pc3.png', gallery: [], tag: 'Workstation' },
      { id: 'pc4', name: 'NZXT Player: One', price: 2100, category: 'PCs', brand: 'NZXT', image: 'pc4.png', gallery: [], tag: 'Starter' },
      { id: 'pc5', name: 'ASUS ROG Strix G16CH', price: 3800, category: 'PCs', brand: 'ASUS', image: 'pc5.png', gallery: [], tag: 'RGB' },
      { id: 'pc6', name: 'Origin PC Millennium', price: 4100, category: 'PCs', brand: 'Origin', image: 'pc6.png', gallery: [], tag: 'Liquid' },

      // CATEGORÍA: LAPTOPS
      { id: 'lp1', name: 'MacBook Air M3', price: 3200, category: 'Laptops', brand: 'Apple', image: 'lp1.png', gallery: [], tag: 'Ultra' },
      { id: 'lp2', name: 'Razer Blade 16', price: 6200, category: 'Laptops', brand: 'Razer', image: 'lp2.png', gallery: [], tag: 'RTX 4090' },
      { id: 'lp3', name: 'ASUS Zephyrus G14', price: 4500, category: 'Laptops', brand: 'ASUS', image: 'lp3.png', gallery: [], tag: 'OLED' },
      { id: 'lp4', name: 'Lenovo Legion Pro 7i', price: 2800, category: 'Laptops', brand: 'Lenovo', image: 'lp4.png', gallery: [], tag: 'Gaming' },
      { id: 'lp5', name: 'Dell XPS 13', price: 3500, category: 'Laptops', brand: 'Dell', image: 'lp5.png', gallery: [], tag: 'Premium' },
      { id: 'lp6', name: 'MSI Titan 18 HX', price: 4900, category: 'Laptops', brand: 'MSI', image: 'lp6.png', gallery: [], tag: 'Extreme' },

      // CATEGORÍA: MOUSES (Marca Rok)
      { id: 'ms1', name: 'Logitech G Pro X Superlight 2', price: 180, category: 'Mouses', brand: 'Logitech', image: 'ms1.png', gallery: [], tag: '60g' },
      { id: 'ms2', name: 'Razer DeathAdder V3 Pro', price: 120, category: 'Mouses', brand: 'Razer', image: 'ms2.png', gallery: [], tag: 'Light' },
      { id: 'ms3', name: 'SteelSeries Aerox 3', price: 250, category: 'Mouses', brand: 'SteelSeries', image: 'ms3.png', gallery: [], tag: 'Ghost' },
      { id: 'ms4', name: 'Logitech MX Master 3S', price: 80, category: 'Mouses', brand: 'Logitech', image: 'ms4.png', gallery: [], tag: 'Productivity' },
      { id: 'ms5', name: 'Finalmouse UltralightX', price: 150, category: 'Mouses', brand: 'Finalmouse', image: 'ms5.png', gallery: [], tag: 'Carbon' },
      { id: 'ms6', name: 'Zowie EC2-CW', price: 140, category: 'Mouses', brand: 'Zowie', image: 'ms6.png', gallery: [], tag: 'Esports' },

      // CATEGORÍA: AUDÍFONOS (Marca Rok)
      { id: 'au1', name: 'Sony WH-1000XM5', price: 120, category: 'Audífonos', brand: 'Sony', image: 'au1.png', gallery: [], tag: 'ANC' },
      { id: 'au2', name: 'SteelSeries Arctis Nova Pro', price: 450, category: 'Audífonos', brand: 'SteelSeries', image: 'au2.png', gallery: [], tag: 'Hi-Fi' },
      { id: 'au3', name: 'Beyerdynamic DT 990 Pro', price: 300, category: 'Audífonos', brand: 'Beyerdynamic', image: 'au3.png', tag: 'Studio' },
      { id: 'au4', name: 'Apple AirPods Max', price: 220, category: 'Audífonos', brand: 'Apple', image: 'au4.png', gallery: [], tag: 'Silver' },
      { id: 'au5', name: 'HyperX Cloud Alpha Wireless', price: 550, category: 'Audífonos', brand: 'HyperX', image: 'au5.png', gallery: [], tag: '300h' },
      { id: 'au6', name: 'Sennheiser HD 660S2', price: 380, category: 'Audífonos', brand: 'Sennheiser', image: 'au6.png', gallery: [], tag: 'Audiophile' },

      // CATEGORÍA: TECLADOS
      { id: 'tk1', name: 'Wooting 60HE', price: 250, category: 'Teclados', brand: 'Wooting', image: 'tk1.png', gallery: [], tag: 'Analog' },
      { id: 'tk2', name: 'Keychron Q1 Pro', price: 210, category: 'Teclados', brand: 'Keychron', image: 'tk2.png', gallery: [], tag: 'Mechanical' },
      { id: 'tk3', name: 'Razer Huntsman V3 Pro', price: 280, category: 'Teclados', brand: 'Razer', image: 'tk3.png', gallery: [], tag: 'TKL' },
      { id: 'tk4', name: 'Logitech G915 TKL', price: 100, category: 'Teclados', brand: 'Logitech', image: 'tk4.png', gallery: [], tag: 'Wireless' },
      { id: 'tk5', name: 'SteelSeries Apex Pro Mini', price: 450, category: 'Teclados', brand: 'SteelSeries', image: 'tk5.png', gallery: [], tag: 'Rapid' },
      { id: 'tk6', name: 'Corsair K70 RGB TKL', price: 320, category: 'Teclados', brand: 'Corsair', image: 'tk6.png', gallery: [], tag: 'Esports' },

      // CATEGORÍA: IPHONES (CON GALERÍA CRUZADA PARA PRUEBAS)
      { id: 'ph1', name: 'iPhone 14', price: 4800, category: 'iPhones', brand: 'Apple', image: 'iphone14blue.png', gallery: ['iphone15pro.png', 'iphone16.webp'], tag: 'Performance' },
      { id: 'ph2', name: 'iPhone 15 Pro', price: 4200, category: 'iPhones', brand: 'Apple', image: 'iphone15pro.png', gallery: ['iphone16.webp', 'iphone17pro.webp'], tag: 'Pro' },
      { id: 'ph3', name: 'iPhone 16', price: 3600, category: 'iPhones', brand: 'Apple', image: 'iphone16.webp', gallery: ['iphone17.jpg', 'iphoneair.webp'], tag: 'Battery' },
      { id: 'ph4', name: 'iPhone 17', price: 3200, category: 'iPhones', brand: 'Apple', image: 'iphone17.jpg', gallery: ['iphone14blue.png', 'iphone15pro.png'], tag: 'Dynamic' },
      { id: 'ph5', name: 'iPhone 17 Pro', price: 3800, category: 'iPhones', brand: 'Apple', image: 'iphone17pro.webp', gallery: ['iphone16.webp', 'iphoneair.webp'], tag: 'Titanium' },
      { id: 'ph6', name: 'iPhone Air', price: 2500, category: 'iPhones', brand: 'Apple', image: 'iphoneair.webp', gallery: ['iphone17pro.webp', 'iphone14blue.png'], tag: 'Air' },
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