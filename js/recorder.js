// Generated by CoffeeScript 1.3.1
(function() {
  var capycorder, stateChangesListener;

  window.Clipboard = {
    copy: function(text) {
      return chrome.extension.sendRequest({
        name: 'copy',
        text: text
      });
    }
  };

  capycorder = new Capycorder;

  capycorder.bind('captured', function(data) {
    return chrome.extension.sendRequest(_.extend({
      name: 'captured'
    }, data));
  });

  stateChangesListener = function(request, sender, sendResponse) {
    if (request.state === 'recording') {
      capycorder.setTabURL(request.tabURL);
    }
    return capycorder.switchState(request.state);
  };

  chrome.extension.onRequest.addListener(stateChangesListener);

}).call(this);