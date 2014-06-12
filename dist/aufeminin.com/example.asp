
<%@ Language = VBscript%>
<%
pub_TargetCiblage=pub_TargetCiblage & ";game_2048"

af_HasMobileWebVersion=True
af_MobileWebUrl="/jeux/2048/default2.asp"

noAdRefresh = true ' Set to TRUE for some specific German tools
outil_IVW = "" ' To set even for none German. Example: Beautystyler
outil_OEWA = "" ' example: Beautystyler
outil_pubPageID = "" ' Smart PageID, if required
outil_pubNomPage = "" ' Smart Page name, if required
outil_SmartKeyword = "" ' Smart Keywords, if required
OpenGraphToolID = "" ' One by site, to define in AFSQL30C.WorldOpenGraph.OGTools
OpenGraphShortTitle = "Jouez à notre jeu 2048 en ligne !" ' For Facebook
OpenGraphLongTitle = "Notre jeu 2048 en ligne vous attend, découvrez votre score !" ' For Facebook
OpenGraphLogo = "" ' For Facebook
ThisPageURL = "http://"&aff_BaseURL&"/jeux/2048/default2.asp"
moteur_Titre = "Jeu 2048 en ligne : le jeu de logique gratuit qui vous défie"
moteur_SubTitre = " - 2048"
'ToolFlashURL = "/jeux/bubbleshooter/bubbleshooterdata/BubbleShooter2.swf?stringsPath=/jeux/bubbleshooter/bubbleshooterdata/strings_de.xml&amp;stylePath=/jeux/bubbleshooter/bubbleshooterdata/styles.xml&amp;fontPath=/jeux/bubbleshooter/bubbleshooterdata/&amp;imagesPath=/jeux/bubbleshooter/bubbleshooterdata/assets/&amp;topLevel=http://www.gofeminin.de&amp;siteID=4" ' With local parameters, if required
'ToolFlashWidth = 680 ' Pixel value
'ToolFlashHeight = 550 ' Pixel value
'ColumnColorBackground = "#ffffff" ' Hexa code
'ColumnColorLine = "#494541" ' Hexa code
'ColumnColorAds = "#494541" ' Hexa code
%>
<!--#include virtual="/jeux/tete.asp" -->
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
		<!--#include virtual="/world/edito/title.asp" -->
		<!--#include virtual="/world/tools/tools_head.asp" -->

		<title>2048</title>
		 <meta name="viewport" content="width=device-width, target-densitydpi=160dpi, initial-scale=1.0, maximum-scale=1, user-scalable=no, minimal-ui">
	</head>
	
	<body>
		<!--#include virtual="/world/edito/titre.asp" -->
		<!--#include virtual="/world/tools/tools_avant.asp" -->
		<!--#include virtual="/jeux/avant.asp" --> 

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


		  
		<!--#include virtual="/jeux/apres.asp" -->
	</body>
</html>
