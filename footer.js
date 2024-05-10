
 
var style = document.createElement('style'); style.innerHTML = `
  @font-face {
        font-family: "TT Norms Light";
        src: url("https://db.onlinewebfonts.com/t/95d392d49b7f403beba771be8312d992.eot");
        src: url("https://db.onlinewebfonts.com/t/95d392d49b7f403beba771be8312d992.eot?#iefix")format("embedded-opentype"),
        url("https://db.onlinewebfonts.com/t/95d392d49b7f403beba771be8312d992.woff2")format("woff2"),
        url("https://db.onlinewebfonts.com/t/95d392d49b7f403beba771be8312d992.woff")format("woff"),
        url("https://db.onlinewebfonts.com/t/95d392d49b7f403beba771be8312d992.ttf")format("truetype"),
        url("https://db.onlinewebfonts.com/t/95d392d49b7f403beba771be8312d992.svg#TT Norms Light")format("svg");
    } 
    .logoLink {  font-weight:500;font-family: "TT Norms Light";text-decoration:none !important;}   
    .logo { margin-bottom:-2px;} 
    
    
    h1{font-family: "LoveFrom"; font-weight:100; }
    
    h2{font-family: "LoveFrom";font-weight:100; }
    input { margin-top:-20px;}
   
`; document.head.appendChild(style);

var old_url1 = "https://combinatronics.org/combinatronics-admin/Public/main/sushi.png";
var new_url1 = "https://raw.githubusercontent.com/PJ-Singh-001/Cubic/release/screenshots/cubic_512x512.png";

$(document).ready(function(){
    $("img[src='"+old_url1+"']").attr("src", new_url1);

$(".logo").attr("src", new_url1);
}); 
 


$(".logoLink").css({
    'font-family': 'TT Norms Light', 
    'font-size': '28px',
  	'font-weight' : '200',
  	'margin-top': '25px',
  	'text-decoration': 'none'
}); 
