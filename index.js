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

