(function(videojs) {
  'use strict';
  videojs.addLanguage("en", {
  "Audio Player": "Audio Player",
  "Video Player": "Video Player",
  "Play": "Play",
  "Pause": "Pause",
  "Replay": "Replay",
  "Current Time": "Current Time",
  "Duration": "Duration",
  "Remaining Time": "Remaining Time",
  "Stream Type": "Stream Type",
  "LIVE": "LIVE",
  "Seek to live, currently behind live": "Seek to live, currently behind live",
  "Seek to live, currently playing live": "Seek to live, currently playing live",
  "Loaded": "Loaded",
  "Progress": "Progress",
  "Progress Bar": "Progress Bar",
  "progress bar timing: currentTime={1} duration={2}": "{1} of {2}",
  "Fullscreen": "Fullscreen",
  "Non-Fullscreen": "Non-Fullscreen",
  "Mute": "Mute",
  "Unmute": "Unmute",
  "Playback Rate": "Playback Rate",
  "Subtitles": "Subtitles",
  "subtitles off": "subtitles off",
  "Captions": "Captions",
  "captions off": "captions off",
  "Chapters": "Chapters",
  "Descriptions": "Descriptions",
  "descriptions off": "descriptions off",
  "Audio Track": "Audio Track",
  "Volume Level": "Volume Level",
  "You aborted the media playback": "You aborted the media playback",
  "A network error caused the media download to fail part-way.": "A network error caused the media download to fail part-way.",
  "The media could not be loaded, either because the server or network failed or because the format is not supported.": "The media could not be loaded, either because the server or network failed or because the format is not supported.",
  "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.": "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",
  "No compatible source was found for this media.": "No compatible source was found for this media.",
  "The media is encrypted and we do not have the keys to decrypt it.": "The media is encrypted and we do not have the keys to decrypt it.",
  "Play Video": "Play Video",
  "Close": "Close",
  "Close Modal Dialog": "Close Modal Dialog",
  "Modal Window": "Modal Window",
  "This is a modal window": "This is a modal window",
  "This modal can be closed by pressing the Escape key or activating the close button.": "This modal can be closed by pressing the Escape key or activating the close button.",
  ", opens captions settings dialog": ", opens captions settings dialog",
  ", opens subtitles settings dialog": ", opens subtitles settings dialog",
  ", opens descriptions settings dialog": ", opens descriptions settings dialog",
  ", selected": ", selected",
  "captions settings": "captions settings",
  "subtitles settings": "subtitles settings",
  "descriptions settings": "descriptions settings",
  "Text": "Text",
  "White": "White",
  "Black": "Black",
  "Red": "Red",
  "Green": "Green",
  "Blue": "Blue",
  "Yellow": "Yellow",
  "Magenta": "Magenta",
  "Cyan": "Cyan",
  "Background": "Background",
  "Window": "Window",
  "Transparent": "Transparent",
  "Semi-Transparent": "Semi-Transparent",
  "Opaque": "Opaque",
  "Font Size": "Font Size",
  "Text Edge Style": "Text Edge Style",
  "None": "None",
  "Raised": "Raised",
  "Depressed": "Depressed",
  "Uniform": "Uniform",
  "Dropshadow": "Dropshadow",
  "Font Family": "Font Family",
  "Proportional Sans-Serif": "Proportional Sans-Serif",
  "Monospace Sans-Serif": "Monospace Sans-Serif",
  "Proportional Serif": "Proportional Serif",
  "Monospace Serif": "Monospace Serif",
  "Casual": "Casual",
  "Script": "Script",
  "Small Caps": "Small Caps",
  "Reset": "Reset",
  "restore all settings to the default values": "restore all settings to the default values",
  "Done": "Done",
  "Caption Settings Dialog": "Caption Settings Dialog",
  "Beginning of dialog window. Escape will cancel and close the window.": "Beginning of dialog window. Escape will cancel and close the window.",
  "End of dialog window.": "End of dialog window.",
  "{1} is loading.": "{1} is loading.",
  "Exit Picture-in-Picture": "Exit Picture-in-Picture",
  "Picture-in-Picture": "Picture-in-Picture"
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
