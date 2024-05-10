
var scriptA = document.createElement('script'); scriptA.href = 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
document.head.appendChild(scriptA);



var url = window.location.href;
var home = url.endsWith("/");
var pricing = url.endsWith("/pricing");
var about = url.endsWith("/about");
var terms = url.endsWith("/terms");
var gettingStarted = url.endsWith("/getting-started");

var home_svg_link = '<a class="homehref" href="/"><?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="35px" height="35px">    <path d="M 12 2 A 1 1 0 0 0 11.289062 2.296875 L 1.203125 11.097656 A 0.5 0.5 0 0 0 1 11.5 A 0.5 0.5 0 0 0 1.5 12 L 4 12 L 4 20 C 4 20.552 4.448 21 5 21 L 9 21 C 9.552 21 10 20.552 10 20 L 10 14 L 14 14 L 14 20 C 14 20.552 14.448 21 15 21 L 19 21 C 19.552 21 20 20.552 20 20 L 20 12 L 22.5 12 A 0.5 0.5 0 0 0 23 11.5 A 0.5 0.5 0 0 0 22.796875 11.097656 L 12.716797 2.3027344 A 1 1 0 0 0 12.710938 2.296875 A 1 1 0 0 0 12 2 z"/></svg></a>';



var egap = "data:image/png;base64,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";


function favoicon(){
    var link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement("link");
            link.rel = "icon";
            link.type = "image/png";
            link.sizes = "20x10";
            document.head.appendChild(link);
    }
    link.href = "https://combinatronics.nyc3.cdn.digitaloceanspaces.com/sushi.png";
}




function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}


const isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};



if(isMobile.any()){
    var meta = document.createElement('meta');
    meta.name = "viewport";
    meta.content = "width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no";
    document.getElementsByTagName('head')[0].appendChild(meta);
}


var hamburger_html = `<nav role="navigation">
  <div id="menuToggle">
    <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>

    <ul id="menu">
      <br>
      <a href="/"><li>Home</li></a><br><br>
      <a href="/about"><li>About</li></a><br><br>
      <a href="/pricing"><li>Pricing</li></a><br><br>
      <a href="/getting-started"><li>Getting Started</li></a><br><br>
      <a href="/terms"><li>Terms and Policies</li></a><br><br>
      <a href="mailto:info@combinatronics.org"><li>Contact</li></a>
    </ul>
  </div>
</nav>`;

var hamburger_css = `
        <style>




            body
{
  margin: 0;
  padding: 0;
  
  /* make it look decent enough */
  background: #232323;
  color: #000;
  font-family: "Avenir Next", "Avenir", sans-serif;
  
  overflow-x: hidden; /* needed because hiding the menu on the right side is not perfect,  */
}

a
{
  text-decoration: none;
  color: #232323;
  
  transition: color 0.3s ease;
}

a:hover
{
  color: tomato;
}

#menuToggle
{
  display: block;
  position: absolute;
  top: 40px;
  right: 50px;
  color:#000;
  z-index: 1;
  
  -webkit-user-select: none;
  user-select: none;
}

#menuToggle input
{
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  
  cursor: pointer;
  
  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */
  
  -webkit-touch-callout: none;
}

/*
 * Just a quick hamburger
 */
#menuToggle span
{
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  
  background: #000;
  border-radius: 3px;
  
  z-index: 1;
  
  transform-origin: 4px 0px;
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

#menuToggle span:first-child
{
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2)
{
  transform-origin: 0% 100%;
}

/* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */
#menuToggle input:checked ~ span
{
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #232323;
}

/*
 * But let's hide the middle one.
 */
#menuToggle input:checked ~ span:nth-last-child(3)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

/*
 * Ohyeah and the last one should go the other direction
 */
#menuToggle input:checked ~ span:nth-last-child(2)
{
  opacity: 1;
  transform: rotate(-45deg) translate(0, -1px);
}

/*
 * Make this absolute positioned
 * at the top left of the screen
 */
#menu
{
  position: absolute;
  width: 400px;
  height: 600px;
  margin: -100px 0 0 0;
  padding: 50px;
  padding-top: 125px;
  right: -100px;

  border-bottom-left-radius: 10%;

  background: #ededed;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */
  
  transform-origin: 0% 0%;
  transform: translate(100%, 0);
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
}

#menu li
{
  padding: 10px 0;
  font-size: 22px;
  weight:100%;
}

/*
 * And let's fade it in from the left
 */
#menuToggle input:checked ~ ul
{
  transform: scale(1.0, 1.0);
  opacity: 1;
}

        </style>
        `;


var pricing_css =  `
    <style>
        body {
            background-color:#fff;
        }
        #menuToggle{
            z-index:999!important;
        }

        #menu li{
            padding-top:10px;
        }
    </style>

 `;

var hamburger_css_2 = `
        <style>
        body {
            background-color:#fff;
        }
        </style>



        `;

function displayHome(){
        document.getElementsByClassName('home')[0].innerHTML = home_svg_link;
        document.getElementsByClassName('homehref')[0].style = "float:left;margin-top:-0px;margin-left:-10px;";
        document.getElementsByClassName('home')[0].style = "float:left;margin-left:28px;margin-top:28px;color:#acacac;";
}
function displayHeaderMenu(){
        document.getElementsByClassName('pricing')[0].innerHTML = hamburger_html;
        const someStyle = hamburger_css;
        document.head.insertAdjacentHTML('beforeend', someStyle);
}


function displayButtonColor(colorButton){

        document.getElementsByTagName('button')[0].setAttribute("style", "background-color: "+ colorButton );
        document.getElementsByTagName('button')[1].setAttribute("style", "background-color: "+ colorButton );
        document.getElementsByTagName('button')[2].setAttribute("style", "background-color: "+ colorButton );
}

if(true == true){


    if(home == true){   



        document.getElementsByClassName('box')[0].innerHTML =  document.getElementsByClassName('box')[0].innerHTML + '<br><center><a href="https://www.dpbolvw.net/click-100952031-11947208" style="text-decoration:underline;target="_top">Save on Travel with Trip.com</a><img src="https://www.ftjcfx.com/image-100952031-11947208" width="1" height="1" border="0"/></center>';
    


var copyright_html = "Copyright © 2018–2024 Combinatronics. All rights reserved.";
document.getElementsByClassName('box')[2].getElementsByTagName("center")[0].getElementsByTagName("p")[0].innerHTML = copyright_html;


        var url_bar = document.getElementById("url");
        url_bar.placeholder = "Paste a GitHub RAW url here";
        document.title = 'Combinatronics - A fast, reliable and automated CDN';
        document.getElementsByTagName('h1')[1].innerHTML = 'A fast, reliable, and automated CDN';



        document.getElementsByClassName('icon-competitor')[0].getElementsByTagName('img')[0].setAttribute("style", "height: 40px");

        document.getElementsByClassName('icon-competitor')[1].getElementsByTagName('img')[0].setAttribute("style", "height: 20px");

        document.getElementsByClassName('icon-competitor')[1].getElementsByTagName('p')[0].setAttribute("style", "font-weight: 300");


        
        displayHeaderMenu();
        displayHome();
    }

    if(about == true){   
        displayHeaderMenu();
        displayHome();

var copyright_html = "Copyright © 2018–2024 Combinatronics. All rights reserved.";
document.getElementsByClassName('box')[1].getElementsByTagName("center")[0].getElementsByTagName("p")[0].innerHTML = copyright_html;

		var table = 
		`
		<p>In 2023 we made many changes:</p><br>
		<ul>
		<li><b>Week 50 (2023):</b> Improved website navigation to reduce bouncerate.</li>
		<li><b>Week 49 (2023):</b> Improved email outreach based on statistics.</li>
		<li><b>Week 48 (2023):</b> Improved frontpage based on a privacy friendly analytics platform.</li>
		<li><b>Week 47 (2023):</b> Improved inhouse analytics of things entered in the url-bar on frontpage.</li>
		<li><b>Week 46 (2023):</b> Optimizing self-restoring capacity to improve nominal functionality.</li>
		<li><b>Week 45 (2023):</b> Re-arranged things on the pricing page.</li>
		<li><b>Week 44 (2023):</b> Moved away from Amazon AWS Lambda for reasons such as:</li>
		<li style="list-style-type:none">
		    <ul>
				<li>Leadership: Preference for Founder Led companies.</li>
				<li>Privacy: Prefere not to have local apt-get package repositories caching & logging our R&D efforts.</li>
				<li>Outgrown: metered billing vs wholesale pricing</li>	
		 	</ul>
		  </li>
		<li><b>Week 43 (2023):</b> Recreated AWS Lambda environment ontop of hardware managed by us.</li>
		<ul>
		`;

		if(about == true){
			document.getElementsByClassName("box")[0].innerHTML = document.getElementsByClassName("box")[0].innerHTML + table;
		}
    }
 
    if(terms == true){   
        displayHeaderMenu();
        displayHome();

var copyright_html = "Copyright © 2018–2024 Combinatronics. All rights reserved.";
document.getElementsByClassName('box')[1].getElementsByTagName("center")[0].getElementsByTagName("p")[0].innerHTML = copyright_html;

    }
    if(gettingStarted == true){
        displayHeaderMenu();
        displayHome();

var copyright_html = "Copyright © 2018–2024 Combinatronics. All rights reserved.";
document.getElementsByClassName('box')[1].getElementsByTagName("center")[0].getElementsByTagName("p")[0].innerHTML = copyright_html;
    }




    if(pricing == true){

var copyright_html = "Copyright © 2018–2024 Combinatronics. All rights reserved.";
document.getElementsByClassName('footer')[0].getElementsByTagName("div")[0].getElementsByTagName("center")[0].getElementsByTagName("p")[0].innerHTML = copyright_html;




        var hexcolor=/^#([0-9a-f]{3}){1,2}$/i;
        var color = getCookie("cta-001-buton-color");
        if(hexcolor.test(color)){
            displayButtonColor(color); 
        } else {
            var random_number = Math.floor(Math.random() * 100);
            if(random_number > 0 && random_number < 25)
                setCookie('cta-001-buton-color','#5bb450',7);
            else if(random_number > 25 && random_number < 50)
                setCookie('cta-001-buton-color','#fc663a',7);
            else if(random_number > 50 && random_number < 75)
                setCookie('cta-001-buton-color','#04AA6D',7);
            else
                setCookie('cta-001-buton-color','#000000',7);
        }




        document.getElementsByClassName("social-proof")[2].getElementsByTagName('img')[0].src = egap;

        var elements = document.getElementsByClassName("pricing-price"); 


		var select_dropdown = '<select style="text-transform:capitalize" id="subscription-personal" name="subscription-personal"><option value="annually">Billed Annually</option></select><br><br>';

        elements[0].parentNode.innerHTML = select_dropdown + "<s style='font-size:20px;font-weight:600;'>130$</s>" + elements[0].parentNode.innerHTML;
        var html = elements[0].parentNode.innerHTML;
        html = html.replace( /fee/g,'price');
        elements[0].parentNode.innerHTML = html;

        var elements = document.getElementsByClassName("pricing-price");



		var select_dropdown = '<select style="text-transform:capitalize" id="subscription-business" name="subscription-business"><option value="annually">Billed Annually</option></select><br><br>';
 
        elements[1].parentNode.innerHTML = select_dropdown + "<s style='font-size:20px;font-weight:600;'>550$</s>" + elements[1].parentNode.innerHTML;
        var html = elements[1].parentNode.innerHTML;
        html = html.replace( /fee/g,'price');
        elements[1].parentNode.innerHTML = html;

        var elements = document.getElementsByClassName("pricing-plan"); 
        elements[2].parentNode.innerHTML = "<br><br><br>" + elements[2].parentNode.innerHTML;


        displayHeaderMenu();
        displayHome();

        const someStyle2 = pricing_css;
        document.head.insertAdjacentHTML('beforeend', someStyle2);
        document.getElementsByClassName('homehref')[0].style = "float:left;margin-top:-30px;margin-left:-10px;";
        document.getElementById('menuToggle').style = "top:30px";
  




/*
//document.getElementById("subscription-personal").innerHTML = '<select style="text-transform:capitalize" id="subscription-personal" name="subscription-personal"><option value="anually">Billed Anually</option><option value="monthly">Billed Monthly</option></select>';
document.getElementById("subscription-personal").innerHTML = '<select style="text-transform:capitalize" id="subscription-personal" name="subscription-personal"><option value="anually">Billed Anually</option><option value="monthly">Billed Monthly</option></select>';
document.getElementById("subscription-business").innerHTML = '<select style="text-transform:capitalize" id="subscription-business" name="subscription-business"><option value="anually">Billed Anually</option><option value="monthly">Billed Monthly</option></select>';

*/



var backup0 =  document.getElementsByClassName("pricing-plan")[0].innerHTML;
var backup1 =  document.getElementsByClassName("pricing-plan")[1].innerHTML;
   


var optionA = document.createElement("option");
optionA.text = "Billed Monthly";
optionA.value = "monthly";
var selectA = document.getElementById("subscription-personal");
selectA.appendChild(optionA);



var optionB = document.createElement("option");
optionB.text = "Billed Monthly";
optionB.value = "monthly";
var selectB = document.getElementById("subscription-business");
selectB.appendChild(optionB);



var html_buttonsA =`
<!-- HTML !-->
<div style="height:15px;"></div>
<a href="/getting-started"><button class="button_trial" role="button">Try for free</button></a>
<br>
<a href="https://buy.stripe.com/7sI8xt6Qf0M631SeUY"><button class="button_stripe" role="button">Buy now</button></a>

<style>
/* CSS */
.button_stripe {

  background-image: linear-gradient(#0dccea, #0d70ea);
  border: 0;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, .3) 0 5px 15px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: Montserrat,sans-serif;
  font-size: .9em;
  font-weight:600;
  margin: 5px;
  padding: 10px 15px;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
   width:100%;
   font-size:14px;
   margin-top:50px;
}

.button_trial {
  background-image: linear-gradient(#ff5627, #ff5555);
  border: 0;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, .3) 0 5px 15px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: Montserrat,sans-serif;
  font-size: .9em;
  font-weight:600;
  margin: 5px;
  padding: 10px 15px;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width:100%; 
  font-size:14px;
}
</style>
`;


var html_buttonsB =`
<!-- HTML !-->

<a href="/getting-started"><button class="button_trial" role="button">Try for free</button></a>
<br>
<a href="https://buy.stripe.com/9AQ1515Mb7au1XO6ot"><button class="button_stripe" role="button">Buy now</button></a>

<style>
/* CSS */
.button_stripe {

  background-image: linear-gradient(#0dccea, #0d70ea);
  border: 0;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, .3) 0 5px 15px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: Montserrat,sans-serif;
  font-size: .9em;
  font-weight:600;
  margin: 5px;
  padding: 10px 15px;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
 width:100%;
   font-size:14px;
   margin-top:0px;
}

.button_trial {
  background-image: linear-gradient(#ff5627, #ff5555);
  border: 0;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, .3) 0 5px 15px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: Montserrat,sans-serif;
  font-size: .9em;
  font-weight:600;
  margin: 5px;
  padding: 10px 15px;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width:100%;
  margin-bottom:15px;
  font-size:14px;
}
</style>
`;


  


function pay_monthly(){
	var elements = document.getElementsByClassName("pricing-price"); 
	elements[0].innerHTML = "$8</span><br><span><b>$64,99</b> billed annually";
	elements[0].innnerHTML = elements[0].innnerHTML + "<a href=''>$64,99 billed annually</a";
  var elements = document.getElementsByClassName("pricing-price"); 
  //var select_dropdown = '<select style="text-transform:capitalize;" id="subscription-personal" name="subscription-personal"><option value="annually"  >Billed Annually</option><option value="monthly" selected="selected" >Billed Monthly</option></select><br><br>';
  var pricing_html = '<span style="color:#000;text-transform:capitalize;">For power users</span><br><br><s style="font-size:20px;font-weight:600;">150$</s><span class="pricing-price">$8<br><span style="color:#000;text-transform:capitalize;">Per month</span><br><span style="text-transform:capitalize;"><a style="text-decoration-line: underline;color:#fc663a;" href="https://buy.stripe.com/cN29Bx0rR2Ue7i8cMO"><b>$64,99</b> billed annually</a></span></span>';

  elements[0].parentNode.innerHTML = pricing_html;
  var html = elements[0].parentNode.innerHTML;



  var elements = document.getElementsByClassName("pricing-price"); 
  elements[1].innerHTML = "$8</span><br><span><b>$130</b> billed annually";
  elements[1].innnerHTML = elements[0].innnerHTML + "$130 billed annually";
  var elements = document.getElementsByClassName("pricing-price"); 
  //var select_dropdown = '<select style="text-transform:capitalize;" id="subscription-business" name="subscription-business"><option value="annually">Billed Annually</option><option value="monthly" selected="selected">Billed Monthly</option></select><br><br>';
  var pricing_html = '<span style="color:#000;text-transform:capitalize;">For teams up to 15 members</span><br><br><s style="font-size:20px;font-weight:600;">$550</s><span class="pricing-price">$33.95<br><span style="color:#000;text-transform:capitalize;">Per month</span><br><span style="color:#000;">(Price per Seat)</span><br><span style="text-transform:capitalize;"><a style="text-decoration-line: underline;color:#fc663a;" href="https://buy.stripe.com/4gwdRNfmLeCW5a0cMP"><b>$274.95</b> billed annually</a></span></span>';

  elements[1].parentNode.innerHTML = pricing_html;
  var html = elements[0].parentNode.innerHTML;
  document.getElementsByClassName("pricing-button")[2].innerHTML = '<br><br><a href="mailto:info@combinatronics.org"></a><a href="mailto:sales@combinatronics.org" style="text-decoration:none;color:#fff;cursor: pointer;"><i class="fa fa-envelope" style="font-size:25px;color:#fff;padding-bottom:13px;"></i><br><b style="font-weight:400;text-transform:none;">Talk to an Expert</b><center style="text-transform: none;">24/7</center></a>';
  document.getElementsByClassName("pricing-price")[0].innerHTML = document.getElementsByClassName("pricing-price")[0].innerHTML + "<br><br><br><br>" +html_buttonsA;
  document.getElementsByClassName("pricing-price")[1].innerHTML = document.getElementsByClassName("pricing-price")[1].innerHTML + "<br><br><br>" +html_buttonsB;

}
 


document.getElementsByClassName("pricing-button")[0].style = "visibility:hidden;"; 
document.getElementsByClassName("pricing-button")[0].style = "visibility:hidden;"; 
  document.getElementsByClassName("pricing-button")[1].style = "visibility:hidden;"; 


document.getElementsByClassName("pricing-price")[0].innerHTML = document.getElementsByClassName("pricing-price")[0].innerHTML + "<br><br><br><br>" +html_buttonsA;
document.getElementsByClassName("pricing-price")[1].innerHTML = document.getElementsByClassName("pricing-price")[1].innerHTML + "<br><br><br><br>" +html_buttonsB;



function pay_annually(){
  /*
  document.getElementsByClassName("pricing-plan")[0].innerHTML = "test";
  document.getElementsByClassName("pricing-plan")[1].innerHTML = "test";
  */
}

function do_something(){ 
  		if(
        	(document.getElementById("subscription-business").value == document.getElementById("subscription-personal").value) &&
        	(document.getElementById("subscription-personal").value == "annually")
       ) pay_annually();
  
  		if(
        	(document.getElementById("subscription-business").value == document.getElementById("subscription-personal").value) &&
        	(document.getElementById("subscription-personal").value == "monthly")
      ) pay_monthly();
}




document.getElementById("subscription-personal").addEventListener("change", function(e){
  		document.getElementById("subscription-business").value = document.getElementById("subscription-personal").value;
 		  do_something();
  		
});

document.getElementById("subscription-business").addEventListener("change", function(e){
  		document.getElementById("subscription-personal").value = document.getElementById("subscription-business").value;
 		  do_something();
});

document.getElementsByClassName("pricing-button")[2].style = "background-color:#000;";
 
document.getElementsByClassName("pricing-plan")[0].getElementsByTagName("b")[0].innerHTML = "";
document.getElementsByClassName("pricing-plan")[1].getElementsByTagName("b")[0].innerHTML = "";


document.getElementsByClassName("pricing-plan")[1].innerHTML = document.getElementsByClassName("pricing-plan")[1].innerHTML.replace( /(Price per Seat)/g,'');
pay_monthly();

 


//document.getElementsByClassName("pricing-plan")[1].innerHTML = document.getElementsByClassName("pricing-plan")[1].innerHTML.replace( '()','');




}








    document.getElementsByClassName("logoLink")[0].href="/"; 




    //document.getElementsByClassName('icon-competitor')[2].innerHTML ="";
    //document.getElementsByClassName('buttons')[0].innerHTML ="";
    //document.getElementsByClassName('input-wrapper')[2].innerHTML ="";
    //document.getElementsByClassName('start-using')[0].style ="width:100%;";
   // document.getElementsByClassName('start-using')[1].style ="width:100%;";
    //document.getElementsByClassName('start-using')[2].style ="width:100%;";

    //document.getElementsByClassName('home')[0].innerHTML = home_svg_link;
    //document.getElementsByClassName('home')[0].style = "margin-left:28px;margin-top:28px;color:#acacac;"


    favoicon();
}

const style = document.createElement("style");
style.textContent = ".title h1{ font-size: 30px;} .social-proof img{float:left;} .social-proof{ white-space: pre-wrap; margin-bottom:60px;} .box { overflow: auto; }";
document.head.appendChild(style);  
 
  /*
$('<div />', {
  html: '<div class="social-proof"><img height="40px" src="https://opensearch.org/assets/media/partners/cern/cern_logo.png"><hr><br><h3>CERN</h3><p>Uses Combinatronics CDN to create an addictive incremental game that teaches players the history of high energy particle physics.</p></div>'
}).insertAfter('.social-proof:last');
*/
  
var horizontal_size = $( window ).width();

if(horizontal_size < 450){
   $('h1').css("font-size","30px");
   $('h2').css("font-size","13px");
   $('.box:last center p').css("font-size","13px");
   $('input').css("font-weight","200");
   $('#url').attr("placeholder", "Paste GitHub RAW URL");
   $('#submitemail').attr("placeholder", "Email address for stats");

   $('#submitemail').css("width","100%");

   $('#url-dev').attr("placeholder", "Get Combinatronics URL");
   $('.logo').css("padding-top","13px");
   $('.logoLink').css("padding-top","13px");
   $('.h1').css("padding-top","40px");
}else{
   $('.social-proof').css("width","40%");
  
}
 
 

window.ondragstart = function() {return false}

var old_url1 = "https://combinatronics.org/combinatronics-admin/Public/main/sushi.png";
var new_url1 = "https://combinatronics.org/combinatronics-admin/Public/main/cube.png";
var old_url2 = "https://combinatronics.org/combinatronics-admin/Public/main/sushi.png 2x";
var new_url2 = "https://combinatronics.org/combinatronics-admin/Public/main/cube.png 2x";
var old_url3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFlrHlKyXuddlAhp2B88ndGpSCjSUcXGjx5Q&usqp=CAU";
var new_url3 = "data:image/png;base64,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";
var old_url4 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFlrHlKyXuddlAhp2B88ndGpSCjSUcXGjx5Q&usqp=CAU 2x";
var new_url4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX///8AAAD7+/vz8/Pq6ur29vaoqKj5+fm1tbXt7e3Jycnk5OTe3t7Y2NiGhobT09NnZ2c2NjZZWVl3d3fCwsJhYWGjo6OPj49UVFQuLi59fX2bm5u8vLxsbGwkJCQ7OzsODg5GRkYnJycZGRlERESVlZUdHR16enqLi4uurq5MTEwLCwtA0v3QAAAMiUlEQVR4nO2d2WKqMBCGK4uyKVZx16pttdW+//sdF0YyQ0ICBDgX+a5aRU0gmeXPBN7eDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAy1scPtJeq6EY0RJaPJR+/GtOuWNICdbJaPzj2Zd90erdjBfNwjfHTdKF34w/l0T3v3oOuWacCKvenxwO3djWPXzatJ6I3eRX17cum6iZVxne1iWdy5B3bXDa1EGCxmnwq9uzHuuq2luZnLyUqtcw+2XTe4DFbc3/2V6Nyds9t1qxXxo/76u2TnHqy7brkC1nD7c/2q0rs7cdfNl3Azl99CRwesCtzFueseiLHs5DSRXqHVZB7HU84bcFo2XfeDTxifdlJz+TlbBOHt2B/emx7Eb07XfcnhBv0xP7pkWS62zsNGOjve2+9hlP517bo/mOFl+sFrMG79yHsltQ5vfPZ6P29v6/TP/yZis8PLSOoL/r6nXmxlH/LX/ONuLt49p3//FxHbPRmX+oL9dD7EU8r/5R95vB+WpP/suukS08rkdJWPy/EmyMUlA0H/er+PtyELDlrvUoYdbOS+4LzcJLxx5p4EHzg8u2Sn/36226cXTryZSn3Bx2SUCGQydyP60CQ9HX10QVvFjS+7o/TSXUdeKDQR1uYs+tzLu0OM07KSGHlrSTJ+43MtETj7wtzib/j6pfSVVeN9AlzHW1ylndvvLqwv4GFdxDHqOPssWKF+w/16Ega/M+GwAt53m1ghvLoUzF6mNxYc1rgz9G/mUp6MzzaBL7l0T7yCMf7BDu0Avrmhfj2wOMJsjsPxtPVVvzEpUmWwcA+hXKK9W0/8aP4jtSjn5Xo7lH/Xi4QE4/sra3A8dCw4wybkC3foTa9SHeV6M5flZkhCzNSqz2YU+xAf7aWv/2js2Z1wO/qWRpdf0/5wUPabYxqSexE7Rkb0eDgd+uQLy9+e5L5gNesHSgaFEB/x9xzmbxf2/1zk6cMPauja290XnMbS0Hk1OwWh/Lt4xCR2PWwsizVhy7ylgpCuvnzhB/OZPBmfLRKn9LgEhjPybSf3LWad64nzIfBP9eSLuL+TJz37hVfrV0Lav8XNOKKkgjfT4vS9ygtOdnQZSa/c1/HHK+MLeERUgBnd7K/PzvcZ1xtA3u/x3pQwiLbridQXHG/mUtmNCwmpADN6ZO5sVMpfu3ZhbJWN2MJkIU/GD9N5rCUU9Gn/po/hPmJeOQvGSBX54r7sL+tb7zyZ55WGiuQEpmf/HNYJCjtQUr64J+NyXzBZVPUFPPwR+f7dM6jesq8JNUKI2FZy12vfzKV8qWfyuw21Rn/2gt+/N1bYfhfnyIryxS26lCfjq9ElrBKjFEL7N0n7ErJJWNFyGbRbaMnd8PIr9QWH/dRrYskqJzAtoZ0oTCvKiUC+eOe9OQiT0Uy6jvW9m8f1fQH39+fkxydgLFzWM14LgwixfBGfltJk/LDbxGrJeBXmxKIdX6NkyKa+i+JvEcoXNDyi/AmEWW1cSCCxz4w9GroSHyCUL4QC642P5a9ImNWF5ZHrt8+mms264onsLMNwzlVfiBSQ5dormYxXgQpMe6Z9AZtISEsMxfIFp3Of637USpXGlvTviz3/rPM4yM23WL4g03B3aa18gQpon2xG4LMRx1jBxsGIzjc/wj8za6uDyZH0Dxl5FKapqNdOeizPGcbEy0/qJncqBETbOfSRFsCG3yslW1csX2yJTDbWGEtzial2hduFEompmheGES+KCfrEZE+bLNOIST522OBOoDBNMVuXyxeDDQmbfpsJz/IC098J+ySLDdOOqqNJRb6w6drxqYkgLaILGqR/bxEbQOb0XhEv+aLYybk0vdZeyB/S/o1oTDFn31VfXAH5Qrq7gtbgfFXRrITkBKY1nQk2O4I5eq+QEvIFHUV7bTW2Dq1AW+fmWMzaO57eK+IlXyjJz0NiyfdaqlJsOgN2eWuNDEGpXwXrqzpvAyLRHGuHOXZOYMrbSKz3llsLAOukngfRJclxrRTKpwIM7+sSNkksaeJCGG5lPkSzNs5JV8Q9kQR3xosK2Yv8WTZshDNY8sT0cbt662rJIvWyS17zHXZe7Er7YTVnyGscCXMWpfs4mONv6C25U9pjDylfE1qj+oIqtH+bUgbAogLTlWsgLdaN7CvMeKF8oQJ1YucShUYXKsDwHQBalq+yPcJOh9qhoixBS6m/FM8UrdB6F4RgaLpXqoGBMV598whNBvYK7fCIACsKjUrovULE8oU6NKFbSgKOLXGnK1F4G7MnQqL3iiiSL0oQEFFsWWAQaLggztnK6L1CtFVfbMm4Eykd9Fx8CG0T1nsrq5egwGhQXi5E/OMpHQEZz+e+0H0HrDhU/QLUrr5gsaj/pvkrna+9ufjKsK72XMNIaN48MihSOoa0fxtx+OUfmeNmNeSS1+YRbZJLLg+ap2FOXmAqmFml9V4hyvJFCehusc/7+BhSAea3KIZlz1LBsrwKzWweoQVZ716ugqlIYglZb1Jz4045+aIEUWGNTXGehRKJuioQ2L4GNo/QdQemf4Wxl8vqbd+1lXUYDo0s4+ZClwfTYsc7rKT3CqkkX5TAy9U9y5Z0Kuq9QsCpNrd5pI92i8j0Kqz36lhBh1Pc4II1s6DDFZhYAll9b2lAvpjo+DIhLpgc2YFsOPSnZ6G5lnyhDmQvxaMO6b0TPd7Lh/HTWCXTE4ibCg1HwvRP25JWfflCjUih3ey23ZW2MgHYq9B4bUX6O+L4yylbOKIGbB6pKV8okCb1wruGoURC44Kkvs0jMiAH5V+cAdJ7dRZ5aJQvJIDiyZ0OWO/VafSG6Ze2cLcyUEp4Xkm5vrc8dTaPlGSQ/lQ+kHbZvPiot3xlAIO0YWf4IF2fWNLXLXaEVtR7hbR674s0eMrtcmDjNO23qGj13heQw1CjliVXR+1DCZzhZxuD9OXwiDEd9jJGuhvS7r0vINMmcRvSVleaRxOESW1Uit4y23Q4Es2SKDlab3fbtHxBSZU3fN+psEfR6A/bvfdFdhsDJCbQWo4bO20uETLDtm4EBQITMqa8jSp/mgKQduQLBojb2Pa76WtHB83HiZbL2JJ8kQFTjpWXwIUsiIaoYxkMqi9avAlyGrexJTtwmu9O0kEjdlk73WlLvmDg6G3pKwfcpid1c9bW5IsMiNsyDQ1sAezRQWlGzSU1qL5oyxnegUmXBS6QvWU+MEFrAHXK5NuTLzJAb8usCKzAMAfZqMz7vfoQg2qy5uULhvQ3X5EZRN24XDBAlWBVl55alC8Y0kKUl7AHUTd1Daja+1AtGm9RvmBIB+ABZhcY15x/j1FBUZWqXKslLZ8ATj21kWDtePeARTWr5/JRSUe37gTnkJpOiLq5a2gRWjwel72MED20fOtOqIlI9SZwyQK3hzffl5tPMDzavnWnla5+Pm0n6Iui21EN8fL4rEzBQme37kzHzjPMgABAEDfSsqpSiSzYsNYfAgStflyOQqUv5t2c4lvVe0Ma0/6TRyC0fihD0G7OcYP8BXyiuGzafPWFiIj5ZTCsnIdnBKgOF0XjR6VxB0c3tcNVDKyp30MxcdCBLuDVwTe3UqnPaF2+YEgFzPviBYQttMoFbS98jjO0m6S3kkbjkFc3devOImDEWa/ImKzUWOgCvhJ9PG4l2ngH8kUGJG3+K+rG6RvaeMAaCmx7irXxDuSLDJgh25fHQg4AJRVXbCdQOV/h1jWIldrR8gmvxQsI4L6ZNzkzEIGWOA7CSdaFfMGQ7qPcwUjKElzBDGSJ0MbcnSAa70K+YEjbuAKT87KL6I6cQleNRVV+NA4bPjp6bCN5XMFX+rKFZmDBHnsHVVYvOdE4GOmunjyCJVFIULEzKA7N8FpOXhvvRr7IiFH70iUF+QxkkWjj8Ea78gWnAVkzZCY0T5E23v2TR9DGr2XOhKqluTbauoF2BXckXzCgtvXJDFTPdrA2npXhgDPs8DFcyG07NI1QB23JyMpRO3zyCMDWAX8o+UAReP6m9X6dyRcZTo+P4gxEoBHwcZ95/8NjuGz+ozqq6Q1YG/9xq977Qi+85xtV3IH+RrTxw2tRp9NnxXEeE1bnjEdHzhnrQr7IuOSaU3OFj+477nX94FQSt2lQ/MLcHkANzawBNqbVZyALGRddPziVtX+6JFsfReNdPzg1Mw31a2YyvOwuTB3JFxkT3Rfwif3SxrXs6atDqrddtUvuyTOY+A8e0PyQipqIOh63dJRL4i3gbJOG1kxCL9C9595gMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoNBO/8AQFWcEZrXCnMAAAAASUVORK5CYII= 2x";

$(document).ready(function(){
    $("img[src='"+old_url1+"']").attr("src", new_url1);
    $("img[srcset='"+old_url2+"']").attr("srcset", new_url2).height("35px");
    $("img[src='"+old_url3+"']").attr("src", new_url3).height("30px").width("30px");
    $("img[srcset='"+old_url4+"']").attr("srcset", new_url4);
});

var styleA = document.createElement('style'); styleA.href = 'https://db.onlinewebfonts.com/c/c3ddb99244adbafbc39209439dad58c8?family=LoveFrom%2C+Serif+L+400';
document.head.appendChild(styleA);

var styleB = document.createElement('style'); styleB.innerHTML = `
  @font-face {
        font-family: "TT Norms Light";
        src: url("https://db.onlinewebfonts.com/t/95d392d49b7f403beba771be8312d992.eot");
        src: url("https://db.onlinewebfonts.com/t/95d392d49b7f403beba771be8312d992.eot?#iefix")format("embedded-opentype"),
        url("https://db.onlinewebfonts.com/t/95d392d49b7f403beba771be8312d992.woff2")format("woff2"),
        url("https://db.onlinewebfonts.com/t/95d392d49b7f403beba771be8312d992.woff")format("woff"),
        url("https://db.onlinewebfonts.com/t/95d392d49b7f403beba771be8312d992.ttf")format("truetype"),
        url("https://db.onlinewebfonts.com/t/95d392d49b7f403beba771be8312d992.svg#TT Norms Light")format("svg");
    }
    .logoLink {  font-weight:500;font-family: "TT Norms Light";}

    h1{font-family: "LoveFrom"; font-weight:100; }

    h2{font-family: "LoveFrom";font-weight:100; }
   input { margin-top:-20px;}

`; document.head.appendChild(styleB);
$(document).ready( function() {
  	$("#submitemail").css('width','100%');
});

$(".start-using").remove();
$(".buttons").remove();

$(".logoLink").css({
    'font-family': 'TT Norms Light',
    'font-size': '28px',
  	'font-weight' : '200',
  	'margin-top': '25px',
  	'text-decoration': 'none'
});


$(".box center").first().remove();

$(".icon-competitor").css({
    'font-family': 'TT Norms Light',
    'font-size': '28px',
  	'font-weight' : '400',
  	'margin-top': '25px'
});

$("input").css({
    'font-size': '15px',
  	'font-weight' : '200',
  	'margin-top': '0px',
  	'text-decoration': 'none'
});

$("#url").attr("placeholder", "Paste a GitHub URL here");


$("#url-dev").attr("placeholder", "Get your Combinatronics URL");


$("#submitemail").attr("placeholder", "Submit your email for statistics");

$(".circle:first").css({
  	'margin-top' : '20px'
});


$(".circle:eq(1)").css({
  	'margin-top' : '300px'
});


$(".circle:eq(1)").css({
  	'margin-top' : '300px'
});


$(".icon-competitor").last().css({
  	'margin-top' : '35px'
});

$(".social-proof").css({
  	'font-family': 'TT Norms Light',
    'font-size': '28px',
  	'font-weight' : '200',
  	'text-decoration': 'none'
});

$(".social-proof p ").first().css({
  	'margin-top' : '-30px'
});

$(".social-proof h3").first().css({
  	'margin-top' : '-100px',
    'font-weight' : '800',
});

$(".social-proof:nth-child(2) h3").css({
  	'margin-top' : '-100px',
  	'margin-left' : '50px'
});

$(".social-proof:nth-child(2) p").css({
  	'margin-top' : '-30px',
});

$(".social-proof:nth-child(3) h3").css({
  	'margin-top' : '-20px',
});

$(".social-proof:nth-child(3) p").css({
  	'margin-top' : '-40px',
});


$(".social-proof:nth-child(3) img").css({
  	'margin-top' : '-30px',
});

$(".social-proof:nth-child(3) hr").css({
  	'margin-top' : '20px',
});


$(".social-proof:nth-child(4) h3").css({
  	'visibility':'hidden'
});

$(".social-proof:nth-child(4) p").css({
  	'margin-top' : '-150px',
});


$(".social-proof:nth-child(4) img").css({
  	'margin-top' : '-30px',
});

$(".social-proof:nth-child(4) hr").css({
  	'margin-top' : '20px',
});




var patt = /[a-z0-9._%+-]+@[a-z0-9.]+\.[a-z]{2,3}$/

$('body').on('keyup change paste cut', '#submitemail', function() {

	var res = patt.test($(this).val()) === true  ? $("#submitemail").removeClass("invalid").addClass("valid"): $("#submitemail").removeClass("valid").addClass("invalid");
});


$(".box").css("overflow-y","hidden");




$(".box").last().remove();
$(".container").last().append("<div class='logoFooter' style='color:#fff;'><img width='50px' src='https://combinatronics.org/combinatronics-admin/Public/main/cube.png'><span>Combinatronics</span><br><hr></div>");


$(".container").last().append("<div style='margin-top:-300px;color:#fff'>Copyright © 2018–"+new Date().getFullYear()+" Combinatronics. All rights reserved.</div><br>");


$(".container").last().append(
    "<div class='footer-menu'>"+
        "<a href='/'>Home<a/><br>"+
        "<a href='/about'>About</a><br>"+
        "<a href='/pricing'>Pricing<a/><br>"+
        "<a href='/getting-started'>Getting Started<a/><br>"+
        "<a href='/terms'>Terms & Policies</a>"+
    "</div>");



var styleC = document.createElement('style'); styleC.innerHTML = `

.footer-menu a { color:#fff; }

`; document.head.appendChild(styleC);







$(".container").last().append("<div style='margin-top:25px;color:#fff'><a style='color:#fff' href='mailo:info@combinatronics.org'>info@combinatronics.org</a></div>");




$(".logoFooter").css({
    'height':'400px',
  	'margin-top' : '50px'
});


$(".logoFooter img").css({
  	'margin-top' : '-10px'
});


$(".logoFooter span").css({
    'font-family': 'TT Norms Light',
    'font-size': '28px',
  	'font-weight' : '200',
  	'color' : '#fff',
  	'margin-top' : '110px'
});




$(".logoFooter .slogan").css({
    'font-size': '23px',
  	'font-weight' : '100',
  	'color' : '#fff',
  	'bottom' : '-150px',
    "font-family" : "'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  	'margin-left' : '10px'
});




if (window.location.pathname == "/pricing"){


    var HTML_LOGO =
    '<h1>'+
        '<a class="logoLink" href="/" style="font-family: TT Norms Light; font-size: 28px; font-weight: 200;  text-decoration: none;">'+
            '<img class="logo" src="ttps://combinatronics.org/combinatronics-admin/Public/main/cube.png" alt="" role="presentation">'+
            '<span style="position:relative;top:-15px;">Combinatronics</span>'+
        '</a>'+
    '</h1>';
    $("center h1").remove();

    $("center").first().append(HTML_LOGO);



    $(".background").last().remove();


    $(".footer").last().remove();


/*
    $("body").html().remove();

        $(".socialproof-hero").css('background-color':'#000000');

*/

    //$("center").first().append(HTML_LOGO);

} 


 
/*

footers

$(".container").first().append('<div class="box" style="margin-top:50px"><h3>DNS updates required</h3><p>Non WWW (CNAME) URL for (<a href="#">yourdomain.com</a>)<br><a href="#">gh-project.combinatronics.org</a><br><br>WWW Redirect IP (A record) for www.youdomain.com<br>174.129.25.170</p></div>');


input { font-weight:200 !important;font-size:20px !important;color:#000;opacity:1 !important;}
input { font-weight:200 !important;font-size:20px !important;}

$(".buttons:nth-child(1)").remove();

$("input").css("position","relative");
$("#submitemail").width("100%");
alert('<i class="fa fa-envelope" aria-hidden="true"></i>');
*/

function GitHubIndexCheck(urlpartz){
    urlpartz = urlpartz.replace("http://www.", "").replace("https://www.", "").replace("http://", "").replace("https://", "")
    var partz = urlpartz.replace("github.com/", "").split("/");

    if((urlpartz.substring(0,11) == "github.com/") && (partz[0] !== null) && (partz[1] !== null) && (partz[2] == null)){
        return true;
    }else{
        return false;
    }
}

function GitHubGuiRewrite(urlpartz){
    urlpartz = urlpartz.replace("http://www.", "").replace("https://www.", "").replace("http://", "").replace("https://", "")
    var partz = urlpartz.replace("github.com/", "").split("/");
    if((urlpartz.substring(0,11) == "github.com/") && (partz[0] !== null) && (partz[1] !== null) && (partz[2] == "blob")){
        var path = urlpartz.split("blob").pop();
        return "https://raw.githubusercontent.com/" + partz[0] + "/" + partz[1] + path;
    } else{
        return false;
    }
}

function GitHubRawRewrite(urlpartz){
    urlpartz = urlpartz.replace("http://www.", "").replace("https://www.", "").replace("http://", "").replace("https://", "")
    var partz = urlpartz.replace("raw.githubusercontent.com/", "").split("/");
    if((urlpartz.substring(0,26) == "raw.githubusercontent.com/") && (partz[0] !== null) && (partz[1] !== null) && (partz[2] == "blob")){
        var path = urlpartz.split("blob").pop();
        return "https://raw.githubusercontent.com/" + partz[0] + "/" + partz[1] + path;
    } else{
        return false;
    }
}

function myFunction()
{
    var x = document.getElementById("url");

    if(GitHubIndexCheck(x.value ) != false)
        alert("Please select a specific GitHub file.");

    x.value = x.value.replace("https://cdn.rawgit.com/", "https://raw.githubusercontent.com/");
    x.value = x.value.replace("https://rawgit.com/", "https://raw.githubusercontent.com/");
    if(GitHubGuiRewrite(x.value) != false)
        x.value = GitHubGuiRewrite(x.value);
    if(GitHubRawRewrite(x.value) != false)
        x.value = GitHubRawRewrite(x.value);

}
!function(e, a) {
    "use strict";
    location.href.replace("http://", "").replace("https://", "");
    var s = "https://" + location.href.replace("http://", "").replace("https://", ""),
        i = (location.href.replace("http://", "").replace("https://", ""), location.href.replace("http://", "").replace("https://", ""), a.getElementById("url-dev")),
        l = a.getElementById("url");
    function c(e) {
        var t = a.createEvent("HTMLEvents");
        i.value = encodeURI(e),
        t.initEvent("change", !0, !1),
        i.dispatchEvent(t)
    }
    l.addEventListener("input", function() {
        myFunction();
        var e = decodeURIComponent(l.value.trim()).replace("http://", "").replace("https://", "").split("/"),
            t = e.shift().replace(".githubusercontent.com", ""),
            a = decodeURIComponent(l.value.trim()).replace("http://", "").replace("https://", "").split("/");
        a.splice(0, 1),a = a.join("/"),"gist" === t ? (l.classList.add("valid"), l.classList.remove("invalid"), i.classList.add("valid"), i.classList.remove("invalid"), c(s + a)) : "raw" === t ? (l.classList.add("valid"), l.classList.remove("invalid"), i.classList.add("valid"), i.classList.remove("invalid"), c(s + a)) : (l.classList.remove("valid"), e.length ? l.classList.add("invalid") : l.classList.remove("invalid"), c(""), i.classList.remove("valid"))}, !1)}(window, document);
