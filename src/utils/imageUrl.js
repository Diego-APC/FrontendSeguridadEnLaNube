const BASE = import.meta.env.VITE_API_URL?.replace('/api', '') 

//en local || 'http://localhost:3000';

export const getImageUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  return `${BASE}${path}`;
};