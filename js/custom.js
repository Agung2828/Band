

/* navigation menu animation with way points */

$('.nav-animate').waypoint(function(direction) {
	$('.secondary-menu').toggleClass('hide', direction === "down");
	$('.navbar').toggleClass('comeup', direction === "down");
}, {
	offset: '10%'
});

// Block scrolling
	
$('.nav li a').bind('click', function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1200);
		if($(window).width() < 768){
			var $navMain = $(".navbar-collapse");
			$navMain.collapse('hide');
		}
		e.preventDefault();
});

/* play list music button */
// $(document).ready(function(){
//     var audio = new Audio('../HTML/audio/audio.mp3');
//     audio.volume = 1;
//     audio.autoplay = true;
//     audio.preload = 'auto';


	
	// $('#playNowBtn').click(function(e){
	// 	var $playNowButton = $(this);																/* button variable */
	// 	var $playlist = $playNowButton.parent().parent();						/* play list section class */
	// 	var $disk			= $playlist.children().children('.disk');			/* disk image */
		
		if ($disk.hasClass('rotating')) {
			$disk.removeClass('rotating');
			$playNowButton.children('i').removeClass('fa-pause').addClass('fa-play');
			obj.pause();
		} else {
			$disk.addClass('rotating');
			$playNowButton.children('i').removeClass('fa-play').addClass('fa-pause');
			obj.play();
		}
		e.preventDefault();
// 	});
	
// });
 
/* *************************************** */
// One page navigation 
/* *************************************** */

$('.nav').onePageNav({
    currentClass: 'active',
    changeHash: true,
    scrollSpeed: 1000,
    scrollThreshold: 0.1
});

// Block scrolling
	
$('.nav a').bind('click', function(e){
		if($(window).width() < 768){
			var $navMain = $(".navbar-collapse");
			$navMain.collapse('hide');
		}
		e.preventDefault();
});

/* Owl-Carousel Client Slider */
 
$(document).ready(function() {
  $("#portfolioOwl").owlCarousel({
		autoPlay: 3000,
		slideSpeed: 1200,
	  paginationSpeed : 500,
	  stopOnHover: true,
    items : 4,
    itemsDesktop : [1199,4],
    itemsDesktopSmall : [991,3],
    itemsTabletSmall : [767,2]
  }); 
});

/* tool-tip initialize */

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});


/* Scroll to Top */  

$(".totop").hide();
$(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop()>300)
		{
			$('.totop').fadeIn();
		} 
		else
		{
			$('.totop').fadeOut();
		}
	});

	$('.totop a').click(function (e) {
		e.preventDefault();
		$('body,html').animate({scrollTop: 0}, 1200);
	});

});
// JavaScript code to populate playlist dynamically
document.addEventListener('DOMContentLoaded', function() {
	const playlist = document.getElementById('playlist');
  
	// Array of song details
	const songs = [
	  { title: 'Melodi Song Track One', album: 'Title', type: 'Rock', singer: 'Dawn', audioSrc: 'audio/track1.mp3' },
	  { title: 'Melodi Song Track Two', album: 'Title', type: 'Rock', singer: 'Dawn', audioSrc: 'audio/track2.mp3' },
	  // Add more songs as needed
	];
  
	// Function to create playlist items
	function createPlaylistItem(song) {
	  const li = document.createElement('li');
	  li.className = 'playlist-number';
  
	  // Construct HTML for song info
	  li.innerHTML = `
		<div class="song-info">
		  <h4>${song.title}</h4>
		  <p><strong>Album</strong>: ${song.album} &nbsp;|&nbsp; <strong>Type</strong>: ${song.type} &nbsp;|&nbsp; <strong>Singer</strong>: ${song.singer}</p>
		</div>
		<div class="music-icon">
		  <a href="#" class="playSong" data-src="${song.audioSrc}"><i class="fa fa-play"></i></a>
		  <a href="#" class="pauseSong"><i class="fa fa-pause"></i></a>
		</div>
		<div class="clearfix"></div>
	  `;
  
	  return li;
	}
  
	// Add songs to playlist
	songs.forEach(function(song) {
	  const playlistItem = createPlaylistItem(song);
	  playlist.appendChild(playlistItem);
	});
  
	// Event listener for play buttons
	const playButtons = document.querySelectorAll('.playSong');
	playButtons.forEach(function(button) {
	  button.addEventListener('click', function(event) {
		event.preventDefault();
		const audioPlayer = document.getElementById('audioPlayer');
		const audioSrc = this.getAttribute('data-src');
		audioPlayer.src = audioSrc;
		audioPlayer.play();
	  });
	});
  
	// Event listener for pause buttons
	const pauseButtons = document.querySelectorAll('.pauseSong');
	pauseButtons.forEach(function(button) {
	  button.addEventListener('click', function(event) {
		event.preventDefault();
		const audioPlayer = document.getElementById('audioPlayer');
		audioPlayer.pause();
	  });
	});
  });
  