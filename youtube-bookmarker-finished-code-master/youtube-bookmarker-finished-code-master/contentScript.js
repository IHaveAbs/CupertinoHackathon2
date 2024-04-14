
document.body.addEventListener("mouseover", function(event) {
  //send message to active text to speech
  var elementext = event.target.innerText.toString();
  chrome.runtime.sendMessage({toSay: elementext}, function() {});

});

document.body.addEventListener("mouseout", function(event) {
  //stops the text to speech
  chrome.runtime.sendMessage({toSay: "STOP the message"}, function() {});

});

document.body.addEventListener("oncontextmenu", function(event) {
  var e = event;
  console.log("hover");
  console.log(e.id);

});


