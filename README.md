# Photoshop JSX (ExtendScript) Automatisierung

## Einleitung

Photoshop ist nicht nur ein mächtiges Tool für Bildbearbeitung und Design, sondern bietet auch umfangreiche Möglichkeiten zur Automatisierung und Erweiterung seiner Funktionen. Eine dieser Möglichkeiten spielt sich hinter den Kulissen ab: **JSX (ExtendScript)**. In diesem Artikel erfährst du:

- Was JSX in Photoshop bedeutet  
- Wie du deine erste JSX-Datei erstellst  
- Praktische Anwendungsbeispiele, die dir den Einstieg erleichtern  

---

## Was ist JSX (ExtendScript) in Photoshop?

JSX steht für _JavaScript for ExtendScript_, eine Adobe-eigene Implementierung von JavaScript, die speziell für Creative Cloud-Anwendungen (Photoshop, Illustrator, InDesign etc.) entwickelt wurde. Mit ExtendScript kannst du:

- **Workflows automatisieren**, die sonst manuell Zeit kosten  
- **Wiederkehrende Aufgaben** (Stapelverarbeitung, Filter, Exporte) per Klick ausführen  
- **Eigene Dialogfenster (Paletten)** erstellen und Photoshop-UI erweitern  
- **Komplexe Aktionen verknüpfen** und individuelle Tools bauen  

Kurz gesagt: JSX lässt dich Photoshop per Code steuern, um effizienter, schneller und konsistenter zu arbeiten.

---

## Voraussetzungen & Einrichtung

1. **Photoshop Version**  
   – Ab CC 2020 ist ExtendScript fester Bestandteil. Eine zusätzliche Installation ist nicht nötig.

2. **Entwicklungs-Tool (optional)**  
   – Adobe hat das ExtendScript Toolkit eingestellt. Empfohlen:  
     - **Visual Studio Code** mit der Extension **Adobe ExtendScript**  
     - **Adobe ExtendScript Debugger** für VS Code  
   – Das bringt dir Syntax-Highlighting, Autocomplete und Debugging direkt in VS Code.

3. **Ordnerstruktur**  
   Lege in deinem Projektordner einen Unterordner (z. B. `scripts/`) an, in dem du alle `.jsx`-Dateien verwaltest. So behältst du den Überblick!

---

## Deine erste JSX-Datei

1. **Neue Datei erstellen**  
   - Name: `meinErstesSkript.jsx`  
   - Öffne sie in VS Code oder einem beliebigen Texteditor.

2. **Grundgerüst eines JSX-Skripts**  
   ```js
   // meinErstesSkript.jsx

   // 1. Prüfen, ob ein Dokument offen ist
   if (app.documents.length === 0) {
     alert("Bitte öffne zuerst ein Dokument!");
   } else {
     var doc = app.activeDocument;

     // 2. Hintergrund entsperren
     if (doc.backgroundLayer) {
       doc.backgroundLayer.isBackgroundLayer = false;
     }

     // 3. Neue Ebene erstellen und Rechteck zeichnen
     var neueEbene = doc.artLayers.add();
     neueEbene.name = "Mein Skript-Ebene";

     var rechteck = [
       [50, 50],
       [250, 50],
       [250, 200],
       [50, 200]
     ];
     doc.selection.select(rechteck);
     doc.selection.fill(app.foregroundColor);
     doc.selection.deselect();

     alert("Skript erfolgreich ausgeführt!");
   }


## Erklärung des Grundgerüsts

- `app.documents.length === 0`  
  Prüft, ob überhaupt ein Dokument geöffnet ist.  

- `app.activeDocument`  
  Referenziert das aktuell aktive Dokument in Photoshop.  

- `backgroundLayer.isBackgroundLayer = false`  
  Hebt die Sperre der Hintergrundebene auf, damit sie wie jede andere Ebene bearbeitet werden kann.  

- `doc.artLayers.add()`  
  Erstellt eine neue Ebene im aktuellen Dokument.  

- `doc.selection.select([...])` & `fill(...)`  
  Definiert eine Auswahl anhand eines Koordinaten-Arrays und füllt sie mit der aktuellen Vordergrundfarbe.  

- `alert(...)`  
  Zeigt eine Info-Box im Photoshop-Dialog an.  

---

## Skript ausführen in Photoshop

1. Öffne Photoshop und lade ein beliebiges Bild (oder erstelle ein neues Dokument).  
2. Gehe zu **Datei → Skripten → Durchsuchen…**  
3. Wähle deine `.jsx`-Datei (z. B. `meinErstesSkript.jsx`) aus und klicke **Öffnen**.  
4. Photoshop führt das Skript sofort aus und zeigt ggf. Alerts an.  

> **Herzlichen Glückwunsch!**  
> Du hast dein erstes JSX-Skript erfolgreich erstellt und ausgeführt.  

---

## Ausblick & weiterführende Ideen

- Lege im Ordner `scripts/` weitere `.jsx`-Dateien für Routine-Aufgaben an.  
- Verknüpfe mehrere Aktionen zu einem einzigen Klick-Workflow.  
- Erstelle eigene Dialogfenster (Panels) mit ExtendScript UI-Elementen.  
- Teile deine Skripte im Team oder veröffentliche sie auf GitHub.  

> **Tipp:** Feedback, Fragen oder Ideen?  
> Schreib mir gerne eine Nachricht unter **Sag Hallo**!  

---

## Lizenz

Dieses Projekt steht unter der [MIT License](LICENSE).

© 2025 Bitter. Lern Einfach– Authentisch. 
Automatisiere deine Photoshop-Workflows effizient und kreativ!

