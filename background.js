chrome.browserAction.onClicked.addListener(function () {
  chrome.tabs.create(
    { url: chrome.extension.getURL("index.html") },
    function (tab) {
      console.log("New tab launched with random password generator");
    }
  );
});
