function getTabId() {
    return new Promise((resolve, reject) => {
        try {
            chrome.tabs.query({
                active: true,
            }, function (tabs) {
                return parseInt(tabs[0].id);
            })
        } catch (e) {
            reject(e);
        }
    })
}
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('tcschart').addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // chrome.tabs.reload(tabs[0].id);
        chrome.tabs.update(tabs[0].id, {url: 'https://kite.zerodha.com/chart/web/ciq/NSE/TCS/2953217'});
      });
    });
    document.getElementById('dashboard').addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // chrome.tabs.reload(tabs[0].id);
        chrome.runtime.sendMessage({ action: "1" });
        // chrome.tabs.update(tabs[0].id, {url: 'https://kite.zerodha.com/dashboard'});
      });
    });
    document.getElementById('orders').addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // chrome.tabs.reload(tabs[0].id);
        chrome.runtime.sendMessage({ action: "2" });
        // chrome.tabs.update(tabs[0].id, {url: 'https://kite.zerodha.com/orders'});
      });
    });
    document.getElementById('holdings').addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // chrome.tabs.reload(tabs[0].id);
        chrome.runtime.sendMessage({ action: "3" });
        // chrome.tabs.update(tabs[0].id, {url: 'https://kite.zerodha.com/holdings'});
      });
    });
    document.getElementById('positions').addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // chrome.tabs.reload(tabs[0].id);
        chrome.runtime.sendMessage({ action: "4" });
        // chrome.tabs.update(tabs[0].id, {url: 'https://kite.zerodha.com/positions'});
      });
    });
    document.getElementById('buy').addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // chrome.tabs.reload(tabs[0].id);
  var actionType='buy';
  var shareName = document.getElementById("shareNameInput").value;
  var quantity = document.getElementById("quantityInput").value;
  var price = document.getElementById("priceInput").value;
  var orderType = document.getElementById("orderTypeSelect").value;
  var transactionType = document.getElementById("transactionTypeSelect").value;
  stock={actionType:actionType,shareName:shareName,qty:quantity,price:price,orderType:orderType,transactionType:transactionType}
        chrome.runtime.sendMessage({ action: stock });
        // chrome.tabs.update(tabs[0].id, {url: 'https://kite.zerodha.com/positions'});
      });
    });
    document.getElementById('sell').addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // chrome.tabs.reload(tabs[0].id);
  var actionType='sell';
  var shareName = document.getElementById("shareNameInput").value;
  var quantity = document.getElementById("quantityInput").value;
  var price = document.getElementById("priceInput").value;
  var orderType = document.getElementById("orderTypeSelect").value;
  var transactionType = document.getElementById("transactionTypeSelect").value;
  stock={actionType:actionType,shareName:shareName,qty:quantity,price:price,orderType:orderType,transactionType:transactionType}
        chrome.runtime.sendMessage({ action: stock });
        // chrome.tabs.update(tabs[0].id, {url: 'https://kite.zerodha.com/positions'});
      });
    });
  });

  
  document.addEventListener('DOMContentLoaded', function() {
    const hoverButton = document.getElementById('hoverButton');
    hoverButton.addEventListener('mouseover', function() {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "triggerHover" });
      });
    });
    hoverButton.addEventListener('mouseleave', function() {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "mouseleave" });
      });
    });
  });
  