function getAllUrls() {
	var tab_list = ["asdf"];
	chrome.tabs.query({}, function(tabs) {
		tabs.forEach(function(tab){
	  	tab_list.push(tab.url);
		});
	});
	return tab_list;
};

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if(tab) console.log(getAllUrls());
});		

/*
function alertshit(tab) {
	if(tab) {
		var tab_list = ["asdfsdafdsa"];
		chrome.tabs.query({}, function(tabs){     
		  console.log("\n/////////////////////\n");
		  tabs.forEach(function(tab){
	  		tab_list.push(tab.url);
		  });
		});
		alert(tab_list);
	}
};

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    alertshit(tab);
});		


*/