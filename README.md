<<<<<<< HEAD
Koolhydraten teller applicatie.


Voor mijn eind opdracht bij hogeschool Novi heb ik een web-aplicatie gebouwd waar je bepaalde voedingswaarde kan zien van je dagelijkse producten.

Probleemstelling en oplossing


**1,2 miljoen Nederlanders hebben diabetes, dus 1 op de 14 Nederlanders. Om het hen iets gemakkelijker te maken voor al deze mensen, heb ik een applicatie
ontwikkeld waar zij snel en gemakkelijk het aantal koolhydraten, vetten en andere
voedingsstoffen van producten kunnen opzoeken.**

De app is niet alleen voor mensen met diabetes, maar ook voor mensen met overgewicht die willen afvallen, sporters die op hun voeding willen letten, maar ook voor mensen die een gezonder leven willen leiden.

Ik wil mensen meer inzicht geven van wat ze dagelijks binnen krijgen aan voedingsstoffen. Door mensen daar bewuster van te maken, zullen ze ook beter leren omgaan met wat ze eten en hun gezondheid. Wat uiteindelijk leidt tot een gezondere samenleving.
• Als gebruiker kun je je registreren en inloggen.
• Als gebruiker kun je de naam van het product invullen, zodat de applicatie een
berekening maakt van het precieze aantal voedingsstoffen.
De voedingsstoffen zijn als volgt:
- koolhydraten
- calorieën
- vetten
- vezels
- proteïne
- zout

Ik maak hierbij gebruik van de koolhydratentabel API (https://developer.edamam.com/edamam-nutrition-api) omdat deze API mij de data geeft van de voedingsstoffen per product.
Ik maak gebruik van de NOVI backend om standaard gebruikersgegevens in op te slaan voor het registreren en inloggen.


![](../../Downloads/Koolhydratenteller_logo.png)

Bestanden.

Dit project bevat de volgende mappen:

Assets, bevat alle afbeeldingen.

Components.
* Buttons - een button die op meerder pagina's wordt gebruikt.
* Footer - voor aan de onderkant van de webpagina. Deze is zichtbaar op elke pagina.
* Form-label - deze component bevat het input en label voor overal waar je gegevens moet invullen(home pagina, inlog en registreer pagina).
* Header - deze component bevat de navigatie en het logo van het website, deze is zichtbaar op alle pagina's. 
* Popup - bevat een melding wanneer je bent geregistreerd of wanneer je gegevens zijn gewijzigd

Context - bevat de context data voor het inlog en registreren.

pages - bevat alle pagina's.
* Home.
* Inlog-pagina
* Mijn Account
* Privacy pagina (lorem ipsum)
* Registreer pagia

Gebruikers.

Op deze pagina kan je Alleen als user registreren
dit doe je door op het registratie pagina je gebruikersnaam, email, wachtwoord en je role als user in te vullen.

Het installatieproces.

De eerste stap is om het repository van Github te clonen, hiervoor dien je wel een githubaccount te hebben.
voor meer informatie hoe je een account moet maken verwijs ik jullie naar > https://github.com/ <

heb je geen github account en wil je alnog dit project clonen dan kan dit doen door de volgende link in je IDE te plaatsen.

- SSH: git@github.com:edelbertroosje/koolhydraten-teller.git
- HTTPS: https://github.com/edelbertroosje/koolhydraten-teller.git
- GitHub CLI: gh repo clone edelbertroosje/koolhydraten-teller

Aplicatie starten

Dit project is gebouwd met de React framework
Om de applicatie vervolgens draaiende te krijgen is het als tweede stap belangrijk om Node.js en NPM te installeren. Daarna installeer je de NPM packages om de app te kunnen runnen. Dit doe je met de volgende commando’s:

npm install

Met dit commando installeer je alle vereiste NPM packages.

npm run start

Met dit commando start je de app in development mode. Open http://localhost:3000 om de app in de browser te bekijken. De pagina zal automatisch herladen bij het maken van aanpassingen. Ook zie je alle errors in de console.

Voorveld fotos van de applicatie.

Home pagina.
![Eddy—Roosje-desktop-homepage_niet-ingelogd](https://user-images.githubusercontent.com/88483673/200117631-aa12d795-0c53-47e1-a7f2-81908b9c8e41.png)


Home pagina-product pagina
![Eddy-Roosje-desktop-productdetail](https://user-images.githubusercontent.com/88483673/200117635-10839cf1-88bb-4953-8171-ffbf3892d00e.png)


Registratie pagina
![Eddy—Roosje—desktop-Registreren](https://user-images.githubusercontent.com/88483673/200117643-52247846-7dc1-4d27-85e7-be632884fecd.png)


Inlog pagina
![Eddy—Roosje—desktop-login](https://user-images.githubusercontent.com/88483673/200117615-d271c71d-6a0a-40a5-abc3-cebd2f3d4916.png)


Account pagina
![Eddy—Roosje—desktop-mijn account](https://user-images.githubusercontent.com/88483673/200117650-a229f41a-73ca-4bba-93ae-fa415fe199f4.png)





