export function toggleMode() {
  if (typeof window !== 'undefined') {
    const html = document.documentElement; 

    html.classList.toggle("light"); 

}}