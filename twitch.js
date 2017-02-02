function twitch() {
	var chanel = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
	for ( var i = 0; i < chanel.length; i++) {
		//console.log(chanel[i]);
		$.getJSON('https://wind-bow.gomix.me/twitch-api/channels/' + chanel[i], function(channel) {

			
			var allImage = document.createElement("img");
			allImage.className = "allImage";
			allImage.src = channel.logo;
			document.getElementById('all-image').appendChild(allImage).innerHTML;

			
			// for channel name
			var allName = document.createElement("a");
			var textNodeAll = document.createTextNode(channel.name.toUpperCase());
			allName.className = "all-username";
			allName.setAttribute("id", "allUrl");
			allName.appendChild(textNodeAll);
			allName.setAttribute("target", "_BLANK");
			allName.href = channel.url;
			
			document.getElementById('all-userName').appendChild(allName).innerHTML;


			// for status
			var allStatus = document.createElement("P");
			var textNodeAll = document.createTextNode(channel.status);
			allStatus.className = "all-status";
			allStatus.appendChild(textNodeAll);
			document.getElementById('all-status').appendChild(allStatus).innerHTML;

			if (channel["status"] == null) { 

				// for ofline image
				var oflineImage = document.createElement("img");
				oflineImage.className = "allImage";
				oflineImage.src = channel.logo;
				document.getElementById('ofline-image').appendChild(oflineImage).innerHTML;

				// for channel name
				var oflineName = document.createElement("a");
				var textNodeAll = document.createTextNode(channel.name.toUpperCase());
				oflineName.className = "all-username";
				oflineName.appendChild(textNodeAll);
				oflineName.setAttribute("target", "_BLANK");
				oflineName.href = channel.url;
				document.getElementById('ofline-userName').appendChild(oflineName).innerHTML;

				// for status 
				var oflineStatus = document.createElement("P");
				var status = "Ofline";
				var textNodeOfline = document.createTextNode(status);
				oflineStatus.className = "all-status";
				oflineStatus.appendChild(textNodeOfline);
				document.getElementById('ofline-status').appendChild(oflineStatus).innerHTML
			} else {

				// for ofline image
				var onlineImage = document.createElement("img");
				onlineImage.className = "allImage";
				onlineImage.src = channel.logo;
				document.getElementById('online-image').appendChild(onlineImage).innerHTML;

				// for channel name
				var onlineName = document.createElement("a");
				var textNodeOnline = document.createTextNode(channel.name.toUpperCase());
				onlineName.className = "all-username";
				onlineName.setAttribute("target", "_BLANK");
				onlineName.href = channel.url;
				onlineName.appendChild(textNodeOnline);
				document.getElementById('online-userName').appendChild(onlineName).innerHTML;

				// for status 
				var onlineStatus = document.createElement("P");
				var textNodeOnline = document.createTextNode(channel.status);
				onlineStatus.className = "all-status";
				onlineStatus.appendChild(textNodeOnline);
				document.getElementById('online-status').appendChild(onlineStatus).innerHTML;

			}
		});
	}
}



