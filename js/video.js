/* Youtube API */
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var players = {};
function onYouTubeIframeAPIReady() {
	players['player1'] = new YT.Player('player1', {
		height : '440',
		width : '720',
		playerVars : {
			'enablejsapi' : 1,
			'listType' : 'playlist',
			'list' : 'PLzmofmCZCSzwsc7avZDk4rkR0ctIjn06C'
		}
	});

	players['player2'] = new YT.Player('player2', {
		height : '440',
		width : '720',
		//videoId : 'VvnkQFLZBMc',
		playerVars : {
			'autoplay' : 0,
			'controls' : 1,
			'enablejsapi' : 1,
			'listType' : 'playlist',
			'list' : 'PLzmofmCZCSzwuO2xsLFBq6SGgfCdrupcP'
		},
		events : {
			//'onReady' : onPlayerReady
			//'onStateChange' : onPlayerStateChange
		}
	});

	players['player3'] = new YT.Player('player3', {
		height : '440',
		width : '720',
		playerVars : {
			'enablejsapi' : 1,
			'listType' : 'playlist',
			'list' : 'PLzmofmCZCSzy_eJwW8Zs480ugjFjQ1okP'
		}
	});

	players['player4'] = new YT.Player('player4', {
		height : '440',
		width : '720',
		playerVars : {
			'enablejsapi' : 1,
			'listType' : 'playlist',
			'list' : 'PLzmofmCZCSzyMRUcFFSb5jpsltVPlwx72'
		}
	});
}

// 4. The API will call this function when the video player is ready.
//function onPlayerReady(event) {
//	event.target.playVideo();
//}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
//var done = false;
//function onPlayerStateChange(event) {
//	if (event.data == YT.PlayerState.PLAYING && !done) {
//		setTimeout(stopVideo, 6000);
//		done = true;
//	}
//}

function stopVideo(pl) {
	pl.stopVideo();
}

function pauseVideo(pl) {
	pl.pauseVideo();
}


$(document).ready(function() {
	$('.close-modal').click(function() {
		var playerid = $(this).next().find('iframe').attr('id');
		pauseVideo(players[playerid]);
	});
});
