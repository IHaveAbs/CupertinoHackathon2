var originalsize = 0;
document.body.addEventListener("mouseover", function(event) {
  //send message to active text to speech
  var elementext = event.target.innerText.toString();
  chrome.runtime.sendMessage({toSay: elementext}, function() {});
  originalsize = event.target.style.fontSize;
  event.target.style.fontSize = "24px";
  
});

document.body.addEventListener("mouseout", function(event) {
  //stops the text to speech
  chrome.runtime.sendMessage({toSay: "STOP the message"}, function() {});
  event.target.style.fontSize = originalsize;
});


