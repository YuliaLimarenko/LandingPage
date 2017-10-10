new WOW().init();

function animate(elem){
    var effect = elem.data("effect");
      elem.addClass(effect);
    setTimeout( function(){
        elem.removeClass('animated'+ effect).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        	elem.removeClass('animated'+effect);
        });
    
});
}

// window.onscroll = function() {
//   $('.soc-wrap').css('margin-top', '-7%');
//   }
$(document).ready(function() {

 // setTimeout(function() { $('#logoMain').show('slow') }, 200);

  
  $('#slideBtn2').click(function() {
  	$('.faqRow').hide();
  	$('.faqRow2').show();
     $('#slideBtn1').css('border', '5px solid #b3e2fc');
     $('#slideBtn2').css('border', '5px solid #3371d6');
  });
    $('#slideBtn1').click(function() {
  	
  	$('.faqRow2').hide();
  	$('.faqRow').show();
    $('#slideBtn2').css('border', '5px solid #b3e2fc');
     $('#slideBtn1').css('border', '5px solid #3371d6');
  });
   

    $("#slideBtn2").click(function() {
    animate($(this));
	});
  

  $('#btnRightTeam1').click(function() {
  	$('#team1').hide();
  	$('#team2').show();
  });

   $('#btnRightTeam2').click(function() {
  	$('#team2').hide();
  	$('#team1').show();
  });


 $('#btnLeftTeam1').click(function() {
  	$('#team1').hide();
  	$('#team2').show();
  });
 $('#btnLeftTeam2').click(function() {
  	$('#team2').hide();
  	$('#team1').show();
  });
 
 $('#btnWhite').click(function() {
  	$('.forUl').fadeToggle(1000);
  });

});


$(document).ready(function () {
 $('input,textarea').focus(function(){
   $(this).data('placeholder',$(this).attr('placeholder'))
   $(this).attr('placeholder','');
 });
 $('input,textarea').blur(function(){
   $(this).attr('placeholder',$(this).data('placeholder'));
 });
 });
 
$(document).ready(function($) { /// Ajax form
  var 
    self,
    inoputs,
    loadImg;
  $("#mc-embedded-subscribe-form").submit(function(e) {
    e.preventDefault();
    self = this;
    inputs = self.getElementsByTagName('input'),
    loadImg,
    action = $(this).attr('action');
    $(this).css('border' , '1px solid transparent');
    $(inputs).fadeOut('slow');
    loadImg = self.appendChild(document.createElement('img')).className = 'load';
      loadImg = document.getElementsByClassName('load')[0];
      loadImg.setAttribute('src' , 'images/load.svg');
    $.ajax({
      type: 'POST',
      url: action,
      data: $(this).serialize()
    }).done(function() {
      $(loadImg).fadeOut('slow',function() {
        self.innerHTML = '<p class="th-msg">Thanks for registering,don \'t forget to confirm registration via email.</p>';
      });
    });
    return false;
  });
  
});




function NewTimer(days,hours,minutes,secounds,dateTo) {
    var dateNow = new Date();
        mainTimer = new Date((arguments[4] - dateNow)),
        renderFields = [document.getElementById(arguments[0]),document.getElementById(arguments[1]),document.getElementById(arguments[2]),document.getElementById(arguments[3])];
        this.timerId = 0;
        this.timerStatus = true;
        this.startTimer = function() {
            mainTimer.setSeconds(mainTimer.getSeconds() - 1);
            this.render();
            if(this.timerStatus) {
                this.timerId = setTimeout(function(){this.startTimer();}.bind(this),1000);
            }
            else {
                clearTimeout(this.timerId);
                return;
            }
        };
        this.render = function() {
            var dateVals = [mainTimer.getDate(),mainTimer.getHours(),mainTimer.getMinutes(),mainTimer.getSeconds()];
            for(var i = 0; i < renderFields.length ; i++) {
                renderFields[i].textContent = (dateVals[i] < 10) ? '0' + dateVals[i] : dateVals[i];
            }
        };
        this.events = function(){
            window.addEventListener('blur',function(){
                this.timerStatus = false;
            }.bind(this));
            window.addEventListener('focus',function(){
                // mainTimer = new Date(mainTimer - (mainTimer - Date.now()));
                this.startTimer();
            }.bind(this));
        };

}
document.addEventListener('DOMContentLoaded', function() {
    var newTimer = new NewTimer('days','hours','minutes','seconds',new Date(2017,08,30));
    newTimer.startTimer();
});

function CountdownTimer(elm,tl,mes){
 this.initialize.apply(this,arguments);
}
CountdownTimer.prototype={
 initialize:function(elm,tl,mes) {
  this.elem = document.getElementById(elm);
  this.tl = tl;
  this.mes = mes;
 },countDown:function(){
  var timer='';
  var today=new Date();
  var day=Math.floor((this.tl-today)/(24*60*60*1000));
  var hour=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*60*1000));
  var min=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*1000))%60;
  var sec=Math.floor(((this.tl-today)%(24*60*60*1000))/1000)%60%60;
  var me=this;

  if( ( this.tl - today ) > 0 ){
   timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">DAYS</div><span class="number day">'+day+'</span></span>';
   timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">HOURS</div><span class="number hour">'+hour+'</span></span>';
   timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">MINS</div><span class="number min">'+this.addZero(min)+'</span></span><span class="number-wrapper"><div class="line"></div><div class="caption">SECS</div><span class="number sec">'+this.addZero(sec)+'</span></span>';
   this.elem.innerHTML = timer;
   tid = setTimeout( function(){me.countDown();},10 );
  }else{
   this.elem.innerHTML = this.mes;
   return;
  }
 },addZero:function(num){ return ('0'+num).slice(-2); }
}
function CDT(){

 // Set countdown limit
 var tl = new Date('2017/11/01 00:00:00');

 // You can add time's up message here
 var timer = new CountdownTimer('CDT',tl,'<span class="number-wrapper"><div class="line"></div><span class="number end">Time is up!</span></span>');
 timer.countDown();
}
window.onload=function(){
 CDT();
}

$(document).ready(function(){
    PopUpHide();
});
function PopUpShow(){
    $("#popup1").show();
}
function PopUpHide(){
    $("#popup1").hide();
}