# Empirische Wirtschaftsforschung - Jamstack Website
Das hier ist die Codebasis für den Webauftritt des Kompetenzfelds Empirische Wirtschaftsforschung der UA Ruhr. Es wurde der Jamstack Ansatz verfolgt, d.h. dass in einem Buildprozess alle HTML Dateien für die Darstellung der Website generiert werden und diese nur noch durch ein CMS an den Client ausgeliefert werden müssen. Die Generierung der HTML Seiten mit all ihren Inhalten wird von einem sogenannten Static Site Generator (SSG) übernommen. Alle weitere Interaktion mit den Websiteinhalten läuft auf der Client-Seite ab, was den Betrieb eines Servers überflüssig macht.

Als Static Site Generator wurde [11ty](https://www.11ty.dev/) gewählt. Als CSS-Framework wurde [tailwindcss](https://tailwindcss.com/) genutzt, mit der zusätzlichen Erweiterung [tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography) um Markdown Inhalte zu rendern.

Weitere genutze Frameworks sind:
* [PostCSS](https://postcss.org/)
* [Webpack](https://webpack.js.org/)

## Installation
Um das Projekt zu builden und damit die Website Inhalte Lokal zu erstellen müssen zunächst erst die Abhängigkeiten installiert werden. Dafür kann einfach 
```
npm install
```
ausgeführt werden (in einer Konsolenumgebung). Notwendig dafür ist eine akutelle Installation von [npm](https://www.npmjs.com/).

## Inhalte generieren
Nachdem alle Abhängigkeiten installiert sind sollte man nun auch die Website aus den gegebenen Templates und Daten generieren können.
Um die Website zu builden und zusätzlich einen lokalen Webserver zu starten muss einfach 
```
npm start
```
ausgeführt werden. Die Website sollte dann unter [localhost](http://localhost/) erreichbar sein. 
Falls nur die Webinhalte generiert werden sollen, ohne einen Webserver zu starten muss einfach 
```
npm build
```
ausgeführt werden.

Die Website Daten (also HTML Seiten und weitere Daten) werden in den Ordner **dist** kopiert. Dieser wird bei Bedarf von npm selber generiert.

## Inhalte der Website anpassen
Die Inhalte der Website können an verschiedenen Punkten angepasst werden.
Dabei wird unterschieden zwischen Markdown-Dateien, die meist für fließtext verwendet werden und JSON Dateien, welche für kleine Strukturelemente auf der Website genutzt werden.

### Fließtexte