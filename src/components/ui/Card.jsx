// src/components/ui/Card.jsx
export const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${className}`}>
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