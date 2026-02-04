/* Global script to support navigation highlighting and dynamic content */

document.addEventListener('DOMContentLoaded', () => {
  // Highlight navigation item based on current page
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    if (link.getAttribute('href') === window.location.pathname ||
        (window.location.pathname === '/' && link.getAttribute('href') === '/index.html')) {
      link.classList.add('active');
    }
  });

  // If there is an element with id "comparables-table", load comparables data
  const comparablesTable = document.getElementById('comparables-table');
  if (comparablesTable) {
    // Use a relative path so the JSON loads correctly on platforms like Vercel
    // Always fetch the data from the root-level assets directory.  Using an
    // absolute path starting with a slash ensures that even when this script
    // runs on nested pages (e.g. /pages/location-analysis.html) the
    // comparables JSON is pulled from /assets/comparables.json rather than
    // attempting to resolve relative to the current directory.
    fetch('/assets/comparables.json')
      .then(response => response.json())
      .then(data => {
        // Build table rows
        let rows = '';
        data.forEach(item => {
          rows += `<tr><td>${item.location}</td><td>${item.area.toLocaleString('cs-CZ')} m²</td><td>${formatCurrency(item.price)}</td><td>${formatCurrency(item.price_per_m2)} / m²</td><td>${item.description}</td></tr>`;
        });
        comparablesTable.querySelector('tbody').innerHTML = rows;
      })
      .catch(err => {
        console.error('Nelze načíst data:', err);
      });
  }
});

// Helper function to format currency CZK
function formatCurrency(value) {
  return new Intl.NumberFormat('cs-CZ', { style: 'currency', currency: 'CZK', minimumFractionDigits: 0 }).format(value);
}
