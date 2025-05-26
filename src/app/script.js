export function toggleMode() {
  if (typeof window !== 'undefined') {
    const html = document.documentElement; // 'document' só está disponível no navegador

    html.classList.toggle("light"); // Alterna a classe 'light' no elemento <html>

}}