angular.module('nag.siteLoader', [
  'nag.notify'
])
.factory('nagSiteLoader', [
  'nagNotify',
  function(nagNotify) {
    var nagNotifyId = null;
    return {
      enableBlocking: function(html) {
        if(!html) {
          html = '<div class="site-loader-text">Loading Application</div>';
        }

        if($('#site-loader').length === 0) {
          $('body').append('<div id="site-loader" class="site-loader">' + html + '</div>');
        }
      },

      disableBlocking: function() {
        if($('#site-loader').length !== 0) {
          $('#site-loader').remove();
        }
      },

      isBlockingActive: function() {
        return $('#site-loader').length !== 0;
      },

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

      disableNonBlocking: function() {
        if(nagNotifyId) {
          nagNotify.remove(nagNotifyId);
          nagNotifyId = null;
        }
      }
    }
  }
]);
