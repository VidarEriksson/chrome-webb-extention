
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.color) {
    const colorDisplay = document.getElementById('colorDisplay');
    colorDisplay.textContent = 'Color: ' + message.color;
    colorDisplay.style.color = message.color;
  }
});
