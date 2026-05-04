// src/features/catalog/components/CategoryFilter.jsx
export const CategoryFilter = ({ categories, selectedCategory, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <button
        onClick={() => onSelect('')}
        className={`px-3 py-1 rounded-full text-sm transition ${
          selectedCategory === '' 
            ? 'bg-blue-600 text-white' 
            : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300'
        }`}
      >
        Todos
      </button>
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-3 py-1 rounded-full text-sm transition ${
            selectedCategory === cat 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};