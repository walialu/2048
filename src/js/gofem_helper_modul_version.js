/*jshint camelcase: false */
/*vim:tabstop=2:noexpandtab */
window.GofemHelper = window.GofemHelper || {};
window.GofemHelper._game_2048 = function () {
  var that = this;
  this.tagging = {};
  this.mainURL = {};
  this.languageObject = null;
  this.screens = {};
  this.settings = null;
  this.siteID = {};

  /**
   * Sets the language
   *
   * @param {Object} languageObject
   *
   * @returns {Object} languageObject
   */
  this.setLanguage = function ( languageObject ) {
    this.languageObject = languageObject;
  };

  /**
   * Sets the this.settings values according to opts.
   *
   * @param {Object} opts
   * @param {Number} opts.id IDK, to be documented by Mischa
   * @param {String} opts.lang Language code ( probably unused as of now )
   *
   * @returns {Object} self.settings
   */
  this.setSettings = function ( opts ) {
    opts.id = opts.id || 0;
    opts.lang = opts.lang || "de";
    this.settings = opts;

    return this.settings;
  };

  this.initAdReload = function () {
    var set = this.settings,
        isFunc = null;
    if ( set.callTimerFunctionName && set.callTimerFunctionTime ) {
      isFunc = eval ('typeof ' + set.callTimerFunctionName);
      if (  isFunc === 'function' ){
        setInterval(
          function(){
            eval(set.callTimerFunctionName + "()");
          },
          set.callTimerFunctionTime
        );
      } else {
        window.console.log('Could not find callTimerFunctionName: ' +
            set.callTimerFunctionName);
      }
    }
  };

  this.tagging = function () {
    var set = this.settings,
        isFunc = null;
    if (set.counterPixelMethodName){
      isFunc = eval ('typeof ' + set.counterPixelMethodName);
      if ( isFunc ) {
        eval ( set.counterPixelMethodName+"()" );
      }
    }
  };

  this.callAddReload = function () {
    eval( this.settings.callTimerFunctionName + "()" );
  };

  this.setHTMLOutputWinLose = function ( won ) {
    var message = this.languageObject.general.text_end_game_lost;
    if ( won ) {
      message = this.languageObject.general.text_game_end_page;
    }
    this.messageContainer = document.querySelector(".game-message");
    this.messageContainer.getElementsByTagName("p")[0].textContent = message;
  };

  this.setHtmlOutput = function () {
    var lo = this.languageObject;

    $( "p.game-explanation" ).html(
      lo.general.how_to_text_short
    );

    $( "h1.title" ).html(
      lo.general.game_title
    );

    $( "a.restart-button" ).html(
      lo.general.buttons.button_new_game
    );

    $( "a.keep-playing-button" ).html(
      lo.general.buttons.button_new_game
    );

    $(".score-container").attr(
      'data-content',
      lo.general.text_result
    );

    $(".best-container").attr(
      'data-content',
      lo.general.label_score
    );

    $(".game-intro").html(
      lo.general.game_subline
    );

    $(".retry-button").html(
      lo.general.buttons.button_retry
    );
  };

  setTimeout(function(){that.initAdReload();},1000);

  return this;
};
window.GofemHelper.gofem2048Game = new window.GofemHelper._game_2048();
