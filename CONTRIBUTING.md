# Příspěvky do projektu

Děkujeme za váš zájem o přispění do projektu Hanka Znalec v3! Tyto pokyny vám pomohou začít.

## 🚀 Jak přispět

1. **Fork repozitáře**
   - Klikněte na tlačítko "Fork" v horní části stránky
   - Vytvoří se vaše vlastní kopie repozitáře

2. **Naklonujte si váš fork**
   ```bash
   git clone https://github.com/vase-uzivatelske-jmeno/hanka_znalecv3.git
   cd hanka_znalecv3
   ```

3. **Vytvořte novou větev**
   ```bash
   git checkout -b feature/nazev-vasi-funkce
   ```

4. **Proveďte změny**
   - Dodržujte stávající strukturu kódu
   - Přidejte komentáře pro složitější logiku
   - Testujte své změny

5. **Commitněte změny**
   ```bash
   git add .
   git commit -m "Přidání: popis vaší změny"
   ```

6. **Pushněte do GitHubu**
   ```bash
   git push origin feature/nazev-vasi-funkce
   ```

7. **Vytvořte Pull Request**
   - Přejděte na původní repozitář
   - Klikněte na "New Pull Request"
   - Vyberte vaši větev a popište změny

## 📋 Pravidla pro kód

### HTML
- Používejte sémantické HTML5 elementy
- Dodržujte správné odsazení (2 mezery)
- Přidejte `alt` text k obrázkům
- Používejte české popisky a texty

### CSS
- Používejte CSS proměnné definované v `:root`
- Pište mobilní-první responzivní design
- Dodržujte konzistentní pojmenování tříd
- Přidávejte komentáře pro sekce

### JavaScript
- Pište čistý, čitelný kód
- Používejte moderní ES6+ syntax
- Přidávejte JSDoc komentáře pro funkce
- Validujte vstupy uživatelů
- Ošetřujte chyby pomocí try-catch nebo .catch()

### Data
- Struktura JSON souborů musí zůstat konzistentní
- Všechny ceny v CZK
- Plochy v metrech čtverečních (m²)
- Používejte české názvy lokalit

## 🧪 Testování

Před odesláním Pull Requestu:

1. Spusťte lokální server
   ```bash
   npm run dev
   ```

2. Otestujte všechny stránky
   - [ ] Načítání stránek bez chyb
   - [ ] Funkčnost kalkulačky
   - [ ] Zobrazení tabulek s daty
   - [ ] Responzivita na mobilních zařízeních

3. Zkontrolujte konzoli prohlížeče na chyby

## 💡 Nápady na vylepšení

Máte nápad, ale nejste si jisti? Otevřete issue s následujícími informacemi:

- **Název**: Stručný popis nápadu
- **Popis**: Detailní vysvětlení
- **Důvod**: Proč by to bylo užitečné
- **Návrh řešení**: Jak by to mohlo fungovat

## 🐛 Hlášení chyb

Při hlášení chyby uveďte:

- Popis problému
- Kroky k reprodukci
- Očekávané chování
- Aktuální chování
- Screenshoty (pokud je to relevantní)
- Prohlížeč a verze

## 📝 Druhy příspěvků

- 🐛 Opravy chyb
- ✨ Nové funkce
- 📝 Dokumentace
- 🎨 Vylepšení designu
- ♿ Zlepšení přístupnosti
- 🌐 Překlady
- 🧪 Testy
- ⚡ Výkonnostní optimalizace

## ⚖️ Licence

Tím, že přispějete do tohoto projektu, souhlasíte s tím, že vaše příspěvky budou licencovány pod stejnou licencí jako projekt (ISC).

## 📞 Kontakt

Máte otázky? Neváhejte otevřít issue nebo nás kontaktovat!

---

Děkujeme za váš příspěvek! 🎉
