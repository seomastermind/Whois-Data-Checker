chrome.action.onClicked.addListener((tab) => {
    // Get the current tab's URL
    var currentUrl = new URL(tab.url);
    var whoisUrl = 'https://whois.com/whois/' + currentUrl.host;
    
    // Redirect to the Whois page
    chrome.tabs.update(tab.id, { url: whoisUrl });
});
