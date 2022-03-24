// Business Logic ----------
$(document).ready(function() {

  const height = parseInt(prompt("How tall are you?"));
  const classHighlight = 'highlight';

  if (height < 4) {
    alert("Have Fun With The Kiddos!");
    $('#kidRides').addClass(classHighlight);
  } else {
    alert("Have Fun & Be Safe!");
    $('#adultRides').addClass(classHighlight);
  } 

  
});






