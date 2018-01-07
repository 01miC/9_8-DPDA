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

var designPrevBg = document.getElementById('js-prevbg');
var designNextBg = document.getElementById('js-nextbg');
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


designPrevBg.addEventListener("click", function (e) {
        if (i===0) {
        i=4    
        designBg.style.backgroundImage = designBgArray[i]; 
        positionBg.innerHTML = "0" +(i+1) +"/05";
        i--;
        return i;
        } else if (i===4) {
            designBg.style.backgroundImage = designBgArray[i];
            positionBg.innerHTML =  "0" +(i+1) +"/05";
            i--;
            return i;
        } else {
            designBg.style.backgroundImage = designBgArray[i]; 
            positionBg.innerHTML = "0" +(i+1) +"/05";
            i--;
            return i;
        };
        
});

designNextBg.addEventListener('click', function(e) {
    if (i===0) {
        i=i+1;
        designBg.style.backgroundImage = designBgArray[i]; 
        positionBg.innerHTML = "0" +(i+1) +"/05";
        return i;
        } else if (i===4) {
            designBg.style.backgroundImage = designBgArray[i];
            i=0;
            positionBg.innerHTML =  "0" +(i+1) +"/05";
            return i;  
        } else {
            i=i+1;
            designBg.style.backgroundImage = designBgArray[i]; 
            positionBg.innerHTML = "0" +(i+1) +"/05";
            return i; 
        };
        
});

 