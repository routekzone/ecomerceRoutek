import { defineStore } from 'pinia'

// pagina para exportar los productos
export const useProductStore = defineStore('products', {
  state: () => ({
   allProducts: [
      // CATEGORÍA: MONITORES
      { id: 'm1', name: 'Samsung Odyssey Neo G9', price: 1500, oldPrice: 1850, category: 'Monitores', brand: 'Samsung', image: 'monitor1.png', gallery: [], tag: 'Mini-LED', isPopular: false },
      { id: 'm2', name: 'ASUS ROG Swift 540Hz', price: 950, oldPrice: 1100, category: 'Monitores', brand: 'ASUS', image: 'monitor2.png', gallery: [], tag: 'Esports', isPopular: false },
      { id: 'm3', name: 'LG UltraGear OLED 27"', price: 1100, category: 'Monitores', brand: 'LG', image: 'monitor3.png', gallery: [], tag: '240Hz', isPopular: false },
      { id: 'm4', name: 'Dell UltraSharp U2723QE', price: 600, category: 'Monitores', brand: 'Dell', image: 'monitor4.png', gallery: [], tag: '4K IPS', isPopular: false },
      { id: 'm5', name: 'Alienware AW3423DW', price: 1800, oldPrice: 2100, category: 'Monitores', brand: 'Alienware', image: 'monitor5.png', gallery: [], tag: 'QD-OLED', isPopular: true },
      { id: 'm6', name: 'MSI Optix G241', price: 550, category: 'Monitores', brand: 'MSI', image: 'monitor6.png', gallery: [], tag: 'FHD', isPopular: false },

      // CATEGORÍA: PCs (Aquí es donde brilla Routek/Rok)
      { id: 'pc1', name: 'Rok Beast V1 Ultra', price: 4500, oldPrice: 5200, category: 'PCs', brand: 'Rok', image: 'pc1.png', gallery: [], tag: 'RTX 4090', isPopular: false },
      { id: 'pc2', name: 'Rok Compact Stealth', price: 3200, category: 'PCs', brand: 'Rok', image: 'pc2.png', gallery: [], tag: 'Compact', isPopular: false },
      { id: 'pc3', name: 'HP Z8 Fury G5', price: 5500, category: 'PCs', brand: 'HP', image: 'pc3.png', gallery: [], tag: 'Workstation', isPopular: false },
      { id: 'pc4', name: 'NZXT Player: One', price: 2100, oldPrice: 2400, category: 'PCs', brand: 'NZXT', image: 'pc4.png', gallery: [], tag: 'Starter', isPopular: false },
      { id: 'pc5', name: 'ASUS ROG Strix G16CH', price: 3800, category: 'PCs', brand: 'ASUS', image: 'pc5.png', gallery: [], tag: 'RGB', isPopular: false },
      { id: 'pc6', name: 'Rok Liquid Genesis', price: 4100, oldPrice: 4600, category: 'PCs', brand: 'Rok', image: 'pc6.png', gallery: [], tag: 'Liquid', isPopular: true },

      // CATEGORÍA: LAPTOPS
      { id: 'lp1', name: 'MacBook Air M3', price: 3200, category: 'Laptops', brand: 'Apple', image: 'lp1.png', gallery: [], tag: 'Ultra', isPopular: true },
      { id: 'lp2', name: 'Razer Blade 16', price: 6200, oldPrice: 6800, category: 'Laptops', brand: 'Razer', image: 'lp2.png', gallery: [], tag: 'RTX 4090', isPopular: true },
      { id: 'lp3', name: 'ASUS Zephyrus G14', price: 4500, category: 'Laptops', brand: 'ASUS', image: 'lp3.png', gallery: [], tag: 'OLED', isPopular: false },
      { id: 'lp4', name: 'Lenovo Legion Pro 7i', price: 2800, category: 'Laptops', brand: 'Lenovo', image: 'lp4.png', gallery: [], tag: 'Gaming', isPopular: false },
      { id: 'lp5', name: 'Dell XPS 13', price: 3500, category: 'Laptops', brand: 'Dell', image: 'lp5.png', gallery: [], tag: 'Premium', isPopular: false },
      { id: 'lp6', name: 'MSI Titan 18 HX', price: 4900, oldPrice: 5500, category: 'Laptops', brand: 'MSI', image: 'lp6.png', gallery: [], tag: 'Extreme', isPopular: true },

      // CATEGORÍA: MOUSES (Aprovechamos marca Rok)
      { id: 'ms1', name: 'Rok Glide Superlight', price: 180, oldPrice: 230, category: 'Mouses', brand: 'Rok', image: 'ms1.png', gallery: [], tag: '60g', isPopular: true },
      { id: 'ms2', name: 'Razer DeathAdder V3 Pro', price: 120, category: 'Mouses', brand: 'Razer', image: 'ms2.png', gallery: [], tag: 'Light', isPopular: false },
      { id: 'ms3', name: 'SteelSeries Aerox 3', price: 250, oldPrice: 300, category: 'Mouses', brand: 'SteelSeries', image: 'ms3.png', gallery: [], tag: 'Ghost', isPopular: true },
      { id: 'ms4', name: 'Logitech MX Master 3S', price: 80, category: 'Mouses', brand: 'Logitech', image: 'ms4.png', gallery: [], tag: 'Productivity', isPopular: false },
      { id: 'ms5', name: 'Rok Carbon Ultra', price: 150, oldPrice: 190, category: 'Mouses', brand: 'Rok', image: 'ms5.png', gallery: [], tag: 'Carbon', isPopular: true },
      { id: 'ms6', name: 'Zowie EC2-CW', price: 140, category: 'Mouses', brand: 'Zowie', image: 'ms6.png', gallery: [], tag: 'Esports', isPopular: false },

      // CATEGORÍA: AUDÍFONOS
      { id: 'au1', name: 'Rok Sound ANC-5', price: 120, oldPrice: 180, category: 'Audífonos', brand: 'Rok', image: 'au1.png', gallery: [], tag: 'ANC', isPopular: true },
      { id: 'au2', name: 'SteelSeries Arctis Nova Pro', price: 450, category: 'Audífonos', brand: 'SteelSeries', image: 'au2.png', gallery: [], tag: 'Hi-Fi', isPopular: true },
      { id: 'au3', name: 'Beyerdynamic DT 990 Pro', price: 300, category: 'Audífonos', brand: 'Beyerdynamic', image: 'au3.png', gallery: [], tag: 'Studio', isPopular: false },
      { id: 'au4', name: 'Apple AirPods Max', price: 220, oldPrice: 280, category: 'Audífonos', brand: 'Apple', image: 'au4.png', gallery: [], tag: 'Silver', isPopular: true },
      { id: 'au5', name: 'HyperX Cloud Alpha Wireless', price: 550, category: 'Audífonos', brand: 'HyperX', image: 'au5.png', gallery: [], tag: '300h', isPopular: false },
      { id: 'au6', name: 'Rok Audio Audiophile X', price: 380, oldPrice: 450, category: 'Audífonos', brand: 'Rok', image: 'au6.png', gallery: [], tag: 'Audiophile', isPopular: true },

      // CATEGORÍA: IPHONES
      { id: 'ph1', name: 'iPhone 14 Blue', price: 4800, category: 'iPhones', brand: 'Apple', image: 'iphone14blue.png', gallery: ['iphone15pro.png'], tag: 'Performance', isPopular: false },
      { id: 'ph2', name: 'iPhone 15 Pro', price: 4200, oldPrice: 4800, category: 'iPhones', brand: 'Apple', image: 'iphone15pro.png', gallery: ['iphone16.webp'], tag: 'Pro', isPopular: true },
      { id: 'ph3', name: 'iPhone 16 Ultra', price: 3600, category: 'iPhones', brand: 'Apple', image: 'iphone16.webp', gallery: ['iphone17.jpg'], tag: 'Battery', isPopular: true },
      { id: 'ph4', name: 'iPhone 17 Plus', price: 3200, oldPrice: 3500, category: 'iPhones', brand: 'Apple', image: 'iphone17.jpg', gallery: [], tag: 'Dynamic', isPopular: false },
      { id: 'ph5', name: 'iPhone 17 Pro Max', price: 3800, category: 'iPhones', brand: 'Apple', image: 'iphone17pro.webp', gallery: [], tag: 'Titanium', isPopular: true },
      { id: 'ph6', name: 'iPhone Air Slim', price: 2500, oldPrice: 2900, category: 'iPhones', brand: 'Apple', image: 'iphoneair.webp', gallery: [], tag: 'Air', isPopular: true },
    ]
  }),
  getters: {
    // Retorna productos marcados como populares (Lo más vendido)
    getMasVendidos: (state) => state.allProducts.filter(p => p.isPopular),

    // Retorna solo los que tienen descuento activo (Ofertas Hot)
    getOfertasHot: (state) => state.allProducts.filter(p => p.oldPrice && p.oldPrice > p.price),

    // Retorna los últimos 6 ingresados
    getNuevosIngresos: (state) => [...state.allProducts].reverse().slice(0, 6),

    // Retorna productos de tu marca Rok
    getExclusivosRok: (state) => state.allProducts.filter(p => p.brand.toLowerCase() === 'rok'),

    getById: (state) => (id) => state.allProducts.find(p => p.id === id),
    
    getByCategory: (state) => (categoryName) =>
      state.allProducts.filter(p => p.category.toLowerCase() === categoryName.toLowerCase())
  }
})