# Hanka Znalec v3 - Profesionální aplikace pro ocenění nemovitostí

Moderní webová aplikace pro komplexní analýzu a ocenění výrobních hal v Pardubickém kraji. Aplikace poskytuje znalecké posudky, cenové analýzy, srovnání s trhem a interaktivní kalkulačku.

## 🚀 Funkce

- **Znalecké posudky** - Detailní analýza nemovitostí s technickým stavem
- **Cenová analýza** - Porovnání s trhem na základě regionálních dat
- **Interaktivní kalkulačka** - Výpočet odhadované hodnoty nemovitosti
- **Vizualizace dat** - Grafy a tabulky pro snadné porovnání
- **Responzivní design** - Funguje na všech zařízeních

## 📁 Struktura projektu

```
hanka_znalecv3/
├── website/                    # Hlavní webová aplikace
│   ├── index.html             # Úvodní stránka
│   ├── pages/                 # Další stránky aplikace
│   │   ├── calculator.html    # Kalkulačka
│   │   ├── expert-report.html # Znalecký posudek
│   │   ├── critique.html      # Kritická analýza
│   │   ├── price-estimate.html # Cenový odhad
│   │   ├── location-analysis.html # Analýza lokality
│   │   ├── reaction.html      # Reakce na posudek
│   │   └── summary.html       # Souhrnný report
│   └── assets/                # Statické soubory
│       ├── css/               # Styly
│       │   └── style.css
│       ├── js/                # JavaScript soubory
│       │   ├── script.js      # Hlavní skript
│       │   └── calculator.js  # Kalkulačka
│       ├── data/              # Data
│       │   └── comparables.json # Srovnatelné nemovitosti
│       └── images/            # Obrázky a grafy
│           ├── comparison_plot.png
│           └── comparison_plot2.png
├── vercel.json                # Konfigurace pro Vercel
├── package.json               # NPM dependencies
└── README.md                  # Tato dokumentace
```

## 🛠️ Lokální vývoj

### Předpoklady
- Node.js (verze 14 nebo vyšší)
- npm nebo yarn

### Instalace a spuštění

1. **Klonování repozitáře**
   ```bash
   git clone https://github.com/MEVERIK-SOLUTION/hanka_znalecv3.git
   cd hanka_znalecv3
   ```

2. **Spuštění vývojového serveru**
   ```bash
   npm run dev
   ```
   
   Aplikace bude dostupná na `http://localhost:3000`

3. **Alternativně - použití jiného serveru**
   ```bash
   # Pomocí Python
   cd website
   python -m http.server 3000
   
   # Pomocí PHP
   cd website
   php -S localhost:3000
   ```

## 📦 Nasazení na Vercel

### Automatické nasazení přes GitHub

1. Přejdi na [vercel.com](https://vercel.com) a přihlas se
2. Klikni na "New Project"
3. Importuj tento GitHub repozitář
4. Vercel automaticky detekuje konfiguraci z `vercel.json`
5. Klikni na "Deploy"

Aplikace bude dostupná na `https://tvuj-projekt.vercel.app`

### Manuální nasazení

```bash
# Instalace Vercel CLI
npm install -g vercel

# Nasazení
vercel
```

## 🎨 Přizpůsobení

### Úprava dat o nemovitostech

Data o srovnatelných nemovitostech jsou uložena v souboru `website/assets/data/comparables.json`. Pro přidání nebo úpravu nemovitostí edituj tento soubor:

```json
{
  "id": "unikatni_id",
  "location": "Název lokality",
  "area": 1285,
  "price": 12990000,
  "price_per_m2": 10109,
  "description": "Popis nemovitosti"
}
```

### Úprava stylů

Hlavní stylesheet se nachází v `website/assets/css/style.css`. Používá CSS proměnné pro snadné přizpůsobení barev:

```css
:root {
  --primary-color: #005fc0;
  --secondary-color: #007ee5;
  --light-color: #f5f7fa;
}
```

## 🧪 Testování

Pro testování aplikace před nasazením:

```bash
# Spusť lokální server
npm run dev

# Otevři v prohlížeči
http://localhost:3000
```

Zkontroluj:
- ✅ Všechny stránky se správně načítají
- ✅ Kalkulačka funguje správně
- ✅ Data se zobrazují v tabulkách
- ✅ Obrázky se načítají
- ✅ Odkazy fungují

## 📝 Technologie

- **HTML5** - Struktura stránek
- **CSS3** - Moderní styling s flexboxem a responzivním designem
- **JavaScript (Vanilla)** - Interaktivní funkce bez závislostí
- **JSON** - Strukturovaná data
- **Vercel** - Hosting a deployment

## 📄 Licence

ISC

## 👥 Autor

Analytický tým - MEVERIK SOLUTION

## 🤝 Přispívání

Návrhy na vylepšení jsou vítány! Pro přispění:

1. Fork repozitáře
2. Vytvoř feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit změny (`git commit -m 'Add some AmazingFeature'`)
4. Push do branch (`git push origin feature/AmazingFeature`)
5. Otevři Pull Request

## 📞 Podpora

Pro otázky a podporu otevřete issue v GitHub repozitáři.

---

**Verze 3.0** - Profesionální reorganizace s moderní strukturou projektu
