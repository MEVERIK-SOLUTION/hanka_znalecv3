# Nasazení webové aplikace na Vercel

Tento projekt obsahuje statickou webovou aplikaci ve složce `website/`. Pokud chceš aplikaci nasadit pomocí Vercel, postupuj podle následujících kroků:

---

## 🪜 Krok za krokem

### 1. Vytvoř GitHub repozitář

1. Přejdi na https://github.com/new
2. Zadej název repozitáře (např. `znalecky-posudek`)
3. Nezaškrtávej „Initialize this repository with a README“
4. Klikni na „Create repository“

---

### 2. Nahraj soubory

1. Rozbal přiložený ZIP soubor a otevři složku `deploy-package`.
2. Nahraj celý obsah složky (soubor `vercel.json` a adresář `website/` se soubory) do kořenového adresáře repozitáře na GitHubu.
3. Klikni na „Commit changes“.

---

### 3. Přejdi na Vercel a konfiguruj nasazení

1. Jdi na [https://vercel.com/import/git](https://vercel.com/import/git) a přihlas se.
2. Vyber svůj GitHub repozitář.
3. Vercel si nastavení přečte z přiloženého souboru `vercel.json`. Je nastaven takto:

```json
{
  "builds": [
    { "src": "website/**", "use": "@vercel/static" }
  ],
  "routes": [
    { "src": "/(.*)", "dest": "website/$1" }
  ]
}
```

Tato konfigurace říká Vercelu, aby jako kořenový adresář webu použil složku `website/`. Díky tomu není potřeba přesouvat soubory.
4. Klikni na „Deploy“. Vercel nasadí tvůj web a vygeneruje adresu ve tvaru `https://nazev-projektu.vercel.app/`.

---

### ✅ Hotovo!

Po nasazení bude tvůj web dostupný na generované URL adrese bez chyby 404.

Pokud by se něco nepovedlo nebo máš otázky, dej mi vědět. Rád pomůžu!
