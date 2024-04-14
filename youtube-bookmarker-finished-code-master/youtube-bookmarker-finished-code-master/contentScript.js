
document.body.addEventListener("mouseover", function(event) {
  //console.log(event);
  var elementext = event.target.innerText.toString();
  //console.log(elementext);
// create an instance of the speech synthesis object
  chrome.runtime.sendMessage({toSay: elementext}, function() {});

  console.log(document.getElementById(event.target.id.toString()));

   // Adjust rate as needed

});

document.body.addEventListener("mouseout", function(event) {
  //console.log("messaged stopped 1");
  chrome.runtime.sendMessage({toSay: "STOP the message"}, function() {});

});


