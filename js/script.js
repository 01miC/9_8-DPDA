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

var prevButton = document.getElementById('js-prevbg');
var nextButton = document.getElementById('js-nextbg');
var designBg = document.getElementById('js-designBg');
var designBgArray =    [
                    'url(images/ipb.png)',
                    'url(images/ipg.png)',
                    'url(images/ipr.png)',
                    'url(images/ipw.png)',
                    'url(images/ipy.png)'  
                        ]; 
    var positionBg = document.getElementById('js-positionBg');
var i=0;


nextButton.addEventListener('click', function(e) {
    //if(++i === designBgArray.length) i=0;
    ++i;
    updateView();
  });
  
  prevButton.addEventListener('click', function(e) {
   //if(--i < 0) i += designBgArray.length;
    --i;
    updateView();
  });
  
  
  function lz(nr){//a simple leading zero function
    return String(nr).padStart(2, 0);
  };
  

function updateView() {
  var len = designBgArray.length;
    //get i back into the boundaries
    //you could also take care of that in the click-handler
    //but this way, it's all in one place
    var index = i%len + (i<0? len: 0);

    designBg.style.backgroundImage = designBgArray[index];
    positionBg.textContent = lz(index) + "/" + lz(len);
  }
 