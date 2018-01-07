$(function() {
	$('body').scrollspy({ target: '#navigation-bar' });

	    $(window).scroll(function(){
	    changeNavbar();
	    });

	function changeNavbar() {
		var home = $(document).scrollTop();
		console.log(home);
		if (home >= 100) {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
        }	
    });


var designBgArray =    [
                    'url(images/ipb.png)',
                    'url(images/ipg.png)',
                    'url(images/ipr.png)',
                    'url(images/ipw.png)',
                    'url(images/ipy.png)'  
                        ]; 
var positionBg = document.getElementById('js-positionBg');
var designBg = document.getElementById('js-designBg');
var i = 0;

var nextButton = document.getElementById('js-nextbg');
var prevButton = document.getElementById('js-prevbg');

nextButton.addEventListener('click', function(e) {
  ++i;
  updateView();
});

prevButton.addEventListener('click', function(e) {
  --i;
  updateView();
});


function lz(nr){
  return String(nr).padStart(2, 0);
}

function updateView() {
  var len = designBgArray.length;

  var index = i%len + (i<0? len: 0);
  
  designBg.style.backgroundImage = designBgArray[index];
  positionBg.textContent = lz(index+1) + "/" + lz(len);
}