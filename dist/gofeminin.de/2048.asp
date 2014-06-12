<%
+pub_TargetCiblage=pub_TargetCiblage & ";game_2048"

af_HasMobileWebVersion=True
af_MobileWebUrl="/spiele/2048.asp"

noAdRefresh = true ' Set to TRUE for some specific German tools
outil_IVW = "2048" ' To set even for none German. Example: Beautystyler
outil_OEWA = "UnterhaltungGames/Games/Gamesueberblick/gofeminin.de" ' example: Beautystyler
outil_pubPageID = "" ' Smart PageID, if required
outil_pubNomPage = "" ' Smart Page name, if required
outil_SmartKeyword = "game_2048" ' Smart Keywords, if required
OpenGraphToolID = "" ' One by site, to define in AFSQL30C.WorldOpenGraph.OGTools
OpenGraphShortTitle = "Der gofeminin Aszendentenrechner" ' For Facebook
OpenGraphLongTitle = "Finden Sie ihren Aszendenten heraus!" ' For Facebook
OpenGraphLogo = "" ' For Facebook
ThisPageURL = "http://"&aff_BaseURL&"/spiele/2048.asp"
moteur_Titre = "gofeminin"
moteur_SubTitre = " - 2048"
'ToolFlashURL = "/spiele/bubbleshooter/bubbleshooterdata/BubbleShooter2.swf?stringsPath=/spiele/bubbleshooter/bubbleshooterdata/strings_de.xml&amp;stylePath=/spiele/bubbleshooter/bubbleshooterdata/styles.xml&amp;fontPath=/spiele/bubbleshooter/bubbleshooterdata/&amp;imagesPath=/spiele/bubbleshooter/bubbleshooterdata/assets/&amp;topLevel=http://www.gofeminin.de&amp;siteID=4" ' With local parameters, if required
'ToolFlashWidth = 680 ' Pixel value
'ToolFlashHeight = 550 ' Pixel value
'ColumnColorBackground = "#ffffff" ' Hexa code
'ColumnColorLine = "#494541" ' Hexa code
'ColumnColorAds = "#494541" ' Hexa code
Set languages=Server.CreateObject("Scripting.Dictionary")
with languages

  .add 1, "fr"
  .add 2, "es"
  .add 3, "it"
  .add 4, "de"
  .add 5, "en"
  .add 19,"de"
  .add 25, "pl"
  .add 26, "de"
  .add 29, "us"
  .add 30, "ca"
  .add 36, "nl"
  .add 41, "pt"
end with
%>
<!--#include virtual="/spiele/tete.asp" -->
<%
if outil_pubPageID <> "" then pub_PageID = outil_pubPageID
if outil_pubNomPage <> "" then pub_NomPage = outil_pubNomPage
'TODO: xtn2
if noAdRefresh = false then 
  colonneforum_iframe_src = "/world/edito/colonneforum_iframe_v2.asp" & _
                            "?cadre=spiele" & _
                            "&PageID=" & pub_PageID & _ 
                            "&NomPage=" & pub_NomPage & _
                            "&Keyword=" & outil_SmartKeyword & _
                            "&ColumnColorBackground=" & Server.URLEncode(ColumnColorBackground) & _
                            "&ColumnColorLine=" & Server.URLEncode(ColumnColorLine) & _
                            "&ColumnColorAds=" & Server.URLEncode(ColumnColorAds)
end if

%>
<!--#include virtual="/world/tools/tools_tete.asp" -->
<!--#include virtual="/world/edito/inc_sharedfunctions_edito.asp" -->
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
        <!--#include virtual="/world/edito/title.asp" -->
    <!--#include virtual="/world/tools/tools_head.asp" -->

  <title>2048</title>

  
  <meta name="viewport" content="width=device-width, target-densitydpi=160dpi, initial-scale=1.0, maximum-scale=1, user-scalable=no, minimal-ui">
</head>
<body>
<!--#include virtual="/world/edito/titre.asp" -->
      <!--#include virtual="/world/tools/tools_avant.asp" -->
    <!--#include virtual="/spiele/avant.asp" --> 
<!-- APP START -->

  <div class="container">
    <div class="heading">
      <h1 class="title"></h1>
      <div class="scores-container">
        <div class="score-container">0</div>
        <div class="best-container">0</div>
      </div>
    </div>
    <div class="above-game">
      <p class="game-intro"></strong></p>
      <a class="restart-button"></a>
    </div>
    <div class="game-container">
      <div class="game-message">
        <p></p>
        <div class="lower">
          <a class="keep-playing-button"></a>
          <a class="retry-button"></a>
        </div>
      </div>
      <div class="grid-container">
        <div class="grid-row">
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
        </div>
        <div class="grid-row">
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
        </div>
        <div class="grid-row">
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
        </div>
        <div class="grid-row">
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
        </div>
      </div>
      <div class="tile-container"></div>
    </div>
    <hr>
    <p class="game-explanation"></p>
    <hr>
  </div>
  <link href="style/main.css" rel="stylesheet" type="text/css">
  <script src="js/app.js"></script> 

<script language="JavaScript" type="text/javascript">
      function call_IVW(){
       try { af_doRefreshStats(); } catch(e) {}
        
        try {  af_doRefreshFrame(); } catch(e) {}
      }
    
  </script>
  
<!-- APP END -->
    <!--#include virtual="/spiele/apres.asp" -->
</body>
</html>
