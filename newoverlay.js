(function(videojs) {
  'use strict';
  videojs.addLanguage("fr", {
"Audio Player": "Lecteur audio",
"Video Player": "Lecteur vidéo",
"Play": "Lecture",
"Pause": "Pause",
"Replay": "Revoir",
"Current Time": "Temps actuel",
"Duration": "Durée",
"Remaining Time": "Temps restant",
"Stream Type": "Type de flux",
"LIVE": "EN DIRECT",
"Loaded": "Chargé",
"Progress": "Progression",
"Progress Bar": "Barre de progression",
"progress bar timing: currentTime={1} duration={2}": "{1} de {2}",
"Fullscreen": "Plein écran",
"Non-Fullscreen": "Fenêtré",
"Mute": "Sourdine",
"Unmute": "Son activé",
"Playback Rate": "Vitesse de lecture",
"Subtitles": "Sous-titres",
"subtitles off": "Sous-titres désactivés",
"Captions": "Sous-titres transcrits",
"captions off": "Sous-titres transcrits désactivés",
"Chapters": "Chapitres",
"Descriptions": "Descriptions",
"descriptions off": "descriptions désactivées",
"Audio Track": "Piste audio",
"Volume Level": "Niveau de volume",
"You aborted the media playback": "Vous avez interrompu la lecture de la vidéo.",
"A network error caused the media download to fail part-way.": "Une erreur de réseau a interrompu le téléchargement de la vidéo.",
"The media could not be loaded, either because the server or network failed or because the format is not supported.": "Cette vidéo n'a pas pu être chargée, soit parce que le serveur ou le réseau a échoué ou parce que le format n'est pas reconnu.",
"The media playback was aborted due to a corruption problem or because the media used features your browser did not support.": "La lecture de la vidéo a été interrompue à cause d'un problème de corruption ou parce que la vidéo utilise des fonctionnalités non prises en charge par votre navigateur.",
"No compatible source was found for this media.": "Aucune source compatible n'a été trouvée pour cette vidéo.",
"The media is encrypted and we do not have the keys to decrypt it.": "Le média est chiffré et nous n'avons pas les clés pour le déchiffrer.",
"Play Video": "Lire la vidéo",
"Close": "Fermer",
"Close Modal Dialog": "Fermer la boîte de dialogue modale",
"Modal Window": "Fenêtre modale",
"This is a modal window": "Ceci est une fenêtre modale",
"This modal can be closed by pressing the Escape key or activating the close button.": "Ce modal peut être fermé en appuyant sur la touche Échap ou activer le bouton de fermeture.",
", opens captions settings dialog": ", ouvrir les paramètres des sous-titres transcrits",
", opens subtitles settings dialog": ", ouvrir les paramètres des sous-titres",
", opens descriptions settings dialog": ", ouvrir les paramètres des descriptions",
", selected": ", sélectionné",
"captions settings": "Paramètres des sous-titres transcrits",
"subtitles settings": "Paramètres des sous-titres",
"descriptions settings": "Paramètres des descriptions",
"Text": "Texte",
"White": "Blanc",
"Black": "Noir",
"Red": "Rouge",
"Green": "Vert",
"Blue": "Bleu",
"Yellow": "Jaune",
"Magenta": "Magenta",
"Cyan": "Cyan",
"Background": "Arrière-plan",
"Window": "Fenêtre",
"Transparent": "Transparent",
"Semi-Transparent": "Semi-transparent",
"Opaque": "Opaque",
"Font Size": "Taille des caractères",
"Text Edge Style": "Style des contours du texte",
"None": "Aucun",
"Raised": "Élevé",
"Depressed": "Enfoncé",
"Uniform": "Uniforme",
"Dropshadow": "Ombre portée",
"Font Family": "Famille de polices",
"Proportional Sans-Serif": "Polices à chasse variable sans empattement (Proportional Sans-Serif)",
"Monospace Sans-Serif": "Polices à chasse fixe sans empattement (Monospace Sans-Serif)",
"Proportional Serif": "Polices à chasse variable avec empattement (Proportional Serif)",
"Monospace Serif": "Polices à chasse fixe avec empattement (Monospace Serif)",
"Casual": "Manuscrite",
"Script": "Scripte",
"Small Caps": "Petites capitales",
"Reset": "Réinitialiser",
"restore all settings to the default values": "Restaurer tous les paramètres aux valeurs par défaut",
"Done": "Terminé",
"Caption Settings Dialog": "Boîte de dialogue des paramètres des sous-titres transcrits",
"Beginning of dialog window. Escape will cancel and close the window.": "Début de la fenêtre de dialogue. La touche d'échappement annulera et fermera la fenêtre.",
"End of dialog window.": "Fin de la fenêtre de dialogue."
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
