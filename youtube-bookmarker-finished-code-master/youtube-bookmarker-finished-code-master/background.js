
chrome.runtime.onMessage.addListener(function(request) {
  if (request.toSay.toString() == "STOP the message") {
    chrome.tts.stop();
    console.log("message stopped");
  }
  else if (request.toSay.toString() == "makesizebigger") {
    console.log(request.toBe.target.id.toString());
  }
  else {
    chrome.tts.speak(request.toSay, 
      { rate: 1.0, onEvent: function(event) {}}, function() {});
  }
  
});

chrome.tabs.onActivated.addListener(function(activeInfo) {
  console.log("chrome tts stopped");
  chrome.tts.stop();
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
