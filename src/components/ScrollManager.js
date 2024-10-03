import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const scrollToElement = (elementId) => {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (hash) {
      // If there's a hash, scroll to that element
      setTimeout(() => scrollToElement(hash.replace('#', '')), 0);
    } else if (pathname === '/') {
      // If it's the home page, allow normal scroll behavior
      return;
    } else {
      // For other pages, scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollManager;