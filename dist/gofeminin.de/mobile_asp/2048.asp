
<%@ Language = VBscript%>
<!--#include virtual="/ascripts/tete.asp" -->
<!--#include virtual="/world/mobileweb/inc_functions.asp" -->

<%
af_ClassicWebUrl="/spiele/2048.asp"
'showColonneGauche = false ' If false, remove left column (191px + 15px margin-right)
'showColonneDroite = false ' If false, remove right column (300px)
'no_breadCrumb = false ' If true, remove breadcrumb
pub_TargetCiblage = pub_TargetCiblage & ";game_2048" ' Add tags to this page on Smart
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

mobile_showDocType

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
<html>
<head>
      <!--#include virtual="/world/edito/title.asp" -->
    <!--#include virtual="/world/tools/tools_head.asp" -->

  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <%
    moteur_Titre = "2048 - Mobile"
    moteur_SubTitre = " - gofeminin.de"
    %>
    <% mobile_getMetaLink aff_SiteID, RubriqueID %>



<meta name="viewport" content="width=device-width, target-densitydpi=160dpi, initial-scale=1.0, maximum-scale=1, user-scalable=no, minimal-ui">
</head>
<body>

  <!--#include virtual="/world/edito/titre.asp" -->
      <!--#include virtual="/avant.asp" -->
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
 
        
        try {  af_doRefreshStats(); } catch(e) {}
          try {  af_doRefreshFrame(); } catch(e) {}
          
      }
      /*var old_onload = window.onload || function(){};

      old_onload = function(){

        var url,siteid;
        siteid='<%=siteid%>';
        
        url="http://astrotext.onmeda.dd/index.php/generictext/settext/?siteid="+siteid;

        callJson.buildScript(url,"setup");

      }*/
  
      </script>

<!--#include virtual="/apres.asp" -->

  <script type="text/javascript">
      var iam_data, tagName;
      if (typeof COMSCORE != 'undefined') {
          COMSCORE.beacon({
            c1:2,
            c2:6034949,
            c3:"",
            c4:"", 
            c5:"",
            c6:"",
            c15:""
        });
    }
    tagName = "<%=outil_IVW%>";
    iam_data = { 
                    "st":"mobgofe", // site/domain 
                    "cp":"m-"+tagName, // code
                    "sv":(tagName == "homepage" ? "ke" : "mo"), // Befragungseinladung
                    "co":"kommentar" // comment           
                } 

        try {
            iom.c(iam_data,1);
        } catch(e) {
            
        }

     </script> 
  
  
    <script src="http://<%=aff_BaseURL%>/tools/js/tools_footer_mobile.js"></script>
     
</body>
</html>
