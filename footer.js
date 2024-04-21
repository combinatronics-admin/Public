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
    document.getElementsByClassName('buttons')[0].innerHTML ="";
    //document.getElementsByClassName('input-wrapper')[2].innerHTML ="";
    document.getElementsByClassName('start-using')[0].style ="width:100%;";
    document.getElementsByClassName('start-using')[1].style ="width:100%;";
    //document.getElementsByClassName('start-using')[2].style ="width:100%;";

    document.getElementsByClassName('home')[0].innerHTML = home_svg_link;
    document.getElementsByClassName('home')[0].style = "margin-left:28px;margin-top:28px;color:#acacac;"


    favoicon();
}

const style = document.createElement("style");
style.textContent = ".title h1{ font-size: 30px;} .social-proof img{float:left;} .social-proof{ white-space: pre-wrap; margin-bottom:60px;} .box { overflow: auto; }";
document.head.appendChild(style);  

  
$('<div />', {
  html: '<div class="social-proof"><img height="40px" src="https://opensearch.org/assets/media/partners/cern/cern_logo.png"><hr><br><h3>CERN</h3><p>Uses Combinatronics CDN to create an addictive incremental game that teaches players the history of high energy particle physics.</p></div>'
}).insertAfter('.social-proof:last');
  
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


(function() {
    'use strict';



var path = window.location.pathname;
var page = path.split("/").pop();




    if(page == "pricing"){



    window.ondragstart = function() {return false}


    $('.pricing-header').css('text-transform','none');
    $('.pricing-header').css('line-height','25px');
    $('.pricing-header').css('line-height','25px');

    $('.pricing-features-item').css('text-transform','none');

    $('.pricing-plan p:first').html('<a href="/getting-started"><button class="button_trial" role="button">Try for free</button></a>');





    $('.pricing-plan:last').append('<a href="mailto:info@combinatronics.org"><button class="button_trial" role="button">Talk to an expert</button></a>');



    $('.pricing-button').remove();

    $('s').html('');




const style = document.createElement("style");
style.textContent = ".title h1{ font-size: 30px;} .social-proof img{float:left;} .social-proof{ white-space: pre-wrap; margin-bottom:60px;} .box { overflow: auto; }";
document.head.appendChild(style);


$('<div />', {
  html: '<div class="social-proof"><img height="40px" src="https://opensearch.org/assets/media/partners/cern/cern_logo.png"><hr><br><h3>CERN</h3><p>Uses Combinatronics CDN to create an addictive incremental game that teaches players the history of high energy particle physics.</p></div>'
}).insertAfter('.social-proof:last');


   // $('.pricing-header').css('width','250px');



   var grid ='<div class="content social-proof-content">                <div class="container">                    <div class="box">                        <div class="social-proof" style="width: 40%;">                            <img height="40px" src="data:image/png;base64,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">                            <hr>                            <h3>World Wildlife Fund</h3>                            <p>World Wildlife Fund uses Combinatronics for their volunteer recruitement efforts.</p>                        </div>                        <div class="social-proof" style="width: 40%;">                            <img height="40px" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+PHN2ZyB4bWxuczpkYz0naHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8nIHhtbG5zOmNjPSdodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMnIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIycgeG1sbnM6c3ZnPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgODAuNTYzMDA0IDgwLjA1NDEyMycgaGVpZ2h0PSc4MC4wNTQxMjMnIHdpZHRoPSc4MC41NjMwMDQnIHhtbDpzcGFjZT0ncHJlc2VydmUnIHZlcnNpb249JzEuMScgaWQ9J3N2ZzMyODInPjxkZWZzIGlkPSdkZWZzMzI4Nic+PGNsaXBQYXRoIGlkPSdjbGlwUGF0aDMzODgnIGNsaXBQYXRoVW5pdHM9J3VzZXJTcGFjZU9uVXNlJz48cGF0aCBpZD0ncGF0aDMzOTAnIGQ9J20gNTkuOTgzLDg4Ljk5NSA2NC40NTEsMCAwLDY0LjA0NCAtNjQuNDUxLDAgMCwtNjQuMDQ0IHonIC8+PC9jbGlwUGF0aD48L2RlZnM+PGcgdHJhbnNmb3JtPSdtYXRyaXgoMS4yNSwwLDAsLTEuMjUsLTc0Ljk3OTEyNSwxOTEuMjk3ODcpJyBpZD0nZzMyOTAnPjxnIGNsaXAtcGF0aD0ndXJsKCNjbGlwUGF0aDMzODgpJyBpZD0nZzMzODYnPjxnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDkwLjM1MTMsMTI3LjA3ODMpJyBpZD0nZzMzOTInPjxwYXRoIGlkPSdwYXRoMzM5NCcgc3R5bGU9J2ZpbGw6IzBhMGQwZTtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZScgZD0nbSAwLDAgYyAwLC0yLjQzNSAtMS45NzQsLTQuNDA4IC00LjQwOCwtNC40MDggbCAtMjEuNTUyLDAgYyAtMi40MzUsMCAtNC40MDgsMS45NzMgLTQuNDA4LDQuNDA4IGwgMCwyMS41NTIgYyAwLDIuNDM1IDEuOTczLDQuNDA4IDQuNDA4LDQuNDA4IGwgMjEuNTUyLDAgQyAtMS45NzQsMjUuOTYgMCwyMy45ODcgMCwyMS41NTIgTCAwLDAgWicgLz48L2c+PGcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMTI0LjQzMzcsMTI3LjA3ODMpJyBpZD0nZzMzOTYnPjxwYXRoIGlkPSdwYXRoMzM5OCcgc3R5bGU9J2ZpbGw6IzBhMGQwZTtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZScgZD0nbSAwLDAgYyAwLC0yLjQzNSAtMS45NzQsLTQuNDA4IC00LjQwOCwtNC40MDggbCAtMjEuNTUyLDAgYyAtMi40MzQsMCAtNC40MDgsMS45NzMgLTQuNDA4LDQuNDA4IGwgMCwyMS41NTIgYyAwLDIuNDM1IDEuOTc0LDQuNDA4IDQuNDA4LDQuNDA4IGwgMjEuNTUyLDAgQyAtMS45NzQsMjUuOTYgMCwyMy45ODcgMCwyMS41NTIgTCAwLDAgWicgLz48L2c+PGcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoOTAuMzUxMyw5My40MDMxKScgaWQ9J2czNDAwJz48cGF0aCBpZD0ncGF0aDM0MDInIHN0eWxlPSdmaWxsOiMwYTBkMGU7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUnIGQ9J20gMCwwIGMgMCwtMi40MzUgLTEuOTc0LC00LjQwOCAtNC40MDgsLTQuNDA4IGwgLTIxLjU1MiwwIGMgLTIuNDM1LDAgLTQuNDA4LDEuOTczIC00LjQwOCw0LjQwOCBsIDAsMjEuNTUyIGMgMCwyLjQzNCAxLjk3Myw0LjQwOCA0LjQwOCw0LjQwOCBsIDIxLjU1MiwwIEMgLTEuOTc0LDI1Ljk2IDAsMjMuOTg2IDAsMjEuNTUyIEwgMCwwIFonIC8+PC9nPjxnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDEyNC40MzM3LDkzLjQwMjQpJyBpZD0nZzM0MDQnPjxwYXRoIGlkPSdwYXRoMzQwNicgc3R5bGU9J2ZpbGw6IzBhMGQwZTtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZScgZD0nbSAwLDAgYyAwLC0yLjQzNSAtMS45NzQsLTQuNDA4IC00LjQwOCwtNC40MDggbCAtMjEuNTUyLDAgYyAtMi40MzQsMCAtNC40MDgsMS45NzMgLTQuNDA4LDQuNDA4IGwgMCwyMS41NTIgYyAwLDIuNDM1IDEuOTc0LDQuNDA4IDQuNDA4LDQuNDA4IGwgMjEuNTUyLDAgQyAtMS45NzQsMjUuOTYgMCwyMy45ODcgMCwyMS41NTIgTCAwLDAgWicgLz48L2c+PGcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMTA5LjI4ODksMTQyLjM4NzQpJyBpZD0nZzM0MDgnPjxwYXRoIGlkPSdwYXRoMzQxMCcgc3R5bGU9J2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZScgZD0nbSAwLDAgYyAtMS4zNzcsMCAtMi41MDcsLTAuNDMxIC0zLjM5NCwtMS4yOTIgLTAuODg2LC0wLjg2MSAtMS4zMjksLTEuOTYgLTEuMzI5LC0zLjI5NyAwLC0xLjI5OCAwLjQ0NSwtMi4zNzYgMS4zMzMsLTMuMjM3IDAuODg5LC0wLjg2MSAyLjAwMiwtMS4yOTIgMy4zMzgsLTEuMjkyIDEuMzQxLDAgMi40NjIsMC40MzkgMy4zNTksMS4zMTcgMC44OTgsMC44NzkgMS4zNDYsMS45NzIgMS4zNDYsMy4yODEgMCwxLjI3NCAtMC40NDgsMi4zNDYgLTEuMzQ2LDMuMjE2IEMgMi40MSwtMC40MzUgMS4zMDcsMCAwLDAgbSAtMC4wNjksMS42MzYgYyAxLjg1OCwwIDMuNDA2LC0wLjU4OCA0LjY0MiwtMS43NjUgMS4yMzYsLTEuMTc3IDEuODU0LC0yLjY1MiAxLjg1NCwtNC40MjYgMCwtMS43NzMgLTAuNjI0LC0zLjI0MiAtMS44NzEsLTQuNDA0IC0xLjI0OCwtMS4xNjIgLTIuODIxLC0xLjc0MyAtNC43MiwtMS43NDMgLTEuODEzLDAgLTMuMzIyLDAuNTgxIC00LjUzLDEuNzQzIC0xLjIwOCwxLjE2MiAtMS44MTEsMi42MTkgLTEuODExLDQuMzcgMCwxLjc5NiAwLjYwOCwzLjI4MyAxLjgyNCw0LjQ2IDEuMjE2LDEuMTc3IDIuNzUzLDEuNzY1IDQuNjEyLDEuNzY1JyAvPjwvZz48ZyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSg3NC4xNzU4LDEwOC42NTE5KScgaWQ9J2czNDEyJz48cGF0aCBpZD0ncGF0aDM0MTQnIHN0eWxlPSdmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUnIGQ9J20gMCwwIC0yLjE1MywwIDAsLTguOTQ2IDIuMjA1LDAgYyAwLjg2MSwwIDEuNTI5LDAuMDYgMi4wMDYsMC4xNzcgMC40NzYsMC4xMTggMC44NzQsMC4yNjcgMS4xOTIsMC40NDggMC4zMTksMC4xODEgMC42MSwwLjQwMyAwLjg3NCwwLjY2NyAwLjg1LDAuODYxIDEuMjc0LDEuOTQ4IDEuMjc0LDMuMjYzIDAsMS4yOTEgLTAuNDM2LDIuMzQ0IC0xLjMwOCwzLjE2IEMgMy43NjgsLTAuOTI3IDMuMzk5LC0wLjY3NyAyLjk4NCwtMC40ODIgMi41NjcsLTAuMjg3IDIuMTcyLC0wLjE1OCAxLjgsLTAuMDk1IDEuNDI3LC0wLjAzMiAwLjgyNywwIDAsMCBtIC0zLjg3NCwtOS45MzEgMCwxMC45MTIgYyAwLDAuMzM4IDAuMjM5LDAuNTUxIDAuNTY5LDAuNTUxIGwgMy40ODYsMCBjIDEuNjM2LDAgMi45MywtMC4yNDQgMy44ODMsLTAuNzM1IDAuOTUzLC0wLjQ5MSAxLjcxLC0xLjIxMyAyLjI3MywtMi4xNjYgMC41NjMsLTAuOTUzIDAuODQ0LC0xLjk5MiAwLjg0NCwtMy4xMTcgMCwtMC44MDMgLTAuMTU1LC0xLjU3MyAtMC40NjUsLTIuMzA3IC0wLjMxLC0wLjczNSAtMC43NTIsLTEuMzgxIC0xLjMyNiwtMS45MzggLTAuNTg1LC0wLjU3NCAtMS4yNjYsLTEuMDA3IC0yLjA0MSwtMS4zIC0wLjQ1MywtMC4xNzggLTAuODY5LC0wLjI5NiAtMS4yNDgsLTAuMzU3IC0wLjM3OSwtMC4wNiAtMS4xMDIsLTAuMDkgLTIuMTcsLTAuMDkgMCwwIC0yLjg0OSwwLjAwNCAtMy4yNDIsMCAtMC4zNTksLTAuMDA0IC0wLjU2MywwLjI5OSAtMC41NjMsMC41NDcnIC8+PC9nPjxnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDExMS45NzUzLDk5LjcwODYpJyBpZD0nZzM0MTYnPjxwYXRoIGlkPSdwYXRoMzQxOCcgc3R5bGU9J2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZScgZD0nbSAwLDAgYyAtMC4wMSwwIC00LjQ5NCwtMC4wMDMgLTQuNDk0LC0wLjAwMyBsIDAsMy43MzcgNC4xOCwwLjAwNiBjIDAuNDE3LDAuMDA5IDAuNzUzLDAuMzQ5IDAuNzUzLDAuNzY5IDAsMC40MjUgLTAuMzQ0LDAuNzcgLTAuNzcsMC43NyAtMC4wMTQsMCAtNC4xNjMsLTAuMDA0IC00LjE2MywtMC4wMDQgbCAwLDMuNjY4IDQuMzEsMCBjIDAsMCAwLjAxMSwwLjAwMiAwLjAxNiwwLjAwMiAwLjQyNCwwIDAuNzY4LDAuMzQ0IDAuNzY4LDAuNzY4IDAsMC40MjQgLTAuMzQ0LDAuNzY4IC0wLjc2OCwwLjc2OCAtMC4wMTQsMCAtNC4wMiwtMC4wMDUgLTUuNTA0LC0wLjAwNSAtMC4zMjEsMCAtMC41NDUsLTAuMjU5IC0wLjU0NSwtMC41NDMgbCAwLC0xMC45MiBjIDAsLTAuMzExIDAuMjU1LC0wLjU0OSAwLjU0NSwtMC41NDkgMS41MTMsMCA1LjY1OCwtMC4wMDUgNS42NzIsLTAuMDA1IDAuNDI2LDAgMC43NywwLjM0NSAwLjc3LDAuNzcxIEMgMC43NywtMC4zNDUgMC40MjYsMCAwLDAnIC8+PC9nPjxnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDc5LjQzMjksMTM0LjA1NDYpJyBpZD0nZzM0MjAnPjxwYXRoIGlkPSdwYXRoMzQyMicgc3R5bGU9J2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZScgZD0nbSAwLDAgYyAtMC4xMTYsMCAtMC4zMjksLTAuMDY4IC0wLjMzLC0wLjA2OCAtMS4wMjMsLTAuNDczIC0yLjA2MywtMC43MDkgLTMuMTIyLC0wLjcwOSAtMS4zOTUsMCAtMi41NCwwLjQyNSAtMy40MzUsMS4yNzUgLTAuODk1LDAuODQ5IC0xLjM0MywxLjkzNCAtMS4zNDMsMy4yNTQgMCwxLjMwOSAwLjQ1NSwyLjM5OCAxLjM2NSwzLjI2OCAwLjkwOSwwLjg2OSAyLjA1MywxLjMwNCAzLjQzLDEuMzA0IDAuOTcyLDAgMS45NDQsLTAuMTk4IDIuOTQ4LC0wLjYxOCAwLjEwNywtMC4wNTIgMC4yNDEsLTAuMDk3IDAuMzY4LC0wLjA5NyAwLjQ0OSwwIDAuODEzLDAuMzY0IDAuODEzLDAuODEzIDAsMC4zNDUgLTAuMjkyLDAuNjcgLTAuNTI0LDAuNzYgLTEuMzQsMC41MiAtMi41NzEsMC43NzggLTMuNjkxLDAuNzc4IC0xLjgzMSwwIC0zLjM3LC0wLjU5NyAtNC42MTksLTEuNzkxIC0xLjI0OCwtMS4xOTQgLTEuODcyLC0yLjY2NiAtMS44NzIsLTQuNDE3IDAsLTEuMTAyIDAuMjcyLC0yLjEyNyAwLjgxOCwtMy4wNzQgMC41NDUsLTAuOTQ3IDEuMjg1LC0xLjY5IDIuMjIxLC0yLjIzIDAuOTM1LC0wLjUzOSAyLjA3NSwtMC44MDkgMy40MTgsLTAuODA5IDEuNDIxLDAgMi43MTEsMC4yNjEgMy44NDQsMC43NyAwLjMzLDAuMTI0IDAuNTM0LDAuNDQgMC41MzQsMC43NjggQyAwLjgyMywtMC4zNjkgMC40NTQsMCAwLDAnIC8+PC9nPjwvZz48L2c+PC9zdmc+">                            <hr>                            <h3>Your site/app/plugin?</h3>                            <p>Countless of sites, apps and plugins are already using libraries and config files served by Combinatronics.</p>                        </div>                        <div class="social-proof" style="width: 40%;">                            <img height="40px" src="data:image/png;base64,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">                            <hr>                            <h3>EGAP</h3>                            <p>Evidence in Governance and Politics (EGAP) generates guides using R+markdown and serves them using Combinatronics.</p>                        </div><div><div class="social-proof" style="width: 40%;"><img height="40px" src="https://opensearch.org/assets/media/partners/cern/cern_logo.png"><hr><br><h3>CERN</h3><p>Uses Combinatronics CDN to create an addictive incremental game that teaches players the history of high energy particle physics.</p></div></div>                    </div>                </div>                <br><div class="container footer">    <div class="box">        <center><p>Copyright © 2018–2024 Combinatronics. All rights reserved.</p></center>        <center><p><a href="/">Home</a> - <a href="https://packages.combinatronics.org">Packages</a> - <a href="about">About</a> - <a href="getting-started">Getting Started</a> - <a href="terms">Terms &amp; Policies</a> -  <a onclick="feedback();">info@combinatronics.org</a></p></center><!--Ontwikkelaars - Statistieken -->    </div></div>            </div>';


   $('.social-proof').css("width","40%");

   $('.social-proof').css("line-height","1.7");



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
    document.getElementsByTagName('body')[0].innerHTML = document.getElementsByTagName('body')[0].innerHTML.replace("noth", "notch");
    document.getElementsByTagName('body')[0].innerHTML = document.getElementsByTagName('body')[0].innerHTML.replace("Regular Licence", "Combinatronics<br>Free<br>");
    document.getElementsByTagName('body')[0].innerHTML = document.getElementsByTagName('body')[0].innerHTML.replace("Commercial licence ", "Combinatronics<br>Pro<br>");
    document.getElementsByTagName('body')[0].innerHTML = document.getElementsByTagName('body')[0].innerHTML.replace("(seat)", "(commercial usage)");
    document.getElementsByTagName('body')[0].innerHTML = document.getElementsByTagName('body')[0].innerHTML.replace("Corporate license","Combinatronics <br>Enterprise<br>");
    document.getElementsByTagName('body')[0].innerHTML = document.getElementsByTagName('body')[0].innerHTML.replace("Serve public repo files","Serve Public <br>GitHub files");
    document.getElementsByTagName('body')[0].innerHTML = document.getElementsByTagName('body')[0].innerHTML.replace("Serve public repo files","Serve Public <br>GitHub files");
    document.getElementsByTagName('body')[0].innerHTML = document.getElementsByTagName('body')[0].innerHTML.replace("Serve public repo files","Serve Public <br>GitHub files");
    document.getElementsByTagName('body')[0].innerHTML = document.getElementsByTagName('body')[0].innerHTML.replace("Serve private repo files","Priority support");
    document.getElementsByTagName('body')[0].innerHTML = document.getElementsByTagName('body')[0].innerHTML.replace("For teams up to 15 members","");
    document.getElementsByTagName('body')[0].innerHTML = document.getElementsByTagName('body')[0].innerHTML.replace("33.95","20");
    document.getElementsByTagName('body')[0].innerHTML = document.getElementsByTagName('body')[0].innerHTML.replace("(Price per Seat)","");
    document.getElementsByTagName('body')[0].innerHTML = document.getElementsByTagName('body')[0].innerHTML.replace("billed annually","");
    //var HTML = ' <input type="radio" id="html" name="fav_language" value="HTML"><label for="html">3 Years</label><br><input type="radio" id="css" name="fav_language" value="CSS"><label for="css">1 year</label><br><input type="radio" id="javascript" name="fav_language" value="JavaScript"><label for="javascript">Monthly</label>';
    var HTML = '<br><br><div style="width:250px;text-transform:none;"><input checked="checked"  style="float:left;" type="radio" id="duration" name="duration" value="years"><label for="years" style="text-transform:none;float:left;">3 Years</label><input style="float:left;" type="radio" id="duration" name="duration" value="year"><label for="year" style="text-transform:none;float:left;">1 Year</label><input style="float:left;" type="radio" id="duration" name="duration" value="monthly"><label for="Monthly" style="float:left;text-transform:none;">Monthly</label></div>';
    document.getElementsByTagName('body')[0].innerHTML = document.getElementsByTagName('body')[0].innerHTML.replace("Per month","Per month <br><center>"+HTML+"</center>");
    document.getElementsByTagName('body')[0].innerHTML = document.getElementsByTagName('body')[0].innerHTML.replace("$274.95","");


    $('input').change(
    function(){
            if(this.value == "year"){
                 $(".button_stripe").parent().attr('href', 'https://buy.stripe.com/fZe3d92zZ52m45WbIP');
                 $('.pricing-price').html('$26.5 <br> <span style="color:#000;text-transform:capitalize;">Per month <br></span>');
            }else if(this.value == "monthly"){
                 $(".button_stripe").parent().attr('href', 'https://buy.stripe.com/aEUbJF1vVcuO31S28e');
                $('.pricing-price').html('$33.95 <br> <span style="color:#000;text-transform:capitalize;">Per month <br></span>');
            }else if(this.value == "years"){
                $(".button_stripe").parent().attr('href', 'https://buy.stripe.com/fZe00X2zZgL4auk7sA');
                $('.pricing-price').html('$20 <br> <span style="color:#000;text-transform:capitalize;">Per month <br></span>');
            }
    });



    $(".button_trial").text();

    }

})();
