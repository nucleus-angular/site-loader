/**
 * # Site Loader
 *
 * This services allows you to create site loader indicators.  There are 2 types of indicators that can be creating.
 *
 * The first type is a site wide indicator which takes of the whole screen and prevent the user from doing anything.  Think of something like where GMail first loads
 *
 * EXAMPLE TODO
 *
 * The second type of indicator is more of a page to page type indicator that would generally be used while the application is doing something.  Think of the loading message GMail show when switching tabs.
 *
 * EXAMPLE TODO
 *
 * @module nag.siteLoader
 * @ngservice nagSiteLoader
 */
angular.module('nag.siteLoader')
.factory('nagSiteLoader', [
  'nagNotify',
  function(nagNotify) {
    var nagNotifyId = null;
    return {
      /**
       * Enable blocking site loader
       *
       * @method enableBlocking
       *
       * @param {string} [html] HTML to use for the loading screen
       */
      enableBlocking: function(html) {
        if(!html) {
          html = '<div class="text">Loading Application</div>';
        }

        if($('#site-loader').length === 0) {
          $('body').append('<div id="site-loader" class="site-loader is-active">' + html + '</div>');
        }
      },

      /**
       * Disable the blocking site loader
       *
       * @method disableBlocking
       */
      disableBlocking: function() {
        if($('#site-loader').length !== 0) {
          $('#site-loader').remove();
        }
      },

      /**
       * Whether or not the blocking site loader is active
       *
       * @todo: research: can this be turned into a property with defineProperty instead of having this a a method?
       *
       * @method isBlockingActive
       *
       * @returns {boolean} Whether or not the blocking site loader is active
       */
      isBlockingActive: function() {
        return $('#site-loader').length !== 0;
      },

      /**
       * Enable non-blocking site loader
       *
       * @method enableNotBlocking
       *
       * @todo: get link to notofy component documentation in this parameter description
       * @param {options} options Options for the notify component that is used for the non-blockign site loader
       */
      enableNonBlocking: function(options) {
        var self = this;

        var notifyOptions = _.extend({
          content: '<div class="message notice">loading data</div>',
          autoCloseDelay: false,
          closeOnClick: false,
          verticalPosition: 'top',
          horizontalPosition: 'middle',
          cssClass: 'non-blocking-loader',
          margin: 0
        }, options);

        if(nagNotifyId) {
          self.disableNonBlocking();
        }

        nagNotifyId = nagNotify.notify(notifyOptions);
      },

      /**
       * Disable the non-blocking site loader
       *
       * @method disableNonBlocking
       */
      disableNonBlocking: function() {
        if(nagNotifyId) {
          nagNotify.remove(nagNotifyId);
          nagNotifyId = null;
        }
      }
    }
  }
]);
