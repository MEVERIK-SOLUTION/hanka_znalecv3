/**
 * Global JavaScript for Hanka Znalec v3 Application
 * 
 * This script handles:
 * - Navigation highlighting based on current page
 * - Dynamic loading and display of comparable properties data
 * - Currency formatting utilities
 * 
 * @author Analytický tým - MEVERIK SOLUTION
 * @version 3.0.0
 */

document.addEventListener('DOMContentLoaded', () => {
  // Highlight navigation item based on current page
  highlightActiveNavigation();
  
  // Load comparables data if table exists on page
  loadComparablesData();
});

/**
 * Highlights the active navigation link based on current page URL
 */
function highlightActiveNavigation() {
  const navLinks = document.querySelectorAll('nav a');
  const currentPath = window.location.pathname;
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath || 
        (currentPath === '/' && linkPath === '/index.html')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

/**
 * Loads and displays comparable properties data in table format
 */
function loadComparablesData() {
  const comparablesTable = document.getElementById('comparables-table');
  
  if (!comparablesTable) {
    return; // Table doesn't exist on this page
  }
  
  // Fetch comparables data from JSON file
  fetch('/assets/data/comparables.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      displayComparablesData(data, comparablesTable);
    })
    .catch(err => {
      console.error('Chyba při načítání dat srovnatelných nemovitostí:', err);
      showTableError(comparablesTable);
    });
}

/**
 * Displays comparable properties data in the table
 * @param {Array} data - Array of comparable property objects
 * @param {HTMLElement} table - Table element to populate
 */
function displayComparablesData(data, table) {
  const tbody = table.querySelector('tbody');
  
  if (!tbody) {
    console.error('Table body not found');
    return;
  }
  
  const rows = data.map(item => `
    <tr>
      <td>${escapeHtml(item.location)}</td>
      <td>${item.area.toLocaleString('cs-CZ')} m²</td>
      <td>${formatCurrency(item.price)}</td>
      <td>${formatCurrency(item.price_per_m2)} / m²</td>
      <td>${escapeHtml(item.description)}</td>
    </tr>
  `).join('');
  
  tbody.innerHTML = rows;
}

/**
 * Displays an error message in the table
 * @param {HTMLElement} table - Table element
 */
function showTableError(table) {
  const tbody = table.querySelector('tbody');
  if (tbody) {
    tbody.innerHTML = '<tr><td colspan="5" style="text-align: center; color: #d32f2f;">Nepodařilo se načíst data. Zkuste to prosím později.</td></tr>';
  }
}

/**
 * Formats a number as Czech currency (CZK)
 * @param {number} value - The numeric value to format
 * @returns {string} Formatted currency string
 */
function formatCurrency(value) {
  return new Intl.NumberFormat('cs-CZ', { 
    style: 'currency', 
    currency: 'CZK', 
    minimumFractionDigits: 0 
  }).format(value);
}

/**
 * Escapes HTML special characters to prevent XSS
 * @param {string} text - Text to escape
 * @returns {string} Escaped text
 */
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

