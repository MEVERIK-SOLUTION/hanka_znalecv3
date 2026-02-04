document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('calc-form');
  if (!form) return;
  const resultContainer = document.getElementById('calc-result');

  let comparablesData = [];

  // Load comparables data once for median calculation
  // Use relative path to ensure compatibility when deployed on Vercel
  // Always fetch the data from the root-level assets directory.  Using an
  // absolute path starting with a slash ensures that even when this script
  // runs on nested pages (e.g. /pages/calculator.html) the
  // comparables JSON is pulled from /assets/comparables.json rather than
  // attempting to resolve relative to the current directory.
  fetch('/assets/comparables.json')
    .then(res => res.json())
    .then(data => {
      comparablesData = data;
    })
    .catch(err => console.error('Chyba načítání dat:', err));

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Retrieve user inputs
    const areaInput = parseFloat(document.getElementById('area-input').value);
    const pricePerM2Input = parseFloat(document.getElementById('price-per-m2-input').value);

    if (!areaInput || isNaN(areaInput) || areaInput <= 0) {
      resultContainer.innerHTML = '<p>Prosím zadejte platnou výměru.</p>';
      return;
    }

    // Compute median price_per_m2
    const values = comparablesData.map(item => item.price_per_m2).filter(v => typeof v === 'number');
    let median = 0;
    if (values.length > 0) {
      const sorted = values.sort((a, b) => a - b);
      const mid = Math.floor(sorted.length / 2);
      median = sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
    }

    // Determine recommended low, average, high price per m²
    const recommendedLow = median * 0.8;
    const recommendedHigh = median * 1.2;

    let userPriceInfo = '';
    if (pricePerM2Input && !isNaN(pricePerM2Input)) {
      const totalValue = areaInput * pricePerM2Input;
      const difference = pricePerM2Input - median;
      const diffLabel = difference > 0 ? 'vyšší' : 'nižší';
      const percent = Math.abs(difference) / median * 100;
      userPriceInfo = `<p>Celková hodnota při zadané ceně: <strong>${formatCurrency(totalValue)}</strong> (cena/m² je ${diffLabel} než medián regionu o ${percent.toFixed(1)} %).</p>`;
    }

    const recommendedRange = `<p>Doporučené rozpětí cen na základě mediánu (${formatCurrency(median)} / m²): <strong>${formatCurrency(recommendedLow)} - ${formatCurrency(recommendedHigh)} / m²</strong>.</p>`;
    const estimatedValueRange = `<p>Odhadovaná hodnota pro plochu ${areaInput.toLocaleString('cs-CZ')} m²: <strong>${formatCurrency(areaInput * recommendedLow)} - ${formatCurrency(areaInput * recommendedHigh)}</strong>.</p>`;

    resultContainer.innerHTML = `
      <div class="calculator-resultcard">
        ${userPriceInfo}
        ${recommendedRange}
        ${estimatedValueRange}
      </div>
    `;
  });
});

function formatCurrency(value) {
  return new Intl.NumberFormat('cs-CZ', { style: 'currency', currency: 'CZK', minimumFractionDigits: 0 }).format(value);
}
