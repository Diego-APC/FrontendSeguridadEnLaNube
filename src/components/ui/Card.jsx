// src/components/ui/Card.jsx
export const Card = ({ children, className = '' }) => {
  return (
    <div className={`
      bg-white dark:bg-gray-800 
      rounded-lg 
      border border-gray-300 dark:border-gray-700
      shadow-md hover:shadow-lg 
      transition-all
      overflow-hidden 
      ${className}
    `}>
      {children}
    </div>
  );
};

Card.Image = ({ src, alt }) => (
  <img src={src} alt={alt} className="w-full h-48 object-cover" />
);

Card.Content = ({ children }) => (
  <div className="p-4">{children}</div>
);