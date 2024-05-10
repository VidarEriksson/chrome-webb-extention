document.addEventListener('mouseover', function(e) {
 
  const color = window.getComputedStyle(e.target).getPropertyValue('color');

  
  chrome.runtime.sendMessage({ color: color });
});





  
  
  
  
 
  