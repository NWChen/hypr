function alertshit(tab) {
	if(tab)
		alert(tab.url);
};

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    alertshit(tab);
});		

