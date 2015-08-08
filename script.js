$("#logoutOfApps").click(function() {
	console.log("HELLYES");
	gothru();
});

function gothru(){

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