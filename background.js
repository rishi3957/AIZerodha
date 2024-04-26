chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
console.log(message)
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: message.action });
    });
  
});
