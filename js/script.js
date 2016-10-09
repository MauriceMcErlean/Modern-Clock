$(document).ready(function(){
var hour = new Date();
var hour = hour.getHours();
var hours = ((hour + 11) % 12 + 1);
var minutes = new Date();
var minutes = minutes.getMinutes();
if (minutes == 0 || minutes <= 4) {
   $("#oclock").addClass("selected");
} else if (minutes == 5 || minutes <= 9) {
   $("#fivemin").addClass("selected");
   $("#past").addClass("selected");
} else if (minutes ==10 || minutes <= 14) {
   $("#tenmin").addClass("selected");
   $("#past").addClass("selected");
} else if (minutes ==15 || minutes <= 19) {
   $("#quarter").addClass("selected");
   $("#past").addClass("selected");
} else if (minutes ==20 || minutes <= 24) {
   $("#twenty").addClass("selected");
   $("#minutes").addClass("selected");
   $("#past").addClass("selected");
} else if (minutes ==25 || minutes <= 29) {
   $("#twenty").addClass("selected");
   $("#fivemin").addClass("selected");
   $("#minutes").addClass("selected");
   $("#past").addClass("selected");
} else if (minutes ==30 || minutes <= 34) {
   $("#half").addClass("selected");
   $("#past").addClass("selected");
} else if (minutes == 35 || minutes <= 39) {
   var hours = ((hour + 11) % 12 + 1) + 1;
   $("#twenty").addClass("selected");
   $("#fivemin").addClass("selected");
   $("#minutes").addClass("selected");
   $("#to").addClass("selected");
} else if (minutes == 40 || minutes <= 44) {
   var hours = ((hour + 11) % 12 + 1) + 1;
   $("#twenty").addClass("selected");
   $("#minutes").addClass("selected");
   $("#to").addClass("selected");
} else if (minutes == 45 || minutes <= 49) {
   var hours = ((hour + 11) % 12 + 1) + 1;
   $("#quarter").addClass("selected");
   $("#to").addClass("selected");
} else if (minutes == 50 || minutes <= 54) {
   var hours = ((hour + 11) % 12 + 1) + 1;
   $("#tenmin").addClass("selected");
   $("#to").addClass("selected");
} else if (minutes == 55 || minutes <= 59) {
   var hours = ((hour + 11) % 12 + 1) + 1;
   $("#fivemin").addClass("selected");
   $("#to").addClass("selected");
} 



if (hours == 1) {
   $("#one").addClass("selected");
} else if (hours == 2) {
   $("#two").addClass("selected");
} else if (hours == 3) {
   $("#three").addClass("selected");
} else if (hours == 4) {
   $("#four").addClass("selected");
} else if (hours == 5) {
   $("#five").addClass("selected");
} else if (hours == 6) {
   $("#six").addClass("selected");
} else if (hours == 7) {
   $("#seven").addClass("selected");
} else if (hours == 8) {
   $("#eight").addClass("selected");
} else if (hours == 9) {
   $("#nine").addClass("selected");
} else if (hours == 10) {
   $("#ten").addClass("selected");
} else if (hours == 11) {
   $("#eleven").addClass("selected");
} else if (hours == 12) {
   $("#twelve").addClass("selected");
}
});

     var time = new Date().getTime();
     $(document.body).bind("mousemove keypress", function(e) {
         time = new Date().getTime();
     });

     function refresh() {
         if(new Date().getTime() - time >= 10000) 
             window.location.reload(true);
         else 
             setTimeout(refresh, 10000);
     }

     setTimeout(refresh, 10000);
