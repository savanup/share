(function($) {
  
  $.introLoader = function(element, options) {
    var defaults = {
      animation: {
        name: 'simpleLoader',
        options: {
          /* Shared Options */
          exitFx: 'fadeOut',
          ease: 'linear',
          style: 'light',
          delayBefore: 500,
          delayAfter: 0,
          exitTime: 300,
          animationTime: 300,
          customGif: false,
          customGifBgColor: false,
          /* "doubleLoader" animation only */
          progbarTime: 300,
          progbarDelayAfter: 300,
          /* "Globals Options */
          preventScroll: false,
          fixed: true,
          stop: true,
          onAfter: function() {},
          onBefore: function() {}
        }
      },
      spinJs: {}
    }

    var plugin = this;
    plugin.settings = {}
    var $element = $(element),
      element = element;

    //Constructor
    plugin.init = function() {
      plugin.settings = $.extend(true, defaults, options);

      // spinJS Options
      var spinOpt = {
        lines: this.settings.spinJs.lines,
        length: this.settings.spinJs.length,
        width: this.settings.spinJs.width,
        radius: this.settings.spinJs.radius,
        corners: this.settings.spinJs.corners,
        rotate: this.settings.spinJs.rotate,
        direction: this.settings.spinJs.direction,
        color: this.settings.spinJs.color,
        speed: this.settings.spinJs.speed,
        trail: this.settings.spinJs.trail,
        shadow: this.settings.spinJs.shadow,
        hwaccel: this.settings.spinJs.hwaccel,
        className: this.settings.spinJs.className,
        zIndex: this.settings.spinJs.zIndex,
        top: this.settings.spinJs.top,
        left: this.settings.spinJs.left
      }

      // animation options object
      var anim = plugin.settings.animation.name;
      var animOpt = plugin.settings.animation.options;
      var spinOpt = plugin.settings.spinJs;

      // Choose Animation
      switch (anim) {
        case "doubleLoader":
          loadAnim(element, animOpt);
          break;
      }

    }

    /*  PUBLICS    */

    plugin.stop = function() {

        switch (plugin.settings.animation.name) {
          case "doubleLoader":
            loadAnimExit();
            break;
        }

      } // end plugin.stop()
    plugin.destroy = function() {
      $(element).removeData();
    }

    /*======== PRIVATES =========*/

    // ---- doubleLoaderAnimation --------
    var loadAnim = function(element, animOpt) {
      // onBefore function 
      animOpt.onBefore();
      animationOpening(element, animOpt, 'doubleLoader');
      var markup = '';
      markup += '<div class="loadUp"></div>';
      markup += '<div class="loadDown"></div>';
      markup += '<div class="loadBar"><span><div></div></span></div>';
      $(element).html(markup);
      $(element).show();

      if (animOpt.stop === true) {
        $(window).on('load', function() {
          loadAnimExit();
        });
      }

    }

    var loadAnimExit = function() {

      var animOpt = plugin.settings.animation.options;

      setTimeout(function() {

        $(element).find('.loadBar').find('span').animate({
            'width': '80%'
          },
          animOpt.progbarTime,
          animOpt.ease,
          slidingDoorsVertical()
        );

      }, animOpt.delayBefore); // end Timeout
      function slidingDoorsVertical() {
          setTimeout(function() {
            $(element).find('.loadBar').hide();
            $(element).find('.loadUp, .loadDown').animate({
                'height': 0
              },
              animOpt.exitTime,
              animOpt.ease,
              function() {
                $(element).hide();
                if (animOpt.preventScroll === true) $('body').removeClass('introLoader_preventScroll');
              }
            );
            $('.loadDown').promise().done(function() {
              animOpt.onAfter(); // onAfter function
            });
          }, animOpt.progbarTime + animOpt.progbarDelayAfter); // end Timeout    
        } // end slidingDoorsVertical()
    }

    // UTILITIES
    var animationOpening = function(element, animOpt, elementClass) {
        if (animOpt.preventScroll === true) $('body').addClass('introLoader_preventScroll');
        var styleClass = 'theme-' + animOpt.style;
        if (animOpt.fixed === false) {
          $(element).addClass('absolute');
          $(element).parent().css({
            'position': 'relative',
            'overflow': 'hidden'
          });
        }
        $(element).addClass('introLoader ' + elementClass + ' ' + styleClass);
      } // end of animationOpening()

    var stringSplitter = function(string, spanClass) {
        var str = string.split("");
        var markup = "";
        for (var i = 0; i < str.length; i++) {
          var spanCssClass = spanClass;
          if (str[i] == " ") {
            spanCssClass = spanClass + "-space";
            str[i] = " ";
          }
          markup += '<span class="' + spanCssClass + '">' + str[i] + '</span>';
        }
        return markup;
      } //end of stringSplitter()

    /* PLUGIN INIT */
    plugin.init();
  }

  $.fn.introLoader = function(options) {
    return this.each(function() {
      if (undefined == $(this).data('introLoader')) {
        var plugin = new $.introLoader(this, options);
        $(this).data('introLoader', plugin);
      } else {
        $(this).removeData('introLoader');
        var plugin = new $.introLoader(this, options);
        $(this).data('introLoader', plugin);
      }
    });
  }

})(jQuery);

$(document).on('ready', function() {
  $("#element").introLoader({
    animation: {
      name: 'doubleLoader',
      options: {
        exitFx: 'fadeOut',
        ease: "easeInOutCirc",
        style: 'ocean zebra',
        delayBefore: 500,
        exitTime: 500,
        progbarTime: 700,
        progbarDelayAfter: 400,
        preventScroll: true
      }
    }
  });
});
