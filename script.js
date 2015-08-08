function realism(){
//chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	//if(tab) {

		//get all tabs
		chrome.tabs.query({}, function(tabs) {
			tabs.forEach(function(tab){
		  	chrome.tabs.update(tab.id, {selected:true});

		  	//get all tab DOMs
		  	chrome.tabs.executeScript({
		  		code: "document.getElementsByTagName('a')[0].click()"
		  	}, function(id) {
		  		console.log(id);
		  	});
			});
		});
	}
//});		