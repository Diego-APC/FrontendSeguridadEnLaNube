// src/data/products.js
export const products = [
  // 1. Estructura y Obra Gruesa - Cemento, cal y yeso
  { id: 1, name: 'Cemento Gris 42.5 kg', price: 12500, category: 'Cemento, cal y yeso', subcategory: 'Cemento', image: 'https://placehold.co/400x300?text=Cemento+Gris', description: 'Ideal para hormigón armado. Bolsa 50 kg.', stock: 100 },
  { id: 2, name: 'Cemento Blanco 25 kg', price: 18500, category: 'Cemento, cal y yeso', subcategory: 'Cemento', image: 'https://placehold.co/400x300?text=Cemento+Blanco', description: 'Para acabados y pastinas.', stock: 50 },
  { id: 3, name: 'Cal Hidratada 20 kg', price: 4200, category: 'Cemento, cal y yeso', subcategory: 'Cal', image: 'https://placehold.co/400x300?text=Cal+Hidratada', description: 'Para mezclas y revoques.', stock: 80 },
  { id: 4, name: 'Yeso Aglomerante 30 kg', price: 3800, category: 'Cemento, cal y yeso', subcategory: 'Yeso', image: 'https://placehold.co/400x300?text=Yeso', description: 'Para interiores y molduras.', stock: 120 },
  
  // Bloques y ladrillos
  { id: 5, name: 'Ladrillo Común 18x18x33', price: 950, category: 'Bloques y ladrillos', subcategory: 'Ladrillos', image: 'https://placehold.co/400x300?text=Ladrillo+Comun', description: 'Unidad maciza para muros.', stock: 5000 },
  { id: 6, name: 'Ladrillo Hueco 12x18x33', price: 1100, category: 'Bloques y ladrillos', subcategory: 'Ladrillos', image: 'https://placehold.co/400x300?text=Ladrillo+Hueco', description: 'Mejor aislación térmica.', stock: 3000 },
  { id: 7, name: 'Block de Hormigón 20x20x40', price: 1800, category: 'Bloques y ladrillos', subcategory: 'Bloques', image: 'https://placehold.co/400x300?text=Block+Hormigon', description: 'Para muros portantes.', stock: 800 },
  { id: 8, name: 'Adoquín de Hormigón', price: 650, category: 'Bloques y ladrillos', subcategory: 'Adoquines', image: 'https://placehold.co/400x300?text=Adoquin', description: 'Para pavimentos exteriores.', stock: 2000 },
  
  // Hierro y acero
  { id: 9, name: 'Barra de Acero 12 mm x 12 m', price: 7800, category: 'Hierro y acero', subcategory: 'Barras', image: 'https://placehold.co/400x300?text=Hierro+12mm', description: 'Corrugado, para estructuras.', stock: 200 },
  { id: 10, name: 'Malla Electrosoldada 2.5x5 m', price: 25500, category: 'Hierro y acero', subcategory: 'Mallas', image: 'https://placehold.co/400x300?text=Malla+Electrosoldada', description: 'Para losas y contrapisos.', stock: 40 },
  { id: 11, name: 'Viga IPB 120 x 6 m', price: 45600, category: 'Hierro y acero', subcategory: 'Perfiles', image: 'https://placehold.co/400x300?text=Viga+IPB', description: 'Perfil estructural pesado.', stock: 15 },
  
  // Áridos
  { id: 12, name: 'Arena Fina por m³', price: 4500, category: 'Áridos', subcategory: 'Arena', image: 'https://placehold.co/400x300?text=Arena+Fina', description: 'Para revoques y terminaciones.', stock: 30 },
  { id: 13, name: 'Grava 20/30 por m³', price: 5200, category: 'Áridos', subcategory: 'Grava', image: 'https://placehold.co/400x300?text=Grava', description: 'Para hormigón.', stock: 25 },
  
  // Maderas
  { id: 14, name: 'Tabla de Pino 1"x4"x3m', price: 2100, category: 'Maderas', subcategory: 'Tablas', image: 'https://placehold.co/400x300?text=Madera+Pino', description: 'Para encofrados.', stock: 300 },
  { id: 15, name: 'Fenólico 18mm 1.22x2.44m', price: 18900, category: 'Maderas', subcategory: 'Fenólico', image: 'https://placehold.co/400x300?text=Fenolico', description: 'Panel resistente al agua.', stock: 50 },
  
  // 2. Cubiertas y Techos - Tejas
  { id: 16, name: 'Teja de Cemento (x10)', price: 12500, category: 'Tejas', subcategory: 'Cemento', image: 'https://placehold.co/400x300?text=Teja+Cemento', description: 'Modelo francés.', stock: 500 },
  { id: 17, name: 'Teja Cerámica (x10)', price: 15800, category: 'Tejas', subcategory: 'Cerámica', image: 'https://placehold.co/400x300?text=Teja+Ceramica', description: 'Color terracota.', stock: 400 },
  
  // Chapa
  { id: 18, name: 'Chapa Acanalada Galvanizada 0.5mm', price: 11200, category: 'Chapa y cubiertas metálicas', subcategory: 'Chapa', image: 'https://placehold.co/400x300?text=Chapa+Acanalada', description: 'Por metro lineal.', stock: 200 },
  
  // Aislantes
  { id: 19, name: 'Lana de Vidrio 50mm (rollo 5m²)', price: 14500, category: 'Aislantes', subcategory: 'Lana de vidrio', image: 'https://placehold.co/400x300?text=Lana+Vidrio', description: 'Aislante térmico/acústico.', stock: 60 },
  
  // 3. Revestimientos
  { id: 20, name: 'Porcelanato 60x60 (caja 2m²)', price: 18900, category: 'Revestimientos cerámicos', subcategory: 'Porcelanato', image: 'https://placehold.co/400x300?text=Porcelanato', description: 'Acabado brillante.', stock: 150 },
  { id: 21, name: 'Baldosa de Cemento 20x20 (caja 1m²)', price: 6500, category: 'Pisos', subcategory: 'Baldosas', image: 'https://placehold.co/400x300?text=Baldosa+Cemento', description: 'Estilo hidráulico.', stock: 80 },
  
  // 4. Pinturas
  { id: 22, name: 'Látex lavable blanco x 20L', price: 23400, category: 'Pinturas', subcategory: 'Látex', image: 'https://placehold.co/400x300?text=Pintura+Latex', description: 'Para interiores.', stock: 40 },
  { id: 23, name: 'Esmalte Sintético Gris x 4L', price: 8900, category: 'Pinturas', subcategory: 'Esmalte', image: 'https://placehold.co/400x300?text=Esmalte+Sintetico', description: 'Para exteriores y metales.', stock: 30 },
  
  // 5. Instalaciones - Plomería
  { id: 24, name: 'Caño PVC desagüe 110mm x 3m', price: 3200, category: 'Plomería', subcategory: 'PVC', image: 'https://placehold.co/400x300?text=Caño+PVC', description: 'Para cloacas.', stock: 100 },
  { id: 25, name: 'Grifería monocomando cocina', price: 12500, category: 'Plomería', subcategory: 'Grifería', image: 'https://placehold.co/400x300?text=Grifería', description: 'Acero inoxidable.', stock: 25 },
  
  // Electricidad
  { id: 26, name: 'Cable unipolar 2.5mm (rollo 100m)', price: 18500, category: 'Electricidad', subcategory: 'Cables', image: 'https://placehold.co/400x300?text=Cable+2.5', description: 'Para circuitos.', stock: 30 },
  { id: 27, name: 'Interruptor simple', price: 450, category: 'Electricidad', subcategory: 'Interruptores', image: 'https://placehold.co/400x300?text=Interruptor', description: 'Línea blanca.', stock: 200 },
  
  // 6. Ferretería Básica
  { id: 28, name: 'Tornillo autoperforante 1.5" (caja 100u)', price: 1200, category: 'Fijaciones', subcategory: 'Tornillos', image: 'https://placehold.co/400x300?text=Tornillos', description: 'Para chapa.', stock: 500 },
  { id: 29, name: 'Martillo de carpintero', price: 3800, category: 'Herramientas manuales', subcategory: 'Martillos', image: 'https://placehold.co/400x300?text=Martillo', description: 'Mango de fibra.', stock: 60 },
  
  // 7. Aberturas
  { id: 30, name: 'Puerta de madera 80x200cm', price: 34500, category: 'Puertas y ventanas', subcategory: 'Puertas', image: 'https://placehold.co/400x300?text=Puerta+Madera', description: 'Modelo clásica.', stock: 15 },
  { id: 31, name: 'Ventana corrediza aluminio 1x1m', price: 42900, category: 'Puertas y ventanas', subcategory: 'Ventanas', image: 'https://placehold.co/400x300?text=Ventana+Aluminio', description: 'DVH 4+12+4.', stock: 10 },
  
  // 8. Andamios
  { id: 32, name: 'Andamio modular 1.5x2m (pórtico)', price: 56900, category: 'Andamios', subcategory: 'Andamios', image: 'https://placehold.co/400x300?text=Andamio', description: 'Capacidad 500 kg.', stock: 5 },
  
  // 9. Jardinería
  { id: 33, name: 'Tierra negra por m³', price: 3200, category: 'Jardinería', subcategory: 'Tierra', image: 'https://placehold.co/400x300?text=Tierra+negra', description: 'Para relleno.', stock: 40 },
  
  // 10. Adhesivos
  { id: 34, name: 'Pegamento cerámico 25 kg', price: 9800, category: 'Adhesivos', subcategory: 'Pegamentos', image: 'https://placehold.co/400x300?text=Pegamento', description: 'Para pisos y paredes.', stock: 70 },
  { id: 35, name: 'Sellador de silicona traslúcido', price: 1850, category: 'Adhesivos', subcategory: 'Siliconas', image: 'https://placehold.co/400x300?text=Silicona', description: 'Para juntas.', stock: 150 }
];

// Función para obtener categorías únicas (ordenadas como aparecen en el array)
export const getCategories = () => {
  const categoriesSet = new Set(products.map(p => p.category));
  // Orden personalizado aproximado
  const order = [
    'Cemento, cal y yeso', 'Bloques y ladrillos', 'Hierro y acero', 'Áridos', 'Maderas',
    'Tejas', 'Chapa y cubiertas metálicas', 'Aislantes',
    'Revestimientos cerámicos', 'Pisos', 'Pinturas',
    'Plomería', 'Electricidad', 'Fijaciones', 'Herramientas manuales',
    'Puertas y ventanas', 'Andamios', 'Jardinería', 'Adhesivos'
  ];
  const sorted = Array.from(categoriesSet).sort((a,b) => {
    const iA = order.indexOf(a);
    const iB = order.indexOf(b);
    if (iA === -1 && iB === -1) return a.localeCompare(b);
    if (iA === -1) return 1;
    if (iB === -1) return -1;
    return iA - iB;
  });
  return sorted;
};