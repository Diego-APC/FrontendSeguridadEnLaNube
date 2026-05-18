import { useState, useEffect } from 'react';
import { useProductStore } from '../../store/productStore';
import { ProductCard } from './components/ProductCard';
import { CategoryFilter } from './components/CategoryFilter';

export const CatalogPage = () => {
  const { products, fetchProducts, categories, fetchCategories, loading, error } = useProductStore();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchCategories();
  }, []);

  // Cada vez que cambia search o category, llama al backend
  useEffect(() => {
    const filters = {};
    if (selectedCategory) filters.category = selectedCategory;
    if (searchTerm.trim() !== '') filters.search = searchTerm.trim();
    fetchProducts(filters);
  }, [searchTerm, selectedCategory]);

  if (loading && products.length === 0) {
    return <div className="text-center py-10">Cargando productos...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Catálogo de productos</h1>

      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-800 rounded font-mono text-sm">
          ⚠️ Error del servidor: {error}
        </div>
        )}

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
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {products.length === 0 && !loading && (
        <div className="text-center py-10 text-gray-500">
          No se encontraron productos. Intenta con otra búsqueda o categoría.
        </div>
      )}
    </div>
  );
};