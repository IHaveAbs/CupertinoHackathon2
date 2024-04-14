window.alert("yoooooooo");
console.log("fdslkafjldsakjfa");

document.body.addEventListener("mouseover", function(event) {
  //console.log(event);
  var elementext = event.target.innerText;
  console.log(elementext)
// create an instance of the speech synthesis object
});
function speak(elementext) {
  chrome.tts.speak(elementext, { rate: 1.0 }); // Adjust rate as needed
}