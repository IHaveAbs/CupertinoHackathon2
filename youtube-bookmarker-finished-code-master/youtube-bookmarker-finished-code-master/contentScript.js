
document.body.addEventListener("mouseover", function(event) {
  //console.log(event);
  var elementext = event.target.innerText.toString();
  console.log(elementext);
// create an instance of the speech synthesis object
  chrome.runtime.sendMessage({toSay: elementext}, function() {});

   // Adjust rate as needed

});

document.body.addEventListener("mouseleave", function(event) {
  chrome.runtime.sendMessage({toSay: "STOP the message"}, function() {});

});

