
chrome.runtime.onMessage.addListener(function(request) {
  if (request.toSay == "STOP the message") {
    chrome.tts.stop();
  }
  else {
    chrome.tts.speak(request.toSay, 
      { rate: 1.0, onEvent: function(event) {}}, function() {});
  }
  
});
/*chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.url && tab.url.includes("youtube.com/watch")) {
    const queryParameters = tab.url.split("?")[1];
    const urlParameters = new URLSearchParams(queryParameters);

    chrome.tabs.sendMessage(tabId, {
      type: "NEW",
      videoId: urlParameters.get("v"),
    });
  }
});*/
