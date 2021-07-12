(function(videojs) {
  'use strict';
  videojs.addLanguage("de", {
  "Play": "Wiedergabe",
  "Pause": "Pause",
  "Replay": "Erneut abspielen",
  "Current Time": "Aktueller Zeitpunkt",
  "Duration": "Dauer",
  "Remaining Time": "Verbleibende Zeit",
  "Stream Type": "Streamtyp",
  "LIVE": "LIVE",
  "Loaded": "Geladen",
  "Progress": "Status",
  "Fullscreen": "Vollbild",
  "Non-Fullscreen": "Kein Vollbild",
  "Mute": "Ton aus",
  "Unmute": "Ton ein",
  "Playback Rate": "Wiedergabegeschwindigkeit",
  "Subtitles": "Untertitel",
  "subtitles off": "Untertitel aus",
  "Captions": "Untertitel",
  "captions off": "Untertitel aus",
  "Chapters": "Kapitel",
  "You aborted the media playback": "Sie haben die Videowiedergabe abgebrochen.",
  "A network error caused the media download to fail part-way.": "Der Videodownload ist aufgrund eines Netzwerkfehlers fehlgeschlagen.",
  "The media could not be loaded, either because the server or network failed or because the format is not supported.": "Das Video konnte nicht geladen werden, da entweder ein Server- oder Netzwerkfehler auftrat oder das Format nicht unterstützt wird.",
  "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.": "Die Videowiedergabe wurde entweder wegen eines Problems mit einem beschädigten Video oder wegen verwendeten Funktionen, die vom Browser nicht unterstützt werden, abgebrochen.",
  "No compatible source was found for this media.": "Für dieses Video wurde keine kompatible Quelle gefunden.",
  "Play Video": "Video abspielen",
  "Close": "Schließen",
  "Modal Window": "Modales Fenster",
  "This is a modal window": "Dies ist ein modales Fenster",
  "This modal can be closed by pressing the Escape key or activating the close button.": "Durch Drücken der Esc-Taste bzw. Betätigung der Schaltfläche \"Schließen\" wird dieses modale Fenster geschlossen.",
  ", opens captions settings dialog": ", öffnet Einstellungen für Untertitel",
  ", opens subtitles settings dialog": ", öffnet Einstellungen für Untertitel",
  ", selected": ", ausgewählt",
  "captions settings": "Untertiteleinstellungen",
  "subtitles settings": "Untertiteleinstellungen",
  "descriptions settings": "Einstellungen für Beschreibungen",
  "Close Modal Dialog": "Modales Fenster schließen",
  "Descriptions": "Beschreibungen",
  "descriptions off": "Beschreibungen aus",
  "The media is encrypted and we do not have the keys to decrypt it.": "Die Entschlüsselungsschlüssel für den verschlüsselten Medieninhalt sind nicht verfügbar.",
  ", opens descriptions settings dialog": ", öffnet Einstellungen für Beschreibungen",
  "Audio Track": "Tonspur",
  "Text": "Schrift",
  "White": "Weiß",
  "Black": "Schwarz",
  "Red": "Rot",
  "Green": "Grün",
  "Blue": "Blau",
  "Yellow": "Gelb",
  "Magenta": "Magenta",
  "Cyan": "Türkis",
  "Background": "Hintergrund",
  "Window": "Fenster",
  "Transparent": "Durchsichtig",
  "Semi-Transparent": "Halbdurchsichtig",
  "Opaque": "Undurchsichtig",
  "Font Size": "Schriftgröße",
  "Text Edge Style": "Textkantenstil",
  "None": "Kein",
  "Raised": "Erhoben",
  "Depressed": "Gedrückt",
  "Uniform": "Uniform",
  "Dropshadow": "Schlagschatten",
  "Font Family": "Schriftfamilie",
  "Proportional Sans-Serif": "Proportionale Sans-Serif",
  "Monospace Sans-Serif": "Monospace Sans-Serif",
  "Proportional Serif": "Proportionale Serif",
  "Monospace Serif": "Monospace Serif",
  "Casual": "Zwanglos",
  "Script": "Schreibschrift",
  "Small Caps": "Small-Caps",
  "Reset": "Zurücksetzen",
  "restore all settings to the default values": "Alle Einstellungen auf die Standardwerte zurücksetzen",
  "Done": "Fertig",
  "Caption Settings Dialog": "Einstellungsdialog für Untertitel",
  "Beginning of dialog window. Escape will cancel and close the window.": "Anfang des Dialogfensters. Esc bricht ab und schließt das Fenster.",
  "End of dialog window.": "Ende des Dialogfensters.",
  "Audio Player": "Audio-Player",
  "Video Player": "Video-Player",
  "Progress Bar": "Forschrittsbalken",
  "progress bar timing: currentTime={1} duration={2}": "{1} von {2}",
  "Volume Level": "Lautstärke",
  "{1} is loading.": "{1} wird geladen.",
  "Seek to live, currently behind live": "Zur Live-Übertragung wechseln. Aktuell wird es nicht live abgespielt.",
  "Seek to live, currently playing live": "Zur Live-Übertragung wechseln. Es wird aktuell live abgespielt."

});
   videojs.registerPlugin('videoOverlay', function() {
      var overlayIconList = {
          sensatori: "https://content.tui.co.uk/adamtui/2019_10/10_12/b2ffa42c-bc55-4e9d-bdec-aae200d196b7/OPTI_SENSATORI.png",
          suneo: "https://content.tui.co.uk/adamtui/2019_10/10_12/cfda577d-4eee-49a8-bcba-aae200d19593/OPTI_TUI_SUNEO.png",
          tui_blue: "https://content.tui.co.uk/adamtui/2019_10/10_12/1991beb6-e2a8-4d30-82a1-aae200d197c7/OPTI_TUI_BLUE.png",
          riu: "https://content.tui.co.uk/adamtui/2019_10/11_9/1c10e194-db34-4a91-b9c9-aae3009d6de7/OPTI_RIU.png",
          robinson: "https://content.tui.co.uk/adamtui/2019_10/11_9/552b2bec-8228-49e2-b6f4-aae3009d68cb/OPTI_ROBINSON.png",
          magic_life: "https://content.tui.co.uk/adamtui/2019_10/11_9/6efe7298-251c-4e60-a3ad-aae3009d6e6b/OPTI_MAGIC_LIFE.png",
          blue_all: "https://content.tui.co.uk/adamtui/2020_2/10_10/5f5a16ea-6a16-4ab4-b7c0-ab5d00afc0e6/blue_all.png",
          blue_two: "https://content.tui.co.uk/adamtui/2020_2/10_10/1e1c95d3-67d9-4852-b349-ab5d00afbeac/blue_two.png",
          blue_family: "https://content.tui.co.uk/adamtui/2020_2/10_10/6dc1a95b-820c-435e-8ce4-ab5d00afc165/blue_family.png",
          generic: "https://content.tui.co.uk/adamtui/2020_2/10_10/ed539598-35fd-49b6-967c-ab5d00afc1e8/generic.png"
      }
      var player = this,
      overlay = document.createElement('div');
      player.on('loadstart', function(){
        var dataObj = player.catalog.getMetadata({lang: player.language()}).customFields;
        overlay.id = 'video_overlay';
        overlay.innerHTML = "<div id='video_overlay_inner'></div>";
        player.el().appendChild(overlay);

         function checkForOverlay() {
              if (dataObj && (dataObj.video_overlay_product_icon || dataObj.video_overlay_title || dataObj.video_overlay_subtext)) {
                player.el().querySelector("#video_overlay").classList.add("overlay-fade-in");
              }
          }
         function setHTML() {
              if (dataObj) {
                var overlayHTML = '';
                overlayHTML += dataObj.video_overlay_product_icon && overlayIconList[dataObj.video_overlay_product_icon] ? "<div class='video-overlay-image-container video-inner'><img src='"+ overlayIconList[dataObj.video_overlay_product_icon] +"'/></div>" : "";
                overlayHTML += dataObj.video_overlay_title ? "<h2 class='video-inner'>"+ dataObj.video_overlay_title +"</h2>" : "";
                overlayHTML += dataObj.video_overlay_title && dataObj.video_overlay_subtext ? "<hr/>" : "";
                overlayHTML += dataObj.video_overlay_subtext ? "<p class='video-inner'>"+ dataObj.video_overlay_subtext +"</p>" : "";
                return overlayHTML;
              } else {
                return '';
              }
          }

          player.on("firstplay", function() {
                dataObj = player.catalog.getMetadata({lang: player.language()}).customFields;
                player.el().querySelector("#video_overlay_inner").innerHTML = setHTML();
                checkForOverlay();
                setTimeout(function() {
                  player.el().querySelector("#video_overlay").classList.remove("overlay-fade-in");
                },3000);
          });
      });
   });
}(window.videojs));
