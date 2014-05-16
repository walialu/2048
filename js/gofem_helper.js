/*Konstruktor
für OOP siehe auch : http://molily.de/js/organisation-module.html#object-literal*/
function GofemHelper() {
	 
      /** @namespace */
      this.gofem2048Game = {
      	bla1 : "blubb",
      	bla2 : "bla",
        tagging : {},
        mainURL:{},
        screens : {},
        dataParam: {},
          settings : {
              id : 0,
              lang : "de",
          },
          siteID : {},
          memoryURL : "http://tools.aufeminin.com/",
          call_timer_function_time:{},
          call_timer_function_name:{}
      };


      this.returnParams=function(){
        return this.gofem2048Game;
      };

      /**
      * Getting all the fancy parameters from the first call of the loader.js on the main html. 
      */

      this.getParams = function () {
        var script = document.getElementById('gofemhelperJS');
        var tokens = script.src.split('?')[1].split('&');
        var params = {};
        
        for(var k=0; k<tokens.length; k++) {
          var tmp = tokens[k].split('=');
          
          if (tmp[0]=="id"){
              this.gofem2048Game.settings.id=tmp[1];
          }else if (tmp[0]=="lang"){
              this.gofem2048Game.settings.lang=tmp[1];
          }else if (tmp[0]=="mainURL"){
            this.gofem2048Game.mainURL=tmp[1];
          }else if (tmp[0]=="counter_pixel_method_name"){
            counter_pixel_method_name=tmp[1];
          }else if (tmp[0]=="siteID"){
            this.gofem2048Game.siteID=tmp[1];
          }else if (tmp[0]=="call_timer_function_time"){
            if (tmp[1] != undefined){
              this.gofem2048Game.call_timer_function_time=tmp[1];
            }
          }else if (tmp[0]=="call_timer_function_name"){
            this.gofem2048Game.call_timer_function_name=tmp[1];
          }else if (tmp[0]=="SSOPath"){
            this.gofem2048Game.SSOPath=tmp[1];
          }
        }

        
        //only set the Ad reload if its been set by the params:
        if (this.gofem2048Game.call_timer_function_name !=undefined && this.gofem2048Game.call_timer_function_name.length > 2 && this.gofem2048Game.call_timer_function_time !=undefined){
              var myVar = setInterval(function(){callAddReload()},this.gofem2048Game.call_timer_function_time);
        }
       }


      /**
       * All the tagging like IVW, Google Analytics and Ad reload
       */

      this.tagging = function (){
         if (counter_pixel_method_name){
              eval (counter_pixel_method_name+"()");
          }
          
      }

      this.callAddReload = function (){
         eval(this.gofem2048Game.call_timer_function_name+"()");
       }

      this.setHTMLOutputWinLose=function (won){
      	//alert ("bla1: "+this.bla1+" this.gofem2048Game: "+this.gofem2048Game.bla1);
      	console.log(this);
		//alert ("-text_end_game_win: "+this.returnParams().dataParam[0].general.text_end_game_win);
         //  var message = won ? dataParam[0].general.text_end_game_lost : dataParam[0].general.text_end_game_win;
      	  // this.messageContainer = document.querySelector(".game-message");
      	  // this.messageContainer.getElementsByTagName("p")[0].textContent = message;
      }

       this.setHtmlOutput=function (){
         var that =this;
         console.log(that);
         var myparamaterurl="text/strings_"+this.gofem2048Game.settings.lang+".txt";
         //alert ("myparamerurl: "+myparamaterurl+" : "+$( "h1.logo" ));
         $.getJSON(myparamaterurl,function(dataParam){
            that.gofem2048Game.bla1=dataParam[0].general.text_end_game_lost;
            that.bla2=dataParam[0].general.text_end_game_win;
             // console.log("getJson: ");
             // console.log(that);
             // console.log(that.gofem2048Game);
             $( "p.game-explanation" ).html(dataParam[0].general.how_to_text_short);
             $( "h1.title" ).html(dataParam[0].general.game_title);
             $( "a.restart-button" ).html(dataParam[0].general.buttons.button_new_game);
             $( "a.keep-playing-button" ).html(dataParam[0].general.buttons.button_new_game);
             //$(".score-container:after").css("content", dataParam[0].general.text_result);
             $(".score-container").attr('data-content',dataParam[0].general.text_result);
             $(".best-container").attr('data-content',dataParam[0].general.label_score);
             //game_subline
             $(".game-intro").html(dataParam[0].general.game_subline);
         });
    }
    //end setHTML...

}