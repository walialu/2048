/*Konstruktor
für OOP siehe auch : http://molily.de/js/organisation-module.html#object-literal*/
GofemHelper = (function() {
      //alle öffentlichen Methoden und Variablen kommen hier rein und werden später zurückgegeben:
      var pub ={};
      var dataParam;

       pub.gofem2048Game = {
        tagging : {},
        mainURL:{},
        screens : {},
          settings : {
              id : 0,
              lang : "de",
          },
          siteID : {},
          call_timer_function_time:{},
          call_timer_function_name:{}
      };
      pub.returnParams = function(){
        return GofemHelper.gofem2048Game;
      };
      pub.getParams = function () {
         var script = document.getElementById('gofemhelperJS');
         var tokens = script.src.split('?')[1].split('&');
         var params = {};
        
         for(var k=0; k<tokens.length; k++) {
           var tmp = tokens[k].split('=');
          if (tmp[0]=="id"){
              GofemHelper.gofem2048Game.settings.id=tmp[1];
          }else if (tmp[0]=="lang"){
             GofemHelper. gofem2048Game.settings.lang=tmp[1];
          }else if (tmp[0]=="mainURL"){
            GofemHelper.gofem2048Game.mainURL=tmp[1];
          }else if (tmp[0]=="counter_pixel_method_name"){
            counter_pixel_method_name=tmp[1];
          }else if (tmp[0]=="siteID"){
            GofemHelper.gofem2048Game.siteID=tmp[1];
          }else if (tmp[0]=="call_timer_function_time"){
            if (tmp[1] != undefined){
              GofemHelper.gofem2048Game.call_timer_function_time=tmp[1];
            }
          }else if (tmp[0]=="call_timer_function_name"){
            GofemHelper.gofem2048Game.call_timer_function_name=tmp[1];
          }else if (tmp[0]=="SSOPath"){
            GofemHelper.gofem2048Game.SSOPath=tmp[1];
          }
        //only set the Ad reload if its been set by the params:
        if (GofemHelper.gofem2048Game.call_timer_function_name !=undefined && GofemHelper.gofem2048Game.call_timer_function_name.length > 2 && GofemHelper.gofem2048Game.call_timer_function_time !=undefined){
              var myVar = setInterval(function(){callAddReload()},GofemHelper.gofem2048Game.call_timer_function_time);
        }
       }
       //alert ("GofemHelper. gofem2048Game.settings.lang: "+GofemHelper. gofem2048Game.settings.lang);
     };
     
      pub.tagging = function (){
         if (counter_pixel_method_name){
              eval (counter_pixel_method_name+"()");
          }
          
      };

     pub.callAddReload = function (){
         eval(GofemHelper.gofem2048Game.call_timer_function_name+"()");
     };

     pub.setHTMLOutputWinLose = function (won){
            var message = won ? GofemHelper.dataParam[0].general.text_game_end_page : GofemHelper.dataParam[0].general.text_end_game_lost;
      	    this.messageContainer = document.querySelector(".game-message");
      	    this.messageContainer.getElementsByTagName("p")[0].textContent = message;
      };

     pub.setHtmlOutput = function (){
         var that =this;
         var myparameterurl="text/strings_"+this.gofem2048Game.settings.lang+".txt";
         //alert ("myparameterurl: "+myparameterurl)
         $.getJSON(myparameterurl,function(dataParam){
            that.dataParam=dataParam;
             $( "p.game-explanation" ).html(dataParam[0].general.how_to_text_short);
             $( "h1.title" ).html(dataParam[0].general.game_title);
             $( "a.restart-button" ).html(dataParam[0].general.buttons.button_new_game);
             $( "a.keep-playing-button" ).html(dataParam[0].general.buttons.button_new_game);
             $(".score-container").attr('data-content',dataParam[0].general.text_result);
             $(".best-container").attr('data-content',dataParam[0].general.label_score);
             $(".game-intro").html(dataParam[0].general.game_subline);
            //das erst ausführen wenn die txt bzw. json Datei geladen wurde:
             that.getParams();
            // that.setHTMLOutputWinLose();
         });
    };
    return pub;
    //end setHTML...

})();