$("#redSolid").val('0');
$("#greenSolid").val('0');
$("#blueSolid").val('0');

$("#redS").val('0');
$("#greenS").val('0');
$("#blueS").val('0');

$("#redA").val('0');
$("#greenA").val('0');
$("#blueA").val('0');

$("#redC").val('0');
$("#greenC").val('0');
$("#blueC").val('0');

//update the new color span
function changeSolid() {
  var rSolid = $("#redSolid").val();
  var gSolid = $("#greenSolid").val();
  var bSolid = $("#blueSolid").val();
  $("#solid").css("fill", "rgb(" + rSolid + "," + gSolid + "," + bSolid + ")");
  $( "#codeSolid p" ).text( "rgb(" + rSolid + "," + gSolid + "," + bSolid + ")" );
}

//When color sliders change
$("input[type=range]").on("input", changeSolid);

//update the new color span
function changeS() {
  var rS = $("#redS").val();
  var gS = $("#greenS").val();
  var bS = $("#blueS").val();
  $(".s").css("fill", "rgb(" + rS + "," + gS + "," + bS + ")");
  $( "#codeS" ).text( "rgb(" + rS + "," + gS + "," + bS + ")" );
}

//When color sliders change
$("input[type=range]").on("input", changeS);

//update the new color span
function changeA() {
  var rA = $("#redA").val();
  var gA = $("#greenA").val();
  var bA = $("#blueA").val();
  $(".a").css("fill", "rgb(" + rA + "," + gA + "," + bA + ")");
  $( "#codeA" ).text( "rgb(" + rA + "," + gA + "," + bA + ")" );
}

//When color sliders change
$("input[type=range]").on("input", changeA);

//update the new color span
function changeC() {
  var rC = $("#redC").val();
  var gC = $("#greenC").val();
  var bC = $("#blueC").val();
  $(".c").css("fill", "rgb(" + rC + "," + gC + "," + bC + ")");
  $( "#codeC" ).text( "rgb(" + rC + "," + gC + "," + bC + ")" );
}

//When color sliders change
$("input[type=range]").on("input", changeC);

(function(){ var button_id = "download"

// must have link element with an id of "download"
function encode_as_link(){
// Add some critical information
$("svg").attr({ version: '1.1' , xmlns:"http://www.w3.org/2000/svg"});

var svg = $("svg").parent().html(),
b64 = Base64.encode(svg),
download = $("#download"),
html = download.html();

download.replaceWith(
  $("<a id='"+button_id+"' class='btn btn-block btn-lg btn-info' download='sac.svg' href-lang='image/svg+xml' href='data:image/svg+xml;base64,\n"+b64+"'></a>").html(html));
}

$(function(){
  $("div").delegate("#"+button_id, "mouseover", encode_as_link);
});

})();









