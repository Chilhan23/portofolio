import { useEffect } from 'react';

export default function useSEO(title, description) {
  useEffect(() => {
    document.title = `${title} | Muhammad Rayhan Ramadhan`;
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description || 'Portfolio of Muhammad Rayhan Ramadhan - Backend Developer & Cybersecurity Enthusiast based in Banda Aceh, Indonesia.';
  }, [title, description]);
}
