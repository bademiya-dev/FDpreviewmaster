// var tltip = document.getElementById("demo");
// tltip.addEventListener("onmouseenter", function () {
//     alert("mouseover")
// })


document.getElementById("demoss").addEventListener("mouseover", mouseOver);
document.getElementById("demoss").addEventListener("mouseout", mouseOut);

function mouseOver() {
    setTimeout(function()
    {
        document.getElementById("socialIcons").style.display = "block";
  

},200);


  //document.getElementById("socialIcons").style.display = "block";
}

function mouseOut() {
  document.getElementById("socialIcons").style.display = "none";
}

// $('[data-toggle="tooltip"]').tooltip({
//     trigger : 'hover'
// })  


$(document).on("click",function()
    {
    setTimeout(function()
    {

  $('[data-toggle="tooltip"]').tooltip('hide');

},500);    // Hides tooltip in 500 milliseconds
    });