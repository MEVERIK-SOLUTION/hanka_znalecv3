# 🚀 Deployment Guide - Hanka Znalec v3

Tento dokument obsahuje detailní instrukce pro nasazení aplikace na Vercel.

## 📋 Předpoklady

- GitHub účet
- Vercel účet (zdarma na [vercel.com](https://vercel.com))
- Přístup k tomuto GitHub repozitáři

## 🎯 Rychlé nasazení (Doporučeno)

### Metoda 1: Automatické nasazení přes Vercel Dashboard

1. **Přihlaste se na Vercel**
   - Otevřete [vercel.com](https://vercel.com)
   - Přihlaste se pomocí GitHub účtu

2. **Importujte projekt**
   - Klikněte na tlačítko **"Add New..."** → **"Project"**
   - Vyberte **"Import Git Repository"**
   - Najděte a vyberte repozitář `MEVERIK-SOLUTION/hanka_znalecv3`

3. **Konfigurace projektu**
   ```
   Project Name: hanka-znalecv3 (nebo vlastní název)
   Framework Preset: Other
   Root Directory: ./
   Build Command: (ponechte prázdné - statický web)
   Output Directory: website
   Install Command: (ponechte prázdné)
   ```

4. **Pokročilé nastavení (volitelné)**
   - **Environment Variables**: Nejsou potřeba
   - **Build & Development Settings**: Použijte výchozí nastavení

5. **Deploy**
   - Klikněte na **"Deploy"**
   - Vercel automaticky:
     - Detekuje `vercel.json` konfiguraci
     - Nasadí obsah složky `website/`
     - Vytvoří produkční URL

6. **Výsledek**
   - Po dokončení získáte URL jako: `https://hanka-znalecv3.vercel.app`
   - Aplikace je ihned dostupná online!

## 🔄 Automatické aktualizace

Po prvním nasazení Vercel automaticky:
- Sleduje GitHub repozitář
- Nasazuje nové změny při každém push do hlavní větve
- Vytváří preview nasazení pro pull requesty

## 🌐 Vlastní doména (volitelné)

Pokud chcete použít vlastní doménu:

1. V Vercel dashboardu přejděte do **Settings** → **Domains**
2. Klikněte na **"Add"**
3. Zadejte svoji doménu (např. `znalecky-posudek.cz`)
4. Následujte instrukce pro nastavení DNS záznamů

## 🧪 Testování před nasazením

Před nasazením můžete aplikaci otestovat lokálně:

```bash
# Spusťte lokální server
cd website
python3 -m http.server 3000

# Nebo pomocí npm
npm run dev
```

Otevřete `http://localhost:3000` v prohlížeči.

## 📝 Kontrolní seznam před nasazením

- [x] Všechny soubory jsou v `website/` složce
- [x] `vercel.json` je správně nakonfigurován
- [x] Cesty k assets jsou absolutní (`/assets/...`)
- [x] JSON data jsou validní
- [x] Obrázky jsou optimalizované
- [x] HTML stránky nemají chyby
- [x] CSS a JavaScript fungují správně

## 🐛 Řešení problémů

### Problém: 404 Not Found
**Řešení**: Zkontrolujte, že `vercel.json` obsahuje správné routes:
```json
{
  "routes": [
    { "src": "/(.*)", "dest": "website/$1" }
  ]
}
```

### Problém: Assets se nenačítají
**Řešení**: Ověřte, že všechny cesty k assets používají absolutní cesty začínající `/`:
```html
<link rel="stylesheet" href="/assets/css/style.css" />
<script src="/assets/js/script.js"></script>
```

### Problém: Build selhává
**Řešení**: Protože je to statický web, build by neměl být potřeba. Ujistěte se, že:
- Build Command je prázdný
- Output Directory je nastaven na `website`

## 📊 Monitoring a Analytics

Po nasazení můžete v Vercel dashboardu sledovat:
- **Analytics**: Návštěvnost a výkon
- **Logs**: Logy z deploymentu
- **Speed Insights**: Rychlost načítání stránek

## 🔒 Zabezpečení

Vercel automaticky poskytuje:
- ✅ HTTPS certifikát (SSL)
- ✅ DDoS ochrana
- ✅ Edge Network (CDN)
- ✅ Automatické zálohy

## 💡 Tipy pro produkci

1. **Performance**
   - Vercel automaticky optimalizuje obrázky
   - Assets jsou cachovány na edge serverech

2. **SEO**
   - Meta tagy jsou již implementovány
   - Open Graph tagy pro social sharing

3. **Monitoring**
   - Sledujte Analytics v Vercel dashboardu
   - Nastavte upozornění na chyby

## 📞 Podpora

Pokud narazíte na problémy:
- 📖 [Vercel Dokumentace](https://vercel.com/docs)
- 💬 [Vercel Support](https://vercel.com/support)
- 🐛 Otevřete issue v tomto repozitáři

## 🎉 Po nasazení

Gratulujeme! Vaše aplikace je nyní online. Můžete:
1. Sdílet URL s kolegy a klienty
2. Nastavit vlastní doménu
3. Sledovat návštěvnost v Analytics
4. Pravidelně aktualizovat obsah

---

**Poslední aktualizace**: 2026-02-15  
**Verze**: 3.0.0  
**Status**: ✅ Připraveno k nasazení
