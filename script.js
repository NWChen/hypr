//doesnt do anything
function getAllTabsWithProperty(key) {
	var tab_list = [];
	chrome.tabs.query({}, function(tabs) {
		tabs.forEach(function(tab){
	  	tab_list.push(tab[key]);
		});
	});
	return tab_list;
};

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if(tab) {
		chrome.tabs.query({}, function(tabs) {
			tabs.forEach(function(tab){
		  	chrome.tabs.update(tab.id, {selected:true});
		  	chrome.tabs.executeScript({
		  		code: "document.documentElement.innerHTML"
		  	}, function(html) {
		  		console.log(html);
		  	});
			});
		});
	}
});		