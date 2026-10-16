import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly jump to the top left of the page
    window.scrollTo(0, 0);
  }, [pathname]); // Runs every time the URL path changes

  return null; // This component doesn't render any visible UI
}
