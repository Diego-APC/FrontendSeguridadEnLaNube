// src/features/catalog/CatalogPage.jsx
import { useState, useMemo } from 'react';
import { products, getCategories } from '../../data/products';
import { ProductCard } from './components/ProductCard';
import { CategoryFilter } from './components/CategoryFilter';

export const CatalogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const categories = getCategories();

  const filteredProducts = useMemo(() => {
    let filtered = products;
    if (selectedCategory) {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(term) || 
        p.description.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term)
      );
    }
    return filtered;
  }, [selectedCategory, searchTerm]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Catálogo de productos</h1>
      
      <div className="mb-4">
        <input
  type="text"
  placeholder="Buscar productos..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="w-full md:w-96 px-4 py-2 border-2 border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
      </div>

      <CategoryFilter 
        categories={categories}
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-10 text-gray-500">
          No se encontraron productos. Intenta con otra búsqueda o categoría.
        </div>
      )}
    </div>
  );
};