/**
 * Property Value Calculator for Hanka Znalec v3
 * 
 * This calculator estimates the market value of industrial properties
 * based on regional comparable sales data.
 * 
 * Features:
 * - Median price calculation from comparable properties
 * - Customizable price per square meter input
 * - Recommended value range (80%-120% of median)
 * - Comparison with regional median
 * 
 * @author Analytický tým - MEVERIK SOLUTION
 * @version 3.0.0
 */

document.addEventListener('DOMContentLoaded', () => {
  initializeCalculator();
});

/**
 * Initializes the calculator form and loads comparable data
 */
function initializeCalculator() {
  const form = document.getElementById('calc-form');
  
  if (!form) {
    console.warn('Calculator form not found on this page');
    return;
  }
  
  const resultContainer = document.getElementById('calc-result');
  let comparablesData = [];
  
  // Load comparables data for median calculation
  loadComparablesData()
    .then(data => {
      comparablesData = data;
    })
    .catch(err => {
      console.error('Chyba při načítání dat:', err);
      showError(resultContainer, 'Nepodařilo se načíst data pro výpočet. Zkuste to prosím později.');
    });
  
  // Handle form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    calculatePropertyValue(comparablesData, resultContainer);
  });
}

/**
 * Loads comparable properties data from JSON file
 * @returns {Promise<Array>} Promise resolving to array of comparable properties
 */
function loadComparablesData() {
  return fetch('/assets/data/comparables.json')
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    });
}

/**
 * Calculates property value based on user input and comparable data
 * @param {Array} comparablesData - Array of comparable property objects
 * @param {HTMLElement} resultContainer - Container element for displaying results
 */
function calculatePropertyValue(comparablesData, resultContainer) {
  // Get and validate user inputs
  const areaInput = parseFloat(document.getElementById('area-input').value);
  const pricePerM2Input = parseFloat(document.getElementById('price-per-m2-input').value);
  
  if (!validateArea(areaInput)) {
    showError(resultContainer, 'Prosím zadejte platnou výměru (kladné číslo).');
    return;
  }
  
  // Calculate median price per m²
  const median = calculateMedian(comparablesData);
  
  if (median === 0) {
    showError(resultContainer, 'Nepodařilo se vypočítat medián z dostupných dat.');
    return;
  }
  
  // Calculate recommended price range (80% - 120% of median)
  const recommendedLow = median * 0.8;
  const recommendedHigh = median * 1.2;
  
  // Build result output
  let resultHTML = '';
  
  // If user provided custom price per m², compare with median
  if (pricePerM2Input && !isNaN(pricePerM2Input) && pricePerM2Input > 0) {
    resultHTML += buildUserPriceComparison(areaInput, pricePerM2Input, median);
  }
  
  resultHTML += buildRecommendedRange(median, recommendedLow, recommendedHigh);
  resultHTML += buildEstimatedValue(areaInput, recommendedLow, recommendedHigh);
  
  displayResults(resultContainer, resultHTML);
}

/**
 * Validates area input
 * @param {number} area - Area value to validate
 * @returns {boolean} True if valid, false otherwise
 */
function validateArea(area) {
  return !isNaN(area) && area > 0;
}

/**
 * Calculates median price per m² from comparable properties
 * @param {Array} data - Array of comparable property objects
 * @returns {number} Median price per m²
 */
function calculateMedian(data) {
  const values = data
    .map(item => item.price_per_m2)
    .filter(v => typeof v === 'number' && v > 0);
  
  if (values.length === 0) {
    return 0;
  }
  
  const sorted = values.sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  
  return sorted.length % 2 !== 0 
    ? sorted[mid] 
    : (sorted[mid - 1] + sorted[mid]) / 2;
}

/**
 * Builds HTML for user price comparison
 * @param {number} area - Property area
 * @param {number} userPrice - User's price per m²
 * @param {number} median - Regional median price per m²
 * @returns {string} HTML string
 */
function buildUserPriceComparison(area, userPrice, median) {
  const totalValue = area * userPrice;
  const difference = userPrice - median;
  const diffLabel = difference > 0 ? 'vyšší' : 'nižší';
  const percent = Math.abs(difference) / median * 100;
  
  return `<p><strong>Vaše zadaná cena:</strong> ${formatCurrency(totalValue)} 
          celkem (${formatCurrency(userPrice)}/m²) - což je ${diffLabel} 
          než regionální medián o ${percent.toFixed(1)}%.</p>`;
}

/**
 * Builds HTML for recommended price range
 * @param {number} median - Median price per m²
 * @param {number} low - Lower bound of recommended range
 * @param {number} high - Upper bound of recommended range
 * @returns {string} HTML string
 */
function buildRecommendedRange(median, low, high) {
  return `<p><strong>Doporučené rozpětí cen</strong> na základě mediánu 
          (${formatCurrency(median)}/m²): 
          <strong>${formatCurrency(low)} - ${formatCurrency(high)}/m²</strong></p>`;
}

/**
 * Builds HTML for estimated property value
 * @param {number} area - Property area
 * @param {number} low - Lower price per m²
 * @param {number} high - Upper price per m²
 * @returns {string} HTML string
 */
function buildEstimatedValue(area, low, high) {
  return `<p><strong>Odhadovaná hodnota</strong> pro plochu 
          ${area.toLocaleString('cs-CZ')} m²: 
          <strong>${formatCurrency(area * low)} - ${formatCurrency(area * high)}</strong></p>`;
}

/**
 * Displays calculation results
 * @param {HTMLElement} container - Result container element
 * @param {string} html - HTML content to display
 */
function displayResults(container, html) {
  container.innerHTML = `<div class="calculator-resultcard">${html}</div>`;
  container.style.display = 'block';
}

/**
 * Displays an error message
 * @param {HTMLElement} container - Result container element
 * @param {string} message - Error message to display
 */
function showError(container, message) {
  container.innerHTML = `<p style="color: #d32f2f;">${message}</p>`;
  container.style.display = 'block';
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

