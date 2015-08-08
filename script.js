function getAllTabsWithProperty(key) {
	var tab_list = ["asdf"];
	chrome.tabs.query({}, function(tabs) {
		tabs.forEach(function(tab){
	  	tab_list.push(tab[key]);
		});
	});
	return tab_list;
};

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	getAllTabsWithProperty('id').forEach(function(id) {
		//chrome.tabs.sendRequest(id, {})
	});
});		