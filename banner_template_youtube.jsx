// banner_template_fixed.jsx
#target photoshop
app.bringToFront();

// 1) Neues Dokument (hat automatisch eine Background-Ebene)
var doc = app.documents.add(2048, 1152, 72, "LinkedIn-Banner", NewDocumentMode.RGB);

// 2) Hintergrundfarbe setzen über Auswahl & Füllen
// Setze die gewünschte Farbe als Vordergrundfarbe
var bgColor = new SolidColor();
bgColor.rgb.red = 242;
bgColor.rgb.green = 238;
bgColor.rgb.blue = 233;
app.foregroundColor = bgColor;

// Auswahl → Alles und mit Vordergrund füllen
doc.selection.selectAll();
doc.selection.fill(app.foregroundColor);
doc.selection.deselect();

// 3) Logo platzieren
var logoFile = File("~/scripts/b_gray.png"); // Pfad anpassen
if (logoFile.exists) {
  var placed = app.open(logoFile);
  placed.resizeImage(UnitValue(80, "px"), UnitValue(80, "px"), null, ResampleMethod.BICUBIC);
  placed.selection.selectAll();
  placed.selection.copy();
  placed.close(SaveOptions.DONOTSAVECHANGES);
  var logoLayer = doc.paste();
  logoLayer.name = "Logo";
  logoLayer.translate(50 - logoLayer.bounds[0], (396/2 - 40) - logoLayer.bounds[1]);
}

// 4) Text-Ebenen anlegen
function makeTextLayer(name, contents, size, yPos) {
  var txt = doc.artLayers.add();
  txt.kind = LayerKind.TEXT;
  txt.name = name;
  txt.textItem.contents = contents;
  txt.textItem.position = [650, yPos];
  txt.textItem.size = size;
  txt.textItem.font = "Roboto-Regular"; // passe an deine installierte Schrift an
  txt.textItem.color = (function(){
    var c = new SolidColor();
    c.rgb.red = 51; c.rgb.green = 51; c.rgb.blue = 51;
    return c;
  })();
}

makeTextLayer("Titel",    "Dozent & Full-Stack-Entwickler für Medien & Apps", 30, 180);
makeTextLayer("Subtitel", "Kanso statt Komplexität | Wabi-Sabi statt Perfektion", 18, 215);
makeTextLayer("Tagline",  "Authentisch. Echt. Einfach.",                      18, 245);

alert("LinkedIn-Banner wurde erstellt. Speichere es jetzt als .psd!"); 
